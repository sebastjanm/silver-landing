/**
 * Stops a line break between a number and its unit ("22 %", "10.000 €")
 * while keeping an ordinary space in the copy.
 */

export function KeepUnits({ children }: { children: string }) {
  const parts = children.split(/(\d[\d.,]* (?:%|€))/);

  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="whitespace-nowrap">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
}
