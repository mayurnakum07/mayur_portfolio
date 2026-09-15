import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

type SignalLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "muted" | "invert";
  underline?: "hover" | "always";
  showArrow?: boolean;
};

export default function SignalLink({
  className,
  variant = "primary",
  underline = "hover",
  showArrow = false,
  children,
  ...props
}: SignalLinkProps) {
  return (
    <Link
      className={cn(
        "signal-link min-h-[44px] items-center",
        underline === "always" && "signal-link--always",
        variant === "muted" && "signal-link--muted",
        variant === "invert" && "signal-link--invert",
        variant === "secondary" && "signal-link--secondary",
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <span aria-hidden className="hover-nudge-x">
          →
        </span>
      )}
    </Link>
  );
}
