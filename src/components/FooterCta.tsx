"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Eye } from "lucide-react";
import { siteConfig } from "@/lib/site";

export default function FooterCta() {
  const pathname = usePathname();

  // On /contact the "Get In Touch" button would link to the page you are
  // already on, so it becomes a direct mailto instead.
  const onContactPage = pathname === "/contact";
  const primaryHref = onContactPage
    ? `mailto:${siteConfig.email}`
    : "/contact";
  const primaryLabel = onContactPage ? "Email Me" : "Get In Touch";

  return (
    <div className="footer-cta">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="heading-subsection text-center text-xl md:text-2xl lg:text-left">
          Interested in working together?
        </p>
        <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row">
          <Link href={primaryHref} className="btn-accent w-full sm:w-auto">
            {primaryLabel}
          </Link>
          <Link
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex w-full justify-center gap-2 sm:w-auto"
          >
            <Eye size={18} /> View my CV
          </Link>
        </div>
      </div>
    </div>
  );
}
