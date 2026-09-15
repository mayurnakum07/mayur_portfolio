import IndexRail from "@/components/ui/IndexRail";
import MarginNote from "@/components/ui/MarginNote";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  index: string;
  title: ReactNode;
  description?: string;
  note?: ReactNode;
  invert?: boolean;
  className?: string;
}

export default function SectionHeader({
  index,
  title,
  description,
  note,
  invert,
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "grid grid-cols-12 gap-x-4 gap-y-3 lg:gap-x-8",
        className
      )}
    >
      <div className="col-span-12 lg:col-span-1">
        <IndexRail number={index} invert={invert} />
      </div>

      <div className="col-span-12 lg:col-span-7">
        <h2
          className={cn(
            "font-display text-display-md text-balance",
            invert ? "text-invert-fg" : "text-paper"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-5 max-w-measure text-body-lg",
              invert ? "text-invert-muted" : "text-paper-muted"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {note && (
        <div className="col-span-12 lg:col-start-10 lg:col-span-3 lg:pt-1">
          <MarginNote invert={invert}>{note}</MarginNote>
        </div>
      )}
    </header>
  );
}
