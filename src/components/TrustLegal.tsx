/**
 * Trust and legal information component.
 * Renders only fields with values from company config.
 * Created: Modern trust-first redesign
 */

import { companyInfo } from "@/config/company";

export function TrustLegal() {
  const hasAnyInfo = Object.entries(companyInfo).some(([key, value]) => {
    if (key === "partners") return (value as string[]).length > 0;
    return value !== "";
  });

  if (!hasAnyInfo) return null;

  return (
    <section className="border-t border-border-subtle bg-bg-soft py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-text-muted">
            Zaupanje in skladnost
          </h2>
          
          <div className="grid gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
            {companyInfo.name && (
              <Item label="Podjetje" value={companyInfo.name} />
            )}
            {companyInfo.registrationNumber && (
              <Item label="Matična št." value={companyInfo.registrationNumber} />
            )}
            {companyInfo.vatId && (
              <Item label="Davčna št." value={companyInfo.vatId} />
            )}
            {companyInfo.regulator && (
              <Item label="Regulator" value={companyInfo.regulator} />
            )}
            {companyInfo.licenseNumber && (
              <Item label="Licenca" value={companyInfo.licenseNumber} />
            )}
            {companyInfo.address && (
              <Item label="Naslov" value={companyInfo.address} />
            )}
            {companyInfo.email && (
              <Item label="E-pošta" value={companyInfo.email} link={`mailto:${companyInfo.email}`} />
            )}
            {companyInfo.phone && (
              <Item label="Telefon" value={companyInfo.phone} link={`tel:${companyInfo.phone.replace(/\s/g, "")}`} />
            )}
            {companyInfo.reviewPlatform && companyInfo.reviewUrl && (
              <Item 
                label="Ocene" 
                value={`${companyInfo.rating ? `${companyInfo.rating}/5` : ""} ${companyInfo.reviewCount ? `(${companyInfo.reviewCount})` : ""} ${companyInfo.reviewPlatform}`.trim()}
                link={companyInfo.reviewUrl}
              />
            )}
          </div>

          {companyInfo.partners.length > 0 && (
            <div className="mt-6 text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-text-subtle">
                Partnerji in certifikati
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-3 text-sm text-text-muted">
                {companyInfo.partners.map((partner, i) => (
                  <span key={i} className="rounded-full border border-border px-3 py-1">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-text-subtle">
            {companyInfo.privacyPolicyUrl && (
              <a href={companyInfo.privacyPolicyUrl} className="no-underline hover:text-text">
                Politika zasebnosti
              </a>
            )}
            {companyInfo.termsUrl && (
              <a href={companyInfo.termsUrl} className="no-underline hover:text-text">
                Pogoji poslovanja
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({ label, value, link }: { label: string; value: string; link?: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-wider text-text-subtle">{label}</dt>
      <dd className="mt-1 text-text">
        {link ? (
          <a href={link} className="no-underline hover:text-navy">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
