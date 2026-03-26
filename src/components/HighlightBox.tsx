interface HighlightBoxProps {
  children: React.ReactNode;
}

export function HighlightBox({ children }: HighlightBoxProps) {
  return (
    <div className="my-8 rounded-r-lg border-l-4 border-gold bg-bg-warm py-6 pr-6 pl-6">
      {children}
    </div>
  );
}

export function WarningBox({ children }: HighlightBoxProps) {
  return (
    <div className="my-8 rounded-r-lg border-l-4 border-red bg-red-bg py-6 pr-6 pl-6">
      {children}
    </div>
  );
}
