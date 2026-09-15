import Link from "next/link";
import { siteConfig } from "@/lib/site";

const FOOTER_NAV = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

const FOOTER_LINKS = [
  { href: `mailto:${siteConfig.email}`, label: "Email" },
  { href: siteConfig.linkedIn, label: "LinkedIn", external: true },
  { href: siteConfig.github, label: "GitHub", external: true },
  { href: siteConfig.resumePath, label: "Résumé", external: true },
] as const;

export default function Footer() {
  const year = 2026;

  return (
    <footer className="site-footer pb-[env(safe-area-inset-bottom,0px)]">
      <div className="container-page py-12 lg:py-16">
        <div className="flex flex-col gap-8 border-b border-ink-border pb-8 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {FOOTER_NAV.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="signal-link signal-link--muted text-body-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="signal-link signal-link--muted text-body-sm"
                  {...("external" in item && item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-body-sm text-paper-faint sm:flex-row sm:justify-between">
          <p>{siteConfig.location}</p>
          <p>© {year} Mayur Nakum</p>
        </div>
      </div>
    </footer>
  );
}
