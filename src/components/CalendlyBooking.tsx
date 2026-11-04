/**
 * Click-to-load Calendly booking for the consultation page
 * The widget is only fetched once the visitor asks for it
 */

"use client";

import { useState } from "react";
import type { Content } from "@/content/sl";

interface CalendlyBookingProps {
  content: Content;
  headingClassName: string;
}

export function CalendlyBooking({ content, headingClassName }: CalendlyBookingProps) {
  const [showCalendly, setShowCalendly] = useState(false);
  const c = content.consultation;

  return !showCalendly ? (
    <div className="rounded-lg bg-white p-6 md:p-10 shadow-[0_1px_0_#d9d4cb,0_12px_32px_-20px_rgba(10,22,40,0.35)]">
      <h2 className={`${headingClassName} text-3xl font-bold`}>{c.widgetHeadline}</h2>
      <p className="mt-2 mb-6 text-lg text-gray-700">{c.widgetDescription}</p>
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <button
          type="button"
          onClick={() => setShowCalendly(true)}
          className="cursor-pointer rounded-full bg-[#0a1628] px-4 py-4 text-base font-semibold sm:px-8 sm:text-lg text-white transition-colors hover:bg-[#1a2332] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a1628]"
        >
          {c.cta1}
        </button>
        <a
          href="https://calendly.com/sebom/new-meeting"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-base text-[#0a1628] underline underline-offset-4 hover:text-gray-700"
        >
          {c.cta2}
        </a>
      </div>
    </div>
  ) : (
    <div className="overflow-hidden rounded-lg bg-white shadow-[0_1px_0_#d9d4cb,0_12px_32px_-20px_rgba(10,22,40,0.35)]">
      <iframe src="https://calendly.com/sebom/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1" width="100%" height="700" frameBorder="0" title={c.iframeTitle} className="block" />
    </div>
  );
}
