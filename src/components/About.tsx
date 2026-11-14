import { about } from "@/config/siteConfig";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-rose-deep">
            <span className="h-px w-10 bg-rose-deep" aria-hidden="true" />
            Who We Are
          </p>
          <h2
            id="about-title"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-burgundy sm:text-5xl"
          >
            {about.heading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80 sm:text-[1.0625rem]">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <a
            href="#products"
            className="mt-8 inline-flex items-center gap-2 border-b border-rose-deep pb-1 text-sm font-semibold tracking-wide text-burgundy transition-colors hover:text-rose-deep"
          >
            See what we offer
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-full w-full rounded-md border border-rose/60"
            />
            <img
              src={about.image}
              alt={about.imageAlt}
              width={900}
              height={1350}
              loading="lazy"
              decoding="async"
              className="relative aspect-[4/4.4] w-full rounded-md object-cover shadow-[0_20px_50px_-20px_rgba(103,47,56,0.35)] lg:aspect-[4/4.6]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
