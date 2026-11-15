import { formatPrice, productOrderLink, products, productsSection, type Product } from "@/config/siteConfig";
import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./Icons";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const showGalleryControls = galleryImages.length > 1;
  const prevImage = () => setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  const nextImage = () => setCurrentImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const endX = event.changedTouches[0]?.clientX ?? null;
    if (touchStartX.current === null || endX === null) return;

    const delta = touchStartX.current - endX;
    if (delta > 40) nextImage();
    if (delta < -40) prevImage();
    touchStartX.current = null;
  };

  return (
    <Reveal as="li" delay={index * 90} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-md border border-burgundy/10 bg-white shadow-[0_1px_2px_rgba(103,47,56,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:border-rose/50 hover:shadow-[0_24px_48px_-24px_rgba(103,47,56,0.35)]">
        <div className="relative aspect-square overflow-hidden bg-blush">
          <div
            className="flex h-full w-full touch-pan-y transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {galleryImages.map((image, imageIndex) => (
              <img
                key={`${product.id}-${imageIndex}`}
                src={image}
                alt={product.imageAlt}
                width={900}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-full w-full shrink-0 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ))}
          </div>

          {showGalleryControls ? (
            <>
              <button
                type="button"
                aria-label={`Previous image of ${product.name}`}
                onClick={prevImage}
                className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-burgundy shadow-sm transition hover:bg-white"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label={`Next image of ${product.name}`}
                onClick={nextImage}
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-burgundy shadow-sm transition hover:bg-white"
              >
                ›
              </button>
              <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
                {galleryImages.map((_, imageIndex) => (
                  <button
                    key={`${product.id}-dot-${imageIndex}`}
                    type="button"
                    aria-label={`Show image ${imageIndex + 1} for ${product.name}`}
                    onClick={() => setCurrentImageIndex(imageIndex)}
                    className={`h-2.5 w-2.5 rounded-full transition ${imageIndex === currentImageIndex ? "bg-burgundy" : "bg-white/80"}`}
                  />
                ))}
              </div>
            </>
          ) : null}

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
