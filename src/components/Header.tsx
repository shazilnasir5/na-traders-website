import { useEffect, useState } from "react";
import { business, generalWhatsappLink, navLinks } from "@/config/siteConfig";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./Icons";
import { cn } from "@/utils/cn";
import logoImage from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={logoImage}
        alt={`${business.name} logo`}
        className={cn("h-11 w-11 rounded-md object-cover shadow-sm", light ? "ring-1 ring-white/40" : "ring-1 ring-burgundy/10")}
      />
      <span
        className={cn(
          "font-display text-2xl font-bold leading-none tracking-tight",
          light ? "text-cream" : "text-burgundy",
        )}
      >
        {business.name}
      </span>
    </span>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="overflow-hidden border-b border-white/10 bg-burgundy/95 text-cream">
        <div className="marquee-track flex min-w-max items-center gap-8 whitespace-nowrap px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] sm:text-xs">
          <span>{business.deliveryText}</span>
          <span aria-hidden="true">•</span>
          <span>{business.deliveryText}</span>
          <span aria-hidden="true">•</span>
          <span>{business.deliveryText}</span>
          <span aria-hidden="true">•</span>
          <span>{business.deliveryText}</span>
          <span aria-hidden="true">•</span>
          <span>{business.deliveryText}</span>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled || open
            ? "border-b border-burgundy/10 bg-cream/95 shadow-[0_1px_20px_rgba(103,47,56,0.06)] backdrop-blur"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
        <a href="#home" aria-label={`${business.name} — home`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "relative py-2 text-sm font-semibold tracking-wide text-burgundy/80 transition-colors hover:text-burgundy",
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-rose-deep after:transition-transform after:duration-300 hover:after:scale-x-100",
                  active === l.href && "text-burgundy after:scale-x-100",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={generalWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-rose-deep px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-burgundy sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Order Now
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-burgundy transition-colors hover:bg-burgundy/5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "grid transition-[grid-template-rows] duration-300 md:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <ul className="mx-5 flex flex-col pb-5 sm:mx-8">
              {navLinks.map((l) => (
                <li key={l.href} className="border-t border-burgundy/10">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                    className={cn(
                      "block py-4 font-display text-2xl font-semibold text-burgundy",
                      active === l.href && "text-rose-deep",
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-burgundy/10 pt-5">
                <a
                  href={generalWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={open ? 0 : -1}
                  className="flex items-center justify-center gap-2 rounded-md bg-rose-deep px-5 py-3.5 text-sm font-semibold text-white"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
