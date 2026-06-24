"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";

const MIN_LOADING_TIME = 720;
const MAX_LOADING_TIME = 3200;

function waitForWindowLoad() {
  if (typeof window === "undefined") return Promise.resolve();
  if (document.readyState === "complete") return Promise.resolve();

  return new Promise<void>((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function waitForCriticalImages() {
  if (typeof window === "undefined") return Promise.resolve();

  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        const viewportLimit = window.innerHeight * 1.35;
        const images = Array.from(document.images).filter((image) => {
          const rect = image.getBoundingClientRect();
          const isCritical = image.dataset.critical === "true" || image.getAttribute("fetchpriority") === "high";
          const isInInitialView = rect.top < viewportLimit && rect.bottom > -120;

          return (isCritical || isInInitialView) && (!image.complete || image.naturalWidth === 0);
        });

        if (!images.length) {
          resolve();
          return;
        }

        const imagePromises = images.map((image) => {
          if (typeof image.decode === "function") {
            return image.decode().catch(() => undefined);
          }

          return new Promise<void>((imageResolve) => {
            image.addEventListener("load", () => imageResolve(), { once: true });
            image.addEventListener("error", () => imageResolve(), { once: true });
          });
        });

        await Promise.race([
          Promise.all(imagePromises),
          new Promise((timeoutResolve) => window.setTimeout(timeoutResolve, MAX_LOADING_TIME)),
        ]);

        resolve();
      });
    });
  });
}

function FullPageLoader() {
  const { locale, dir, content } = useLocale();
  const title = locale === "ar" ? "جاري تجهيز الصفحة" : "Preparing the page";
  const description = locale === "ar" ? "نحمّل الصور والأقسام الأساسية لتظهر التجربة كاملة." : "Loading key images and sections before revealing the experience.";
  const progress = locale === "ar" ? "تحميل العناصر" : "Loading assets";

  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[var(--site-bg)] px-5 text-[var(--site-text)]" dir={dir} role="status" aria-live="polite">
      <div className="blueprint-grid absolute inset-0 opacity-60" />
      <div className="absolute -top-32 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl" />
      <div className="absolute bottom-0 start-0 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />

      <div className="site-card relative w-full max-w-xl overflow-hidden p-6 text-center sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent" />

        <div className="mx-auto mb-7 grid h-24 w-24 place-items-center border border-[var(--site-border-strong)] bg-[var(--site-card-solid)]">
          <div className="relative h-14 w-14">
            <span className="absolute inset-0 border-2 border-[var(--site-border-strong)]" />
            <span className="site-loader-corner absolute inset-2 border-2 border-brand-primary" />
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary" />
          </div>
        </div>

        <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-secondary">{content.company.nameEn}</p>
        <h2 className="mt-3 text-2xl font-black text-brand-dark sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-brand-gray sm:text-base">{description}</p>

        <div className="mt-7 text-start">
          <div className="mb-3 flex items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.18em] text-brand-secondary">
            <span>{progress}</span>
            <span>100%</span>
          </div>
          <div className="h-2 overflow-hidden bg-[var(--site-muted)]">
            <div className="site-loader-bar h-full w-1/2 bg-brand-primary" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((item) => (
            <span key={item} className="h-2 animate-pulse bg-[var(--site-muted)]" style={{ animationDelay: `${item * 120}ms` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PageLoadGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const startedAt = performance.now();

    setIsReady(false);

    const revealPage = () => {
      const elapsed = performance.now() - startedAt;
      const remainingDelay = Math.max(MIN_LOADING_TIME - elapsed, 0);

      window.setTimeout(() => {
        if (!isCancelled) setIsReady(true);
      }, remainingDelay);
    };

    const preparePage = async () => {
      await Promise.race([
        waitForWindowLoad().then(waitForCriticalImages),
        new Promise((resolve) => window.setTimeout(resolve, MAX_LOADING_TIME)),
      ]);

      revealPage();
    };

    preparePage();

    return () => {
      isCancelled = true;
    };
  }, [pathname]);

  return (
    <>
      <div className={`transition-[opacity,filter] duration-700 ${isReady ? "opacity-100 blur-0" : "pointer-events-none opacity-0 blur-sm"}`} aria-busy={!isReady}>
        {children}
      </div>
      {!isReady ? <FullPageLoader /> : null}
    </>
  );
}
