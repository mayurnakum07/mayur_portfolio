"use client";

import type { Category, Status } from "@/data/projects";
import { PROJECT_CATEGORIES, PROJECT_STATUSES } from "@/data/projects";
import { cn } from "@/lib/utils";

export type CategoryFilter = Category | "All";
export type StatusFilter = Status | "All";

interface ProjectsFilterBarProps {
  category: CategoryFilter;
  status: StatusFilter;
  resultCount: number;
  onCategoryChange: (category: CategoryFilter) => void;
  onStatusChange: (status: StatusFilter) => void;
}

const CATEGORY_OPTIONS: CategoryFilter[] = ["All", ...PROJECT_CATEGORIES];
const STATUS_OPTIONS: StatusFilter[] = ["All", ...PROJECT_STATUSES];

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-[44px] rounded-sm px-2.5 font-mono text-meta-lg transition-colors duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
        active
          ? "bg-signal text-ink"
          : "text-paper-muted [@media(hover:hover)_and_(pointer:fine)]:hover:bg-ink-surface [@media(hover:hover)_and_(pointer:fine)]:hover:text-paper"
      )}
    >
      {label}
    </button>
  );
}

export default function ProjectsFilterBar({
  category,
  status,
  resultCount,
  onCategoryChange,
  onStatusChange,
}: ProjectsFilterBarProps) {
  return (
    <div className="flex flex-col gap-6 border-b border-ink-border pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0">
        <p className="font-mono text-meta-xs text-paper-faint" id="filter-category-label">
          Category
        </p>
        <ul
          className="mt-2 flex flex-wrap items-center gap-1.5"
          role="list"
          aria-labelledby="filter-category-label"
        >
          {CATEGORY_OPTIONS.map((option) => (
            <li key={option}>
              <FilterPill
                label={option}
                active={category === option}
                onClick={() => onCategoryChange(option)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:gap-8">
        <div className="min-w-0">
          <p
            className="font-mono text-meta-xs text-paper-faint"
            id="filter-status-label"
          >
            Status
          </p>
          <ul
            className="mt-2 flex flex-wrap items-center gap-1.5"
            role="list"
            aria-labelledby="filter-status-label"
          >
            {STATUS_OPTIONS.map((option) => {
              const label =
                option === "In Development" ? "In Dev" : option;
              return (
                <li key={option}>
                  <FilterPill
                    label={label}
                    active={status === option}
                    onClick={() => onStatusChange(option)}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <p
          className="font-mono text-meta-sm text-paper-faint sm:pb-3"
          aria-live="polite"
          aria-atomic="true"
        >
          {resultCount} {resultCount === 1 ? "project" : "projects"} shown
        </p>
      </div>
    </div>
  );
}
