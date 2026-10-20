/**
 * Editorial image placeholders for home page
 * Used when verified silver-only photography is not yet available
 * Silver-toned gradients with fine rules and editorial typography
 */

export function HeroImagePlaceholder() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-silver/30 bg-gradient-to-br from-platinum via-silver/20 to-bg shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="mb-4 h-px w-24 bg-silver/40 mx-auto" />
          <div className="text-sm font-medium tracking-[0.2em] text-text-subtle uppercase">
            Slika
          </div>
          <div className="mt-2 text-xs text-text-subtle/70">
            Roke držijo srebrni kovanec
          </div>
          <div className="mt-4 h-px w-24 bg-silver/40 mx-auto" />
        </div>
      </div>
      {/* TODO: Replace with verified image of hands holding silver coin (not gold, not crypto) */}
    </div>
  );
}

export function HomeSilverImagePlaceholder() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-silver/30 bg-gradient-to-br from-bg via-silver/10 to-platinum shadow-md">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-8">
          <div className="mb-4 h-px w-24 bg-silver/40 mx-auto" />
          <div className="text-sm font-medium tracking-[0.2em] text-text-subtle uppercase">
            Slika
          </div>
          <div className="mt-2 text-xs text-text-subtle/70">
            Srebrni kovanci na lesu ali<br/>v mirnem domačem okolju
          </div>
          <div className="mt-4 h-px w-24 bg-silver/40 mx-auto" />
        </div>
      </div>
      {/* TODO: Replace with verified image of silver coins on wood/fabric in home setting */}
    </div>
  );
}
