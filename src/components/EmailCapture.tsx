"use client";

import { useState } from "react";

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
    <div className="mx-auto max-w-xl rounded-2xl border border-border bg-gradient-to-br from-bg-warm to-bg-warm/70 p-10 text-center">
      <div className="mb-4 text-5xl">📘</div>
      <h3 className="mb-2 font-serif text-2xl text-navy">
        Brezplačen vodnik
      </h3>
      <p className="mb-6 text-text-muted">
        Prenesite:{" "}
        <strong>&quot;Kako začeti z naložbo v srebro&quot;</strong>
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-sm gap-3 max-sm:flex-col"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Vaš email"
          required
          className="flex-1 rounded-lg border border-border bg-white px-4 py-3.5 font-sans text-base transition-all focus:border-gold focus:ring-2 focus:ring-gold/10 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer whitespace-nowrap rounded-lg bg-gold px-6 py-3.5 font-sans font-semibold text-white transition-all hover:-translate-y-px hover:bg-gold-light disabled:opacity-60"
        >
          {status === "sending"
            ? "Pošiljam..."
            : status === "error"
              ? errorMsg
              : "Pošlji →"}
        </button>
      </form>
      <p className="mt-4 text-sm text-text-muted">
        <span>✓ Brez spama</span>
        <span className="mx-2">✓ Odjava kadarkoli</span>
      </p>
    </div>
  );
}
