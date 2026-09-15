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
        <p className="font-mono text-meta-xs text-paper-faint">Category</p>
        <ul
          className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-2"
          role="list"
        >
          {CATEGORY_OPTIONS.map((option, index) => {
            const active = category === option;
            return (
              <li key={option} className="flex items-center gap-1">
                {index > 0 && (
                  <span className="font-mono text-meta-lg text-paper-faint" aria-hidden>
                    ·
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => onCategoryChange(option)}
                  aria-pressed={active}
                  className={cn(
                    "relative min-h-[44px] px-1 font-mono text-meta-lg transition-colors duration-200",
                    active
                      ? "text-paper after:absolute after:bottom-3 after:left-1 after:right-1 after:h-px after:bg-signal"
                      : "text-paper-muted [@media(hover:hover)_and_(pointer:fine)]:hover:text-paper"
                  )}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8">
        <div>
          <p className="font-mono text-meta-xs text-paper-faint">Status</p>
          <ul className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-2">
            {STATUS_OPTIONS.map((option, index) => {
              const active = status === option;
              const label =
                option === "In Development" ? "In Dev" : option;
              return (
                <li key={option} className="flex items-center gap-1">
                  {index > 0 && (
                    <span
                      className="font-mono text-meta-lg text-paper-faint"
                      aria-hidden
                    >
                      ·
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => onStatusChange(option)}
                    aria-pressed={active}
                    className={cn(
                      "relative min-h-[44px] px-1 font-mono text-meta-lg transition-colors duration-200",
                      active
                        ? "text-paper after:absolute after:bottom-3 after:left-1 after:right-1 after:h-px after:bg-signal"
                        : "text-paper-muted [@media(hover:hover)_and_(pointer:fine)]:hover:text-paper"
                    )}
                  >
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <p
          className="font-mono text-meta-sm text-paper-faint sm:pb-3"
          aria-live="polite"
        >
          {resultCount} {resultCount === 1 ? "project" : "projects"}
        </p>
      </div>
    </div>
  );
}
