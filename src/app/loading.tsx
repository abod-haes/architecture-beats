export default function Loading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--site-bg)] px-5 text-[var(--site-text)]">
      <div className="blueprint-grid absolute inset-0 opacity-60" />
      <div className="absolute -top-28 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl" />
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

        <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-secondary">Architecture Beats</p>
        <h1 className="mt-3 text-2xl font-black text-brand-dark sm:text-3xl">جاري تحميل الصفحة</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-brand-gray sm:text-base">نجهّز الأقسام والصور لتظهر الصفحة بشكل كامل.</p>

        <div className="mt-7 text-start">
          <div className="mb-3 flex items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.18em] text-brand-secondary">
            <span>تحميل العناصر</span>
            <span>100%</span>
          </div>
          <div className="h-2 overflow-hidden bg-[var(--site-muted)]">
            <div className="site-loader-bar h-full w-1/2 bg-brand-primary" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          <span className="h-2 animate-pulse bg-[var(--site-muted)]" />
          <span className="h-2 animate-pulse bg-[var(--site-muted)] [animation-delay:120ms]" />
          <span className="h-2 animate-pulse bg-[var(--site-muted)] [animation-delay:240ms]" />
        </div>
      </div>
    </div>
  );
}
