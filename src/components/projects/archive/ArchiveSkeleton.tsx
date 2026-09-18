/** Placeholder rows matching ArchiveLedgerRow layout — used if the filter island suspends. */
export default function ArchiveSkeleton() {
  return (
    <div
      className="mt-2 border-t border-ink-border"
      aria-hidden
      aria-busy="true"
    >
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-3 border-b border-ink-border py-5 sm:gap-x-4 md:grid-cols-[2rem_minmax(0,1fr)_auto]"
        >
          <span className="font-mono text-meta-lg text-paper-faint/40 tabular-nums">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 space-y-3">
            <div className="h-6 w-40 max-w-[55%] animate-pulse rounded-sm bg-ink-surface" />
            <div className="h-4 w-full max-w-md animate-pulse rounded-sm bg-ink-surface/70" />
            <div className="flex flex-wrap gap-2">
              <div className="h-3 w-14 animate-pulse rounded-sm bg-ink-surface/50" />
              <div className="h-3 w-20 animate-pulse rounded-sm bg-ink-surface/50" />
              <div className="h-3 w-12 animate-pulse rounded-sm bg-ink-surface/50" />
            </div>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <div className="h-3 w-12 animate-pulse rounded-sm bg-ink-surface/50" />
            <div className="h-3 w-16 animate-pulse rounded-sm bg-ink-surface/50" />
            <div className="h-3 w-10 animate-pulse rounded-sm bg-ink-surface/50" />
          </div>
        </div>
      ))}
    </div>
  );
}
