/**
 * PerformanceDisclaimer - Regulatory compliance for past performance figures
 * REQUIRED: Must accompany all historical performance data
 */

interface PerformanceDisclaimerProps {
  className?: string;
}

export function PerformanceDisclaimer({ className = "" }: PerformanceDisclaimerProps) {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-xs text-gray-500 leading-relaxed max-w-2xl mx-auto">
        <strong>Vir:</strong> LBMA cene v EUR, okt. 2006–okt. 2026 (zlato in srebro 20 let); 
        HICP inflacija 1999–sep. 2026 (EUR izguba kupne moči). Podatki na dan 19. 10. 2026.
        <br />
        <strong>Pravno obvestilo:</strong> Pretekli donosi ne zagotavljajo prihodnjih rezultatov. 
        Cene plemenitih kovin nihajo in lahko padejo ter zrastejo.
      </p>
    </div>
  );
}
