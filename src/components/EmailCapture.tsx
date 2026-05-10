"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { CertificateGlyph, Ornament } from "@/components/Glyphs";

type Status = "idle" | "sending" | "error";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const resp = await fetch("/api/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await resp.json();
      if (resp.ok && data.success) {
        track("email_capture", { source: "lead_magnet" });
        window.location.href = "/hvala";
      } else {
        setErrorMsg(data.error || "Napaka. Poskusite znova.");
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setErrorMsg("Napaka. Poskusite znova.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  }

  return (
    <div className="bg-paper-cream relative mx-auto max-w-xl border border-gold/30 p-7 shadow-md sm:p-9">
      <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-gold/60" />
      <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-gold/60" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-gold/60" />
      <span className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-gold/60" />

      <header className="mb-6 text-center">
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          <Ornament />
          <span>Brezplačen vodnik · PDF</span>
          <Ornament />
        </div>
        <div className="mb-3 flex justify-center text-gold">
          <CertificateGlyph className="!h-8 !w-8" />
        </div>
        <h3 className="font-serif text-xl text-navy sm:text-2xl">
          Kako začeti z naložbo v srebro
        </h3>
        <p className="mt-2 font-serif italic text-sm text-text-muted">
          <span className="numerals">25</span> strani · brez spama · odjava
          kadarkoli
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="editorial-form flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="ec-email" className="sr-only">
          Email
        </label>
        <input
          id="ec-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vas@email.si"
          required
          autoComplete="email"
          inputMode="email"
          className="flex-1"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex min-h-[52px] items-center justify-center gap-2 whitespace-nowrap bg-navy px-6 py-3 font-serif text-base text-white transition-all hover:bg-navy-light disabled:opacity-60 sm:min-w-[160px]"
        >
          {status === "sending"
            ? "Pošiljam…"
            : status === "error"
              ? errorMsg
              : (
                <>
                  <span>Pošlji vodnik</span>
                  <span aria-hidden="true" className="text-gold-light">→</span>
                </>
              )}
        </button>
      </form>
    </div>
  );
}
