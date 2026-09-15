import Link from "next/link";
import SignalLink from "@/components/ui/SignalLink";

export const metadata = {
  title: "Page not found | Mayur Nakum",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="container-page flex min-h-[50svh] flex-col justify-center py-16 sm:py-20">
      <p className="font-mono text-meta-lg text-paper-faint">404</p>
      <h1 className="mt-4 font-display text-display-md text-paper">
        Page not found
      </h1>
      <p className="mt-4 max-w-prose text-body-md text-paper-muted">
        That link may be outdated. Head back home or browse the archive.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <SignalLink href="/" underline="always" className="text-body-md">
          Go home →
        </SignalLink>
        <Link
          href="/projects"
          className="signal-link signal-link--muted text-body-md"
        >
          View projects
        </Link>
      </div>
    </main>
  );
}
