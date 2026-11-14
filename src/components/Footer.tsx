import { business, generalWhatsappLink, navLinks } from "@/config/siteConfig";
import { Logo } from "./Header";
import { WhatsAppIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-burgundy text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xs">
            <a href="#home" aria-label={`${business.name} — back to top`}>
              <Logo light />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">{business.tagline}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-medium text-cream/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={generalWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 self-start rounded-md border border-cream/30 px-5 py-3 text-sm font-semibold transition-colors hover:border-cream hover:bg-cream hover:text-burgundy md:self-auto"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 border-t border-cream/15 pt-6 text-xs text-cream/60">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
