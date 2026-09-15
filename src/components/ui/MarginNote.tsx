import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarginNoteProps {
  children: ReactNode;
  invert?: boolean;
  className?: string;
}

export default function MarginNote({ children, invert, className }: MarginNoteProps) {
  return (
    <p className={cn("margin-note", invert && "margin-note--invert", className)}>
      {children}
    </p>
  );
}
