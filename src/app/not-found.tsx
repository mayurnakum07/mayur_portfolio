import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Page not found | Mayur Nakum",
  description: "The page you are looking for does not exist.",
  path: "/404",
  ogImage: "home",
});

export default function NotFound() {
  return (
    <main className="container-page flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent-cyan/80">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        That link may be outdated. Head back home or browse projects.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-accent px-6 py-3">
          Go home
        </Link>
        <Link href="/projects" className="btn-secondary px-6 py-3">
          View projects
        </Link>
      </div>
    </main>
  );
}
