"use client";

import Link, { type LinkProps } from "next/link";
import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    id: string;
    location: string;
    children: ReactNode;
  };

/**
 * Drop-in replacement for next/link that fires a `cta_click` analytics event.
 * `id` identifies the action (e.g. "cta_posvet"); `location` identifies the surface
 * the click came from (e.g. "hero", "sticky", "cena-srebra-fold").
 */
export function TrackedLink({
  id,
  location,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        track("cta_click", { id, location });
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
