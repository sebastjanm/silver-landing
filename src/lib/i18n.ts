/**
 * Internationalization utilities
 * Supports Slovenian (default) and English
 */

import { sl, type Content } from "@/content/sl";
import { en } from "@/content/en";

export type Locale = "sl" | "en";

export const locales: Locale[] = ["sl", "en"];
export const defaultLocale: Locale = "sl";

export function getContent(locale: Locale): Content {
  return locale === "en" ? en : sl;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === "sl") return path;
  return `/en${path}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "sl" ? "en" : "sl";
}

export function getAlternatePath(currentPath: string, targetLocale: Locale): string {
  // Remove /en prefix if switching to Slovenian
  if (targetLocale === "sl" && currentPath.startsWith("/en")) {
    const path = currentPath.replace(/^\/en/, "") || "/";
    return path;
  }
  
  // Add /en prefix if switching to English
  if (targetLocale === "en" && !currentPath.startsWith("/en")) {
    return `/en${currentPath}`;
  }
  
  return currentPath;
}
