/**
 * English layout wrapper
 * Sets html lang to "en"
 */

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export function generateMetadata() {
  return {
    other: {
      "html-lang": "en",
    },
  };
}
