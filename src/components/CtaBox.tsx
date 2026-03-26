import Link from "next/link";

interface CtaBoxProps {
  title: string;
  text: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CtaBox({
  title,
  text,
  buttonText = "Brezplačen posvet →",
  buttonHref = "/posvet",
}: CtaBoxProps) {
  return (
    <div className="my-12 rounded-xl bg-gradient-to-br from-navy to-navy-light p-10 text-center">
      <h3 className="mb-3 font-serif text-2xl text-white">{title}</h3>
      <p className="mb-6 text-white/85">{text}</p>
      <Link
        href={buttonHref}
        className="inline-block rounded-md bg-gold px-8 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold-light"
      >
        {buttonText}
      </Link>
    </div>
  );
}
