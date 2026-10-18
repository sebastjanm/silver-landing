"use client";

import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/sebom/new-meeting";

/** Click-to-load Calendly: the ~4 MB widget is only fetched once the visitor asks for it. */
export function CalendlyEmbed() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <div className="overflow-hidden rounded-xl shadow-md">
        <iframe
          src={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`}
          width="100%"
          height="700"
          frameBorder="0"
          title="Rezervirajte posvet"
        />
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-white p-10 text-center shadow-md">
      <div className="mb-4 text-4xl">📅</div>
      <p className="mb-6 text-lg text-text-muted">
        Izberite termin za 15-minutni pogovor. Brez obveznosti.
      </p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onMouseEnter={() => {
          // warm up the connection on hover
          const l = document.createElement("link");
          l.rel = "preconnect";
          l.href = "https://calendly.com";
          document.head.appendChild(l);
        }}
        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gold px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-lg"
      >
        Izberite termin posveta →
      </button>
      <p className="mt-4 text-sm text-text-muted">
        ali{" "}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-navy underline"
        >
          odprite koledar v novem zavihku
        </a>
      </p>
    </div>
  );
}
