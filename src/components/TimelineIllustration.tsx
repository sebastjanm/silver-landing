/**
 * TimelineIllustration - SVG timeline from ancient coin to modern bar
 */

"use client";

import { useEffect, useRef, useState } from "react";

export function TimelineIllustration() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto mt-16">
      {/* Timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20" />
      
      {/* Timeline line animated fill */}
      <div
        className="absolute top-1/2 left-0 h-0.5 bg-white/60 transition-all duration-2000 ease-out"
        style={{
          width: isVisible ? "100%" : "0%",
          transitionDelay: "400ms",
        }}
      />

      {/* Timeline points */}
      <div className="relative flex justify-between items-center">
        {[
          { label: "Antika", year: "3000 pr. n. št." },
          { label: "Rimski imperij", year: "100 n. št." },
          { label: "Srednji vek", year: "1200" },
          { label: "Danes", year: "2026" },
        ].map((point, i) => (
          <div
            key={i}
            className={`flex flex-col items-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${600 + i * 200}ms` }}
          >
            {/* Point */}
            <div className="w-4 h-4 rounded-full bg-white mb-4 shadow-lg" />
            
            {/* Label */}
            <div className="text-center">
              <div className="text-white/90 font-semibold text-sm mb-1">{point.label}</div>
              <div className="text-white/50 text-xs">{point.year}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Caption */}
      <p
        className={`text-center text-white/60 text-sm mt-12 transition-all duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1400ms" }}
      >
        Tisočletja kasneje srebro še vedno ohranja vrednost
      </p>
    </div>
  );
}
