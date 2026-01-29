import en from "./en.json";
import es from "./es.json";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const translations = {
  en,
  es,
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
