import { cn } from "@/lib/utils";

interface IndexRailProps {
  number: string;
  className?: string;
  invert?: boolean;
}

export default function IndexRail({ number, className, invert }: IndexRailProps) {
  const padded = number.padStart(2, "0");

  return (
    <span
      className={cn("index-rail", invert && "margin-note--invert", className)}
      aria-hidden
    >
      {padded}
    </span>
  );
}
