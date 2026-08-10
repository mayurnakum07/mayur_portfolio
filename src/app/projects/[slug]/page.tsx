import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import {
  caseStudySectionOrder,
  getProject,
  getProjectNeighbours,
  hasCaseStudyContent,
  projects,
  type Project,
} from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { projectSchema } from "@/lib/structuredData";
import JsonLd from "@/components/JsonLd";
import ProjectImage from "@/components/projects/ProjectImage";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return createPageMetadata({
      title: "Project not found | Mayur Nakum",
      description: "That project does not exist.",
      path: `/projects/${slug}`,
      ogImage: "projects",
    });
  }

  return createPageMetadata({
    title: `${project.name} — Case Study | Mayur Nakum`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    ogImage: project.images.ogImage,
    ogType: "article",
    keywords: [project.name, project.category, "Case Study", ...project.stack],
  });
}

function MetaBar({ project }: { project: Project }) {
  const items = [
    project.role && { label: "Role", value: project.role },
    { label: "Platforms", value: project.platforms.join(" · ") },
    { label: "Year", value: project.year },
    { label: "Status", value: project.status },
    project.client && { label: "Client", value: project.client },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <div className="rounded-2xl border border-border/50 bg-surface-1 p-6 sm:p-8">
      <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">
              {item.label}
            </dt>
            <dd className="mt-1.5 text-sm text-foreground/85">{item.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-7 border-t border-border/40 pt-6">
        <h2 className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground/60">
          Stack
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border/50 bg-surface-2/40 px-2.5 py-1 text-[13px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MetricStrip({ project }: { project: Project }) {
  if (!project.metrics?.length) return null;

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {project.metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-border/50 bg-surface-1 px-6 py-5"
          title={metric.source}
        >
          <p className="text-3xl font-semibold tracking-tight text-foreground">
            {metric.value}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
          {metric.source && (
            <p className="mt-2 text-[11px] text-muted-foreground/60">
              {metric.source}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { prev, next } = getProjectNeighbours(project.slug);
  const showCaseStudy = hasCaseStudyContent(project);

  const links = [
    project.links.live && { label: "Visit product", href: project.links.live },
    project.links.appStore && {
      label: "App Store",
      href: project.links.appStore,
    },
    project.links.playStore && {
      label: "Google Play",
      href: project.links.playStore,
    },
    project.links.source && { label: "Source", href: project.links.source },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <main className="w-full overflow-x-clip">
      <JsonLd data={projectSchema(project)} />

      <article className="container-page py-10 md:py-14 lg:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/projects" className="link-subtle">
                Projects
              </Link>
            </li>
            <li aria-hidden className="text-border">
              <ChevronRight size={14} />
            </li>
            <li aria-current="page" className="text-foreground/80">
              {project.name}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mt-8 md:mt-10">
          <p className="text-[10px] font-medium uppercase tracking-widest text-accent-cyan/80">
            {project.category}
          </p>
          <h1 className="mt-3 max-w-4xl text-[clamp(1.875rem,5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-foreground">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {project.tagline}
          </p>

          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/50 bg-surface-2">
            <ProjectImage
              src={project.images.hero}
              alt={project.imageAlt}
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
        </header>

        {/* Meta bar + metrics */}
        <div className="mt-10 md:mt-12">
          <MetaBar project={project} />
          <MetricStrip project={project} />
        </div>

        {/* Case study body */}
        {showCaseStudy ? (
          <div className="mx-auto mt-14 max-w-3xl space-y-12 md:mt-20">
            {caseStudySectionOrder.map((key) => {
              const section = project.caseStudy?.[key];
              if (
                !section ||
                (section.body.length === 0 && !section.bullets?.length)
              ) {
                return null;
              }

              return (
                <section key={key}>
                  <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {section.heading}
                  </h2>

                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px] md:leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="mt-5 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet.slice(0, 48)}
                          className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground md:text-[17px]"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-accent-cyan/70"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>
        ) : (
          <p className="mx-auto mt-14 max-w-3xl text-base leading-relaxed text-muted-foreground md:mt-20">
            A detailed write-up of this project is in progress. In the meantime,
            the live product is linked below — or{" "}
            <Link href="/contact" className="link-subtle underline">
              get in touch
            </Link>{" "}
            and I&apos;ll walk you through what I built.
          </p>
        )}

        {/* Gallery */}
        {project.images.gallery?.length ? (
          <section className="mt-16 md:mt-20">
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Gallery
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {project.images.gallery.map((shot) => (
                <figure key={shot.src}>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/50 bg-surface-2">
                    <ProjectImage
                      src={shot.src}
                      alt={shot.alt}
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {/* Links */}
        {links.length > 0 && (
          <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-16">
            {links.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors",
                  index === 0
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border/80 text-foreground hover:border-border-hover hover:bg-surface-2/50",
                ].join(" ")}
              >
                {link.label}
                <ArrowUpRight size={14} className="opacity-70" />
              </Link>
            ))}
          </div>
        )}

        {/* Prev / next */}
        <nav
          aria-label="Project navigation"
          className="mt-16 grid grid-cols-1 gap-4 border-t border-border/40 pt-10 sm:grid-cols-2 md:mt-20"
        >
          {prev && (
            <Link
              href={`/projects/${prev.slug}`}
              className="group rounded-xl border border-border/50 bg-surface-1 p-5 transition-colors hover:border-border-hover"
            >
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <ArrowLeft
                  size={14}
                  className="transition-transform group-hover:-translate-x-0.5"
                />
                Previous
              </span>
              <span className="mt-2 block font-medium text-foreground">
                {prev.name}
              </span>
            </Link>
          )}
          {next && (
            <Link
              href={`/projects/${next.slug}`}
              className="group rounded-xl border border-border/50 bg-surface-1 p-5 text-right transition-colors hover:border-border-hover sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                Next
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </span>
              <span className="mt-2 block font-medium text-foreground">
                {next.name}
              </span>
            </Link>
          )}
        </nav>

        <div className="mt-10">
          <Link
            href="/projects"
            className="link-subtle inline-flex items-center gap-1.5 text-sm"
          >
            <ArrowLeft size={16} aria-hidden />
            Back to all projects
          </Link>
        </div>
      </article>
    </main>
  );
}
