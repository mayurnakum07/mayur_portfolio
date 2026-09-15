"use client";

import { useCallback, useMemo, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SectionHeader from "@/components/ui/SectionHeader";
import SignalLink from "@/components/ui/SignalLink";
import FeaturedLead from "./FeaturedLead";
import FeaturedSupport from "./FeaturedSupport";
import ArchiveLedgerRow from "./ArchiveLedgerRow";
import ArchiveCursorPreview from "./ArchiveCursorPreview";
import ProjectsFilterBar, {
  type CategoryFilter,
  type StatusFilter,
} from "./ProjectsFilterBar";
import {
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
  filterProjects,
  type Category,
  type Status,
} from "@/data/projects";
import { homeSelectedProjects } from "@/data/home";

function parseCategory(value: string | null): CategoryFilter {
  if (!value || value === "All") return "All";
  return PROJECT_CATEGORIES.includes(value as Category)
    ? (value as Category)
    : "All";
}

function parseStatus(value: string | null): StatusFilter {
  if (!value || value === "All") return "All";
  return PROJECT_STATUSES.includes(value as Status)
    ? (value as Status)
    : "All";
}

export default function ProjectsArchive() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const category = parseCategory(searchParams.get("category"));
  const status = parseStatus(searchParams.get("status"));

  const filtered = useMemo(
    () => filterProjects({ category, status }),
    [category, status]
  );

  const featuredVisible = useMemo(() => {
    return homeSelectedProjects.filter((project) => {
      const categoryMatch =
        category === "All" || project.category === category;
      const statusMatch = status === "All" || project.status === status;
      return categoryMatch && statusMatch;
    });
  }, [category, status]);

  const [featuredLead, ...featuredSupport] = featuredVisible;

  const updateParams = useCallback(
    (nextCategory: CategoryFilter, nextStatus: StatusFilter) => {
      const params = new URLSearchParams();
      if (nextCategory !== "All") params.set("category", nextCategory);
      if (nextStatus !== "All") params.set("status", nextStatus);
      const query = params.toString();
      startTransition(() => {
        router.replace(query ? `${pathname}?${query}` : pathname, {
          scroll: false,
        });
      });
    },
    [pathname, router]
  );

  return (
    <>
      {featuredLead && (
        <section
          aria-labelledby="featured-heading"
          className="section-standard border-b border-ink-border"
        >
          <div className="container-page">
            <SectionHeader
              index="02"
              title={<span id="featured-heading">Featured</span>}
              description="Start here — the editorial cut from Home, given room to breathe before the full catalog."
              note="Curated · case studies inside"
            />

            <div className="mt-10 border-t border-ink-border lg:mt-14">
              <FeaturedLead
                project={featuredLead}
                index={1}
                priority
              />

              {featuredSupport.length > 0 && (
                <div className="grid grid-cols-1 gap-0 border-b border-ink-border lg:grid-cols-2 lg:gap-x-12 lg:py-12">
                  {featuredSupport.map((project, i) => (
                    <div
                      key={project.slug}
                      className={
                        i === 0
                          ? "lg:border-r lg:border-ink-border lg:pr-12"
                          : undefined
                      }
                    >
                      <FeaturedSupport
                        project={project}
                        index={i + 2}
                        reverse={i === 1}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section
        aria-labelledby="archive-index-heading"
        className="section-major"
      >
        <div className="container-page">
          <SectionHeader
            index={featuredLead ? "03" : "02"}
            title={<span id="archive-index-heading">Full archive</span>}
            description="Every product in the catalog. Filter by category or status, then open a case study."
            note="Indexed · filterable"
          />

          <div className="mt-10 lg:mt-14">
            <ProjectsFilterBar
              category={category}
              status={status}
              resultCount={filtered.length}
              onCategoryChange={(next) => updateParams(next, status)}
              onStatusChange={(next) => updateParams(category, next)}
            />
          </div>

          <ArchiveCursorPreview>
            <div className="mt-2 border-t border-ink-border">
              {filtered.length > 0 ? (
                filtered.map((project, index) => (
                  <ArchiveLedgerRow
                    key={project.slug}
                    project={project}
                    index={index + 1}
                  />
                ))
              ) : (
                <p className="py-12 text-body-md text-paper-muted">
                  No projects match these filters.{" "}
                  <button
                    type="button"
                    className="signal-link signal-link--always min-h-0 text-body-md"
                    onClick={() => updateParams("All", "All")}
                  >
                    Clear filters
                  </button>
                </p>
              )}
            </div>
          </ArchiveCursorPreview>
        </div>
      </section>

      <section className="border-t border-ink-border section-standard">
        <div className="container-page">
          <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8">
            <div className="col-span-12 lg:col-span-8 lg:col-start-2">
              <p className="font-display text-heading-md text-paper sm:text-heading-lg">
                Don&apos;t see what you&apos;re looking for?
              </p>
              <p className="mt-3 max-w-prose text-body-md text-paper-muted">
                Tell me what you need — I&apos;ll point you to the right piece
                of work, or say so if it isn&apos;t here.
              </p>
              <div className="mt-6">
                <SignalLink
                  href="/contact"
                  underline="always"
                  className="group text-body-md"
                >
                  Get in touch
                  <span aria-hidden className="hover-nudge-x">
                    →
                  </span>
                </SignalLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
