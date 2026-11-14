import { hero, products } from "@/config/siteConfig";
import { ArrowIcon } from "./Icons";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[linear-gradient(100deg,#EFD0C7_0%,#E9C4BC_100%)]"
    >
      <img
        src={hero.image}
        alt="Topping sausages, glazed cherries, Khasta Gari and fruit purees arranged together"
        width={1600}
        height={1067}
        fetchPriority="high"
        decoding="async"
        className="hero-image pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center xl:inset-auto xl:bottom-0 xl:right-0 xl:h-[min(80svh,66.7vw)] xl:w-auto xl:max-w-none xl:object-left"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(255,249,245,0.9)_0%,rgba(255,249,245,0.72)_18%,rgba(255,249,245,0.35)_42%,rgba(255,249,245,0.12)_60%,rgba(255,249,245,0)_100%)] xl:bg-[linear-gradient(90deg,rgba(255,249,245,0.7)_0%,rgba(255,249,245,0.32)_38%,rgba(255,249,245,0)_62%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-20 pt-32 sm:px-8 md:pt-36 xl:pb-24 xl:pt-44">
        <div className="max-w-xl rounded-2xl bg-white/20 p-3 shadow-[0_20px_40px_-20px_rgba(103,47,56,0.45)] ring-1 ring-white/30 backdrop-blur-md sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0 xl:max-w-[34rem]">
          <p
            className="rise flex items-center gap-3 text-xs font-bold uppercase tracking-[0.32em] text-burgundy"
            style={{ "--delay": "100ms" } as React.CSSProperties}
          >
            <span className="h-px w-10 bg-rose-deep" aria-hidden="true" />
            {hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className="rise mt-5 font-display text-[2.9rem] font-bold leading-[1.02] tracking-tight text-burgundy sm:text-6xl xl:text-[4.4rem]"
            style={{ "--delay": "250ms" } as React.CSSProperties}
          >
            {hero.headline}
          </h1>

          <p
            className="rise mt-6 max-w-md text-base leading-relaxed text-charcoal sm:text-lg"
            style={{ "--delay": "420ms" } as React.CSSProperties}
          >
            {hero.text}
          </p>

          <div
            className="rise mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ "--delay": "580ms" } as React.CSSProperties}
          >
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-burgundy px-7 py-3.5 text-sm font-semibold tracking-wide text-cream shadow-[0_8px_24px_-8px_rgba(103,47,56,0.6)] transition-all hover:-translate-y-0.5 hover:bg-charcoal"
            >
              {hero.primaryCta}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-burgundy/40 bg-cream/60 px-7 py-3.5 text-sm font-semibold tracking-wide text-burgundy transition-colors hover:border-burgundy hover:bg-cream"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <ul
            className="rise mt-9 flex flex-wrap gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-burgundy"
            style={{ "--delay": "740ms" } as React.CSSProperties}
          >
            {products.map((p) => (
              <li key={p.id} className="flex items-center gap-2 rounded-full bg-white/30 px-2.5 py-1.5 ring-1 ring-burgundy/10 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-deep" aria-hidden="true" />
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
