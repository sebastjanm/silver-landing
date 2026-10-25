/**
 * StoryChapter - Full-viewport chapter container with scroll reveal
 * Used for chapter-based storytelling narrative
 */

"use client";

import { useEffect, useRef, useState } from "react";

interface StoryChapterProps {
  number: string;
  id: string;
  theme: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}

export function StoryChapter({ number, id, theme, className = "", children }: StoryChapterProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
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
    <section
      ref={ref}
      id={id}
      data-chapter={number}
      className={`relative min-h-screen flex items-center justify-center py-20 scroll-mt-16 ${className}`}
    >
      {/* Chapter number indicator */}
      <div
        className={`absolute top-8 left-8 text-sm font-mono tracking-widest opacity-50 transition-opacity duration-1000 ${
          isVisible ? "opacity-50" : "opacity-0"
        } ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        {number}
      </div>

      {/* Content with subtle reveal animation (no opacity change for LCP) */}
      <div
        className={`w-full transition-transform duration-1000 ${
          isVisible ? "translate-y-0" : "translate-y-6"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        {children}
      </div>
    </section>
  );
}
