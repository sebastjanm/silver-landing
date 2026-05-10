/**
 * Inline SVG glyph set — replaces emoji icons across the site.
 * All glyphs are 24×24 line art at 1.5 stroke, current color (`stroke="currentColor"`).
 * Colour them via Tailwind text-* classes on the parent.
 */

type GlyphProps = { className?: string; "aria-hidden"?: boolean };

const base = (className?: string) =>
  `inline-block h-[1.25em] w-[1.25em] shrink-0 ${className ?? ""}`.trim();

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Heraldic shield — trust / protection. */
export function ShieldGlyph({ className, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={base(className)}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <path
        {...strokeProps}
        d="M12 3 4.5 5.5v6c0 4.5 3 8.2 7.5 9.5 4.5-1.3 7.5-5 7.5-9.5v-6L12 3z"
      />
      <path {...strokeProps} d="M9 11.5l2 2 4-4.5" />
    </svg>
  );
}

/** Stacked ingot bars — physical metal. */
export function IngotGlyph({ className, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={base(className)}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <path
        {...strokeProps}
        d="M5.5 9.5l2-2h9l2 2v3h-13v-3z"
      />
      <path
        {...strokeProps}
        d="M3.5 16l2-2h13l2 2v3h-17v-3z"
      />
    </svg>
  );
}

/** Coin in profile — currency / store of value. */
export function CoinGlyph({ className, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={base(className)}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <circle {...strokeProps} cx="12" cy="12" r="8.5" />
      <circle {...strokeProps} cx="12" cy="12" r="6" />
      <path {...strokeProps} d="M12 8.5v7M9.5 11h5M9.5 13h5" />
    </svg>
  );
}

/** Balance scale — fair / regulated. */
export function ScaleGlyph({ className, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={base(className)}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <path {...strokeProps} d="M12 4v17M5 21h14M5 8h14" />
      <path {...strokeProps} d="M5 8l-2.5 5h5L5 8zM19 8l-2.5 5h5L19 8z" />
    </svg>
  );
}

/** Vault door — secure storage. */
export function VaultGlyph({ className, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={base(className)}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <rect {...strokeProps} x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <circle {...strokeProps} cx="13" cy="12" r="3.5" />
      <path {...strokeProps} d="M13 5.5v2M13 16.5v2M19.5 12h-2M9.5 12h-2" />
    </svg>
  );
}

/** Document with seal — certificate / proof of ownership. */
export function CertificateGlyph({ className, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={base(className)}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <path
        {...strokeProps}
        d="M6 3.5h9l4 4v13H6v-17z"
      />
      <path {...strokeProps} d="M15 3.5v4h4" />
      <circle {...strokeProps} cx="12" cy="14" r="2.5" />
      <path {...strokeProps} d="M10.5 16l-1 3 2.5-1.5L14 19l-1-3" />
    </svg>
  );
}

/** Phone receiver — direct contact. */
export function PhoneGlyph({ className, ...rest }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={base(className)}
      aria-hidden={rest["aria-hidden"] ?? true}
    >
      <path
        {...strokeProps}
        d="M5 4.5h3l1.5 4-2 1.5c1 2.5 3 4.5 5.5 5.5l1.5-2 4 1.5v3c0 1-1 2-2 2C9 20 4 15 4 6.5c0-1 1-2 1-2z"
      />
    </svg>
  );
}

/** Small ornament glyph — used as section divider. */
export function Ornament({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block select-none text-gold/60 ${className ?? ""}`}
    >
      ✦
    </span>
  );
}
