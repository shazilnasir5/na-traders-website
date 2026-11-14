import { formatPrice, productOrderLink, products, productsSection, type Product } from "@/config/siteConfig";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./Icons";

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Reveal as="li" delay={index * 90} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-md border border-burgundy/10 bg-white shadow-[0_1px_2px_rgba(103,47,56,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-rose/50 hover:shadow-[0_24px_48px_-24px_rgba(103,47,56,0.35)]">
        <div className="relative aspect-square overflow-hidden bg-blush">
          <img
            src={product.image}
            alt={product.imageAlt}
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-sm bg-cream/95 px-2.5 py-1 text-[0.7rem] font-bold tabular-nums tracking-[0.2em] text-burgundy">
            0{index + 1}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-3 sm:p-6">
          <h3 className="font-display text-xl font-bold leading-tight text-burgundy sm:text-[1.75rem]">
            {product.name}
          </h3>
          <p className="mt-2 flex-1 text-[0.72rem] leading-relaxed text-charcoal/70 sm:text-sm">{product.description}</p>

          <div className="mt-4 flex items-end justify-between gap-2 border-t border-burgundy/10 pt-3 sm:mt-5 sm:pt-4">
            <div className="flex flex-col gap-1">
              <span className="text-[0.55rem] font-black uppercase tracking-[0.18em] text-charcoal/60 sm:text-[0.7rem] sm:tracking-[0.22em]">Price</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-base font-black leading-none text-rose-deep sm:text-xl">{formatPrice(product)}</span>
              {product.unit ? <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.12em] text-charcoal/60 sm:text-[0.62rem]">{product.unit}</span> : null}
              {product.note ? <span className="mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.1em] text-charcoal/50 sm:text-[0.56rem]">{product.note}</span> : null}
            </div>
          </div>

          <a
            href={productOrderLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-burgundy px-3 py-2.5 text-[0.7rem] font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-wa hover:text-charcoal sm:mt-4 sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-sm"
          >
            <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            Order on WhatsApp
          </a>
        </div>
      </article>
    </Reveal>
  );
}

export function Products() {
  return (
    <section id="products" aria-labelledby="products-title" className="bg-blush py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-rose-deep">
            <span className="h-px w-8 bg-rose-deep" aria-hidden="true" />
            Our Range
            <span className="h-px w-8 bg-rose-deep" aria-hidden="true" />
          </p>
          <h2
            id="products-title"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-burgundy sm:text-5xl"
          >
            {productsSection.heading}
          </h2>
          <p className="mt-4 text-base text-charcoal/70 sm:text-lg">{productsSection.text}</p>
        </Reveal>

        <ul className="mt-14 grid list-none grid-cols-2 gap-3 sm:gap-7 xl:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
