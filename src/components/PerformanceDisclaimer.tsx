/**
 * PerformanceDisclaimer - Regulatory compliance for past performance figures
 * REQUIRED: Must accompany all historical performance data
 * Supports both SL and EN via content prop
 */

import type { Content } from "@/content/sl";

interface PerformanceDisclaimerProps {
  content: Content;
  className?: string;
}

export function PerformanceDisclaimer({ content, className = "" }: PerformanceDisclaimerProps) {
  const c = content.disclaimer;
  
  return (
    <div className={`text-center ${className}`}>
      <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
        <strong>{c.source.split(":")[0]}:</strong> {c.source.split(": ")[1]}
        <br />
        <strong>{c.legal.split(":")[0]}:</strong> {c.legal.split(": ")[1]}
      </p>
    </div>
  );
}
