/**
 * Email capture form for "Domače srebro" guide lead magnet
 * Editorial redesign Oct 2026
 * Submits to /api/capture, redirects to /hvala on success
 * 
 * TODO: Owner to create PDF guide "Domače srebro: Vodnik za varčevanje v srebrnih kovancih"
 */

"use client";

import { useState } from "react";
import { CheckCircle2, BookOpen } from "lucide-react";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
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
    <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-10 shadow-md lg:p-12">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-xl bg-accent-bg">
          <BookOpen className="size-8 text-accent" />
        </div>
        <h3 className="mb-3 font-serif text-3xl font-normal text-navy">
          Brezplačen vodnik: Domače srebro
        </h3>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-text-muted">
          Prenesite praktičen vodnik o tem, kako začeti varčevati v srebrnih kovancih, 
          kaj kupiti, kako hraniti doma in kdaj prodati.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="mx-auto max-w-md">
        <div className="mb-4 text-left">
          <label htmlFor="email-input" className="mb-2 block text-sm font-medium text-navy">
            Vaš email naslov
          </label>
          <div className="flex gap-3 max-sm:flex-col">
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ime@primer.si"
              required
              className="flex-1 rounded-lg border border-border bg-white px-5 py-3.5 text-base transition-all placeholder:text-text-subtle focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="cursor-pointer whitespace-nowrap rounded-lg bg-navy px-7 py-3.5 font-medium text-white shadow-sm transition-all hover:bg-navy-light disabled:opacity-60"
            >
              {status === "sending" ? "Pošiljam..." : status === "error" ? errorMsg : "Prenesite vodnik"}
            </button>
          </div>
        </div>
      </form>
      
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-text-muted">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-green" />
          Brez spama
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-green" />
          Odjava kadarkoli
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-green" />
          Takoj v vašem e-poštnem nabiralniku
        </span>
      </div>

      <div className="mt-6 rounded-lg border border-accent-bg bg-accent-bg p-4 text-center text-xs text-accent">
        <strong>TODO:</strong> Create PDF guide &quot;Domače srebro: Vodnik za varčevanje v srebrnih kovancih&quot;
      </div>
    </div>
  );
}
