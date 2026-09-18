"use client";

/**
 * Root cause (archive empty/stuck in production):
 * This tree previously called `useSearchParams()`, which forced the entire
 * Featured + Full archive block behind `<Suspense fallback="Loading archive…">`.
 * Static / first-paint HTML therefore contained no ledger rows — only the
 * fallback — until client JS hydrated and search params resolved. Slow or
 * blocked JS left the archive looking empty while the server-rendered header
 * (and any content outside Suspense) still appeared fine.
 *
 * Fix: projects are passed in from the Server Component page (SSG). Filter
 * state lives here as client state; the URL is updated via `router.replace`
 * for shareable links, but we never *read* search params through the hook
 * that suspends. Deep links (`?category=AI`) are applied once on mount.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import SectionHeader from "@/components/ui/SectionHeader";
import SignalLink from "@/components/ui/SignalLink";
import ArchiveLedgerRow from "./ArchiveLedgerRow";
import ArchiveCursorPreview from "./ArchiveCursorPreview";
import ProjectsFilterBar, {
  type CategoryFilter,
  type StatusFilter,
} from "./ProjectsFilterBar";
import {
  PROJECT_CATEGORIES,
  PROJECT_STATUSES,
  type Category,
  type Project,
  type Status,
} from "@/data/projects";

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

function readFiltersFromLocation(): {
  category: CategoryFilter;
  status: StatusFilter;
} {
  if (typeof window === "undefined") {
    return { category: "All", status: "All" };
  }
  const params = new URLSearchParams(window.location.search);
  return {
    category: parseCategory(params.get("category")),
    status: parseStatus(params.get("status")),
  };
}

interface ProjectsArchiveProps {
  projects: Project[];
}

export default function ProjectsArchive({ projects }: ProjectsArchiveProps) {
  const pathname = usePathname();

  // SSR + first client paint always use All/All so all rows are in the HTML.
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [status, setStatus] = useState<StatusFilter>("All");

  useEffect(() => {
    const { category: nextCategory, status: nextStatus } =
      readFiltersFromLocation();
    setCategory(nextCategory);
    setStatus(nextStatus);

    const onPopState = () => {
      const next = readFiltersFromLocation();
      setCategory(next.category);
      setStatus(next.status);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        category === "All" || project.category === category;
      const statusMatch = status === "All" || project.status === status;
      return categoryMatch && statusMatch;
    });
  }, [projects, category, status]);

  const updateParams = useCallback(
    (nextCategory: CategoryFilter, nextStatus: StatusFilter) => {
      setCategory(nextCategory);
      setStatus(nextStatus);

      // replaceState (not router.replace) keeps filtering fully client-side and
      // avoids racing soft-navigations when category + status change in sequence.
      const params = new URLSearchParams();
      if (nextCategory !== "All") params.set("category", nextCategory);
      if (nextStatus !== "All") params.set("status", nextStatus);
      const query = params.toString();
      window.history.replaceState(
        null,
        "",
        query ? `${pathname}?${query}` : pathname
      );
    },
    [pathname]
  );

  return (
    <>
      <section
        aria-labelledby="archive-index-heading"
        className="section-major"
      >
        <div className="container-page">
          <SectionHeader
            index="03"
            title={<span id="archive-index-heading">Full archive</span>}
            description="Every product in the catalog. Filter by category or status, then open a case study."
            note="Filterable"
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
            <div
              key={`${category}-${status}`}
              className="archive-list-transition mt-2 border-t border-ink-border"
            >
              {filtered.length > 0 ? (
                filtered.map((project, index) => (
                  <ArchiveLedgerRow
                    key={project.slug}
                    project={project}
                    index={index + 1}
                  />
                ))
              ) : (
                <div className="py-12">
                  <p className="text-body-md text-paper-muted">
                    No projects match these filters.
                  </p>
                  <button
                    type="button"
                    className="signal-link signal-link--always mt-4 min-h-[44px] text-body-md"
                    onClick={() => updateParams("All", "All")}
                  >
                    Reset filters
                  </button>
                </div>
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
                Tell me what you need. I&apos;ll point you to the right piece
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
