import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "ByDesign Case Study | Mayur Nakum",
  description:
    "How I helped ship Model Context Protocol (MCP) integration and cross-platform AI productivity features on ByDesign.",
  path: "/projects/bydesign",
  ogImage: "projects",
  keywords: ["ByDesign", "MCP", "AI Software Engineer", "React Native", "Case Study"],
});

const sections = [
  {
    title: "Context",
    body: `ByDesign is a production productivity platform used to manage tasks, notes, calendars, documents, habits, and team collaboration in one workspace. I contribute as an ${siteConfig.title} on the React Native and web surfaces, working with designers, backend engineers, and product to ship features that real users rely on daily — across Web, iOS, Android, and macOS.`,
  },
  {
    title: "The problem",
    body: "Power users wanted the AI assistant to act on their actual workspace — not just answer generic prompts. They needed scheduling, task updates, and context from calendars and notes without copying data into a chat window. The product also had to stay secure: tools could only access what the user explicitly allowed, on every platform we ship.",
  },
  {
    title: "Constraints",
    body: "We were extending an existing React Native and web codebase with strict release cadence, offline expectations, and two calendar ecosystems (Google and Apple). MCP was new to the team, documentation was still evolving, and we could not block the rest of the roadmap on a perfect agent framework. The integration had to degrade gracefully when a tool failed or network was slow.",
  },
  {
    title: "What we tried",
    body: "An early approach pushed too much orchestration into the client, which made debugging hard and duplicated logic between mobile and web. We also prototyped a thinner wrapper around REST endpoints, but it did not give the assistant a consistent tool contract. We moved toward a shared MCP layer with explicit tool schemas, server-side validation, and user-scoped permissions so the same capabilities could ship on multiple clients without diverging behavior.",
  },
  {
    title: "What shipped",
    body: "We integrated MCP so the assistant can call approved tools against the user's workspace — including calendar-aware scheduling and productivity actions — with clear consent boundaries. Calendar sync work (Google and Apple) and cross-platform widgets stayed in parallel tracks, but MCP gave us a single vocabulary for “what the AI is allowed to do.” On the UI side, I focused on responsive flows, error states users can recover from, and performance on mid-range Android devices.",
  },
  {
    title: "Result",
    body: "ByDesign remains in active production with public App Store and Google Play listings, plus web and macOS access. MCP positions the product for the next wave of agent-style workflows without rewriting the core app. I continue to iterate on AI features, real-time sync, and multilingual support with the same constraint: ship reliably, then deepen intelligence.",
  },
] as const;

export default function ByDesignCaseStudyPage() {
  const { appStoreUrl, playStoreUrl, webUrl } = siteConfig.byDesign;

  return (
    <main className="w-full overflow-x-clip">
      <article className="container-page py-12 md:py-16 lg:py-20">
        <Link
          href="/projects#bydesign"
          className="link-subtle inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft size={16} aria-hidden />
          Back to projects
        </Link>

        <header className="mx-auto mt-8 max-w-3xl">
          <p className="text-[10px] font-medium uppercase tracking-widest text-accent-cyan/80">
            Case study
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            ByDesign — MCP &amp; AI productivity
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Integrating Model Context Protocol into a cross-platform productivity
            app without sacrificing security, offline expectations, or release
            velocity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-[44px] w-full px-5 py-2.5 text-sm sm:w-auto"
            >
              Visit product
              <ArrowUpRight size={14} className="opacity-80" />
            </Link>
            <Link
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-[44px] w-full px-5 py-2.5 text-sm sm:w-auto"
            >
              App Store
            </Link>
            <Link
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-[44px] w-full px-5 py-2.5 text-sm sm:w-auto"
            >
              Google Play
            </Link>
          </div>
        </header>

        <div className="prose-section mx-auto mt-12 max-w-3xl space-y-10 md:mt-16">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {section.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-[17px] md:leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
