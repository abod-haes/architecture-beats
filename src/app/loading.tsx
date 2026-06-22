export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--site-bg)] px-6">
      <div className="w-full max-w-xl border border-[var(--site-border)] bg-[var(--site-card)] p-8 text-center backdrop-blur">
        <div className="mx-auto mb-6 h-16 w-16 animate-spin border-4 border-[var(--site-border)] border-t-brand-primary" />
        <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-secondary">Architecture Beats</p>
        <h1 className="mt-3 text-2xl font-black text-brand-dark">Loading Project Experience</h1>
        <div className="mt-6 grid gap-3">
          <div className="h-3 animate-pulse bg-[var(--site-muted)]" />
          <div className="h-3 w-4/5 animate-pulse bg-[var(--site-muted)]" />
          <div className="h-3 w-3/5 animate-pulse bg-[var(--site-muted)]" />
        </div>
      </div>
    </div>
  );
}
