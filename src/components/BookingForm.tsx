"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { Ornament, PhoneGlyph, ShieldGlyph } from "@/components/Glyphs";
import {
  TIME_WINDOWS,
  URGENCY_OPTIONS,
  bookingFormSchema,
  type BookingFormInput,
} from "@/lib/leads/schemas";

type Status = "idle" | "sending" | "error" | "success";

type BookingFormProps = {
  /** Identifier for the surface this form was placed on. Sent to /api/lead and analytics. */
  source: string;
  /** Optional pre-form heading. Defaults to "Rezerviraj brezplačen posvet". */
  heading?: string;
  /** Compact layout — drops the time/urgency pickers + textarea. Use on /hvala upsell. */
  compact?: boolean;
};

const TIME_LABELS: Record<(typeof TIME_WINDOWS)[number], string> = {
  jutro: "Jutro",
  popoldne: "Popoldne",
  vecer: "Večer",
};

const URGENCY_LABELS: Record<(typeof URGENCY_OPTIONS)[number], string> = {
  cim_prej: "Čim prej",
  flexible: "Kdaj vam ustreza",
};

export function BookingForm({
  source,
  heading = "Rezerviraj brezplačen posvet",
  compact = false,
}: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [timeWindow, setTimeWindow] =
    useState<(typeof TIME_WINDOWS)[number] | null>(null);
  const [urgency, setUrgency] =
    useState<(typeof URGENCY_OPTIONS)[number] | null>(null);
  const [consent, setConsent] = useState(false);
  const [utm, setUtm] = useState<{
    source?: string;
    medium?: string;
    campaign?: string;
  }>({});

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      source: params.get("utm_source") ?? undefined,
      medium: params.get("utm_medium") ?? undefined,
      campaign: params.get("utm_campaign") ?? undefined,
    });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    setFieldErrors({});

    const candidate: BookingFormInput = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      message: compact ? undefined : message.trim() || undefined,
      timeWindow: compact ? undefined : timeWindow ?? undefined,
      urgency: compact ? undefined : urgency ?? undefined,
      consent: consent as true,
      source,
      utmSource: utm.source,
      utmMedium: utm.medium,
      utmCampaign: utm.campaign,
    };

    const validated = bookingFormSchema.safeParse(candidate);
    if (!validated.success) {
      const errs: Record<string, string> = {};
      for (const issue of validated.error.issues) {
        const key = issue.path.join(".");
        if (!errs[key]) errs[key] = issue.message;
      }
      setFieldErrors(errs);
      setStatus("error");
      return;
    }

    try {
      const resp = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated.data),
      });
      const data = await resp.json();
      if (resp.ok && data.success) {
        track("lead_submit", { source });
        setStatus("success");
      } else {
        setErrorMsg(data.error || "Napaka pri pošiljanju. Poskusite znova.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Napaka pri povezavi. Poskusite znova.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return <SuccessState timeWindow={timeWindow} compact={compact} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="editorial-form bg-paper-cream relative mx-auto w-full max-w-xl border border-[color-mix(in_srgb,var(--color-gold)_22%,transparent)] p-6 shadow-md sm:p-9"
      noValidate
    >
      {/* Decorative corner brackets */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/60"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/60"
      />

      <header className="mb-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          <Ornament />
          <span>Brezplačen 15-minutni klic</span>
          <Ornament />
        </div>
        <h2 className="font-serif text-2xl leading-tight text-navy sm:text-3xl">
          {heading}
        </h2>
      </header>

      <div className="space-y-5">
        <Field id="bf-name" label="Ime" error={fieldErrors.name} required>
          <input
            id="bf-name"
            type="text"
            autoComplete="name"
            inputMode="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Marko Novak"
          />
        </Field>

        <Field id="bf-phone" label="Telefon" error={fieldErrors.phone} required>
          <input
            id="bf-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="041 234 567"
          />
        </Field>

        <Field id="bf-email" label="Email (neobvezno)" error={fieldErrors.email}>
          <input
            id="bf-email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="vas@email.si"
          />
        </Field>

        {!compact && (
          <>
            <fieldset>
              <legend className="mb-2 font-serif italic text-text-muted">
                Kdaj vam ustreza klic?
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {TIME_WINDOWS.map((tw) => (
                  <button
                    key={tw}
                    type="button"
                    className="choice-pill"
                    aria-pressed={timeWindow === tw}
                    onClick={() => setTimeWindow(timeWindow === tw ? null : tw)}
                  >
                    {TIME_LABELS[tw]}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 font-serif italic text-text-muted">
                Urgenca
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {URGENCY_OPTIONS.map((u) => (
                  <button
                    key={u}
                    type="button"
                    className="choice-pill"
                    aria-pressed={urgency === u}
                    onClick={() => setUrgency(urgency === u ? null : u)}
                  >
                    {URGENCY_LABELS[u]}
                  </button>
                ))}
              </div>
            </fieldset>

            <Field id="bf-message" label="Sporočilo (neobvezno)" error={fieldErrors.message}>
              <textarea
                id="bf-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Kratko opišite vašo situacijo ali vprašanje."
                maxLength={1000}
              />
            </Field>
          </>
        )}

        <label className="flex cursor-pointer items-start gap-3 text-sm text-text-muted">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 size-4 cursor-pointer accent-[color:var(--color-navy)]"
          />
          <span>
            Strinjam se, da me kontaktirate glede posveta. Vaše podatke
            uporabimo izključno za ta klic in jih ne posredujemo tretjim osebam.
          </span>
        </label>
        {fieldErrors.consent && (
          <p className="-mt-3 text-sm text-red">{fieldErrors.consent}</p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="group flex min-h-[56px] w-full items-center justify-center gap-3 bg-navy px-6 py-4 font-serif text-lg text-white transition-all hover:bg-navy-light disabled:opacity-60"
        >
          <span>
            {status === "sending"
              ? "Pošiljam…"
              : "Rezerviraj posvet"}
          </span>
          {status !== "sending" && (
            <span aria-hidden="true" className="text-gold-light transition-transform group-hover:translate-x-0.5">
              →
            </span>
          )}
        </button>

        {status === "error" && errorMsg && (
          <p role="alert" className="text-center text-sm text-red">
            {errorMsg}
          </p>
        )}

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-2 text-xs text-text-muted">
          <li className="flex items-center gap-1.5">
            <ShieldGlyph className="text-gold" /> Brez prodajnega pritiska
          </li>
          <li className="flex items-center gap-1.5">
            <PhoneGlyph className="text-gold" /> Klic v 24 urah
          </li>
        </ul>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required && <span className="ml-1 text-gold">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red">{error}</p>}
    </div>
  );
}

function SuccessState({
  timeWindow,
  compact,
}: {
  timeWindow: (typeof TIME_WINDOWS)[number] | null;
  compact: boolean;
}) {
  return (
    <div className="bg-paper-cream relative mx-auto w-full max-w-xl border border-[color-mix(in_srgb,var(--color-gold)_22%,transparent)] p-8 text-center shadow-md sm:p-12">
      <div className="mb-4 flex justify-center text-gold">
        <ShieldGlyph className="!h-9 !w-9" />
      </div>
      <h2 className="mb-3 font-serif text-2xl text-navy sm:text-3xl">
        Hvala — sporočilo prejeto.
      </h2>
      <p className="mx-auto mb-5 max-w-md text-text-muted">
        Naš svetovalec vas pokliče v <span className="numerals">24</span> urah
        {timeWindow ? (
          <>
            ,{" "}
            <span className="font-medium text-navy">
              {TIME_LABELS[timeWindow].toLowerCase()}
            </span>
          </>
        ) : (
          ""
        )}
        . Brez obveznosti, brez prodajnega pritiska.
      </p>
      <div className="mx-auto h-px max-w-[120px] bg-gold/30" />
      {!compact && (
        <p className="mt-5 text-sm text-text-muted">
          Medtem si lahko ogledate <a href="/cena-srebra" className="text-navy underline-offset-4 hover:underline">trenutno ceno srebra</a> ali <a href="/blog" className="text-navy underline-offset-4 hover:underline">prebirate naše članke</a>.
        </p>
      )}
    </div>
  );
}
