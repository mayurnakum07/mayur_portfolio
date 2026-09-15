import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface InvertedInterludeProps {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}

export default function InvertedInterlude({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledBy,
}: InvertedInterludeProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("interlude section-major", className)}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}
