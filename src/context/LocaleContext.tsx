"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { getSiteData, type Locale, type SiteContent } from "@/data/siteData";

type LocaleContextValue = {
  locale: Locale;
  dir: "rtl" | "ltr";
  content: SiteContent;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("architecture-beats-locale");
    if (storedLocale === "ar" || storedLocale === "en") {
      setLocaleState(storedLocale);
    }
  }, []);

  const dir = locale === "ar" ? "rtl" : "ltr";
  const content = useMemo(() => getSiteData(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.body.dataset.locale = locale;
    window.localStorage.setItem("architecture-beats-locale", locale);
  }, [dir, locale]);

  const setLocale = (nextLocale: Locale) => setLocaleState(nextLocale);
  const toggleLocale = () => setLocaleState((current) => (current === "ar" ? "en" : "ar"));

  return (
    <LocaleContext.Provider value={{ locale, dir, content, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return context;
}

export function useSiteContent() {
  return useLocale().content;
}
