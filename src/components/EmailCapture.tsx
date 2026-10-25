/**
 * Email capture form for guide lead magnet - Modern trust-first redesign
 * Submits to /api/capture, redirects to /hvala on success
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
    <div className="mx-auto max-w-2xl rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
      <div className="mx-auto mb-5 flex size-16 items-center justify-center rounded-xl bg-gray-100">
        <BookOpen className="size-8 text-gray-700" />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-gray-900">Brezplačen vodnik</h3>
      <p className="mb-8 text-gray-600">
        Prenesite: <strong>&quot;Kako začeti z naložbo v srebro&quot;</strong>
      </p>
      <form onSubmit={handleSubmit} className="mx-auto max-w-md">
        <div className="mb-3 text-left">
          <label htmlFor="email-input" className="mb-2 block text-sm font-medium text-gray-900">
            Vaš e-poštni naslov
          </label>
          <div className="flex gap-3 max-sm:flex-col">
            <input
              id="email-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ime@primer.si"
              required
              className="flex-1 rounded-lg border border-gray-300 bg-white px-5 py-3.5 text-base transition-all placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="cursor-pointer whitespace-nowrap rounded-lg bg-gray-900 px-7 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-gray-800 disabled:opacity-60"
            >
              {status === "sending" ? "Pošiljam..." : status === "error" ? errorMsg : "Pošlji"}
            </button>
          </div>
        </div>
      </form>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
        <span className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-green-600" />
          Brez spama
        </span>
        <span className="flex items-center gap-2">
          <CheckCircle2 className="size-4 text-green-600" />
          Kadarkoli se lahko odjavite
        </span>
      </div>
    </div>
  );
}
