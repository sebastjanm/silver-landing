/**
 * Email capture form for guide lead magnet - Modern trust-first redesign
 * Submits to /api/capture, redirects to /hvala on success
 */

"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

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
    <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-gradient-to-br from-white to-bg-soft p-10 text-center shadow-card">
      <div className="mb-5 text-5xl">📘</div>
      <h3 className="mb-3 text-2xl font-bold text-navy">Brezplačen vodnik</h3>
      <p className="mb-8 text-text-muted">
        Prenesite: <strong>&quot;Kako začeti z naložbo v srebro&quot;</strong>
      </p>
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3 max-sm:flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Vaš email"
          required
          aria-label="Email naslov"
          className="flex-1 rounded-lg border border-border bg-white px-5 py-3.5 text-base transition-all placeholder:text-text-subtle focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer whitespace-nowrap rounded-lg bg-accent px-7 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-accent-light disabled:opacity-60"
        >
          {status === "sending" ? "Pošiljam..." : status === "error" ? errorMsg : "Pošlji"}
        </button>
      </form>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-green" />
          Brez spama
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-green" />
          Odjava kadarkoli
        </span>
      </div>
    </div>
  );
}
