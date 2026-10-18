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
    <div className="border border-rule bg-white p-10">
      <div className="mb-8 text-center">
        <h2 className="mb-3 font-serif text-2xl text-ink">
          Brezplačen vodnik
        </h2>
        <p className="text-text-muted">
          Prenesite: <strong className="text-ink">&quot;Kako začeti z naložbo v srebro&quot;</strong>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md"
      >
        <label
          htmlFor="lead-email"
          className="mb-2 block text-sm font-medium text-ink"
        >
          Vaš email naslov
        </label>
        <div className="flex gap-3 max-sm:flex-col">
        <input
          id="lead-email"
          name="email"
          autoComplete="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="vas@email.com"
          required
          className="flex-1 border border-rule bg-white px-4 py-3 font-sans text-base transition-all focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="cursor-pointer whitespace-nowrap bg-gold px-6 py-3 font-sans font-semibold text-white transition-all hover:bg-gold-light disabled:opacity-60"
        >
          {status === "sending"
            ? "Pošiljam..."
            : status === "error"
              ? errorMsg
              : "Prenesite"}
        </button>
        </div>
      </form>
      <p className="mt-4 text-center text-xs text-text-light">
        Brez spama · Odjava kadarkoli
      </p>
    </div>
  );
}
