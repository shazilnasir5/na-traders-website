import type { ReactNode } from "react";
import { business, generalWhatsappLink, placeholders } from "@/config/siteConfig";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";

type RowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  placeholder: string;
  href?: string;
  external?: boolean;
};

function ContactRow({ icon, label, value, placeholder, href, external }: RowProps) {
  const has = value.trim().length > 0;
  const content = has ? value : placeholder;
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-rose/40 bg-blush text-rose-deep">
        {icon}
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-charcoal/50">{label}</p>
        {has && href ? (
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="mt-1 block break-words text-base font-semibold text-burgundy transition-colors hover:text-rose-deep"
          >
            {content}
          </a>
        ) : (
          <p className={has ? "mt-1 text-base font-semibold text-burgundy" : "mt-1 text-base text-charcoal/45"}>
            {content}
          </p>
        )}
      </div>
    </li>
  );
}

export function Contact() {
  const phoneValue = business.phoneNumbers?.length ? business.phoneNumbers.join(" / ") : business.phone || placeholders.phone;
  const whatsappValue = business.whatsappNumbers?.length ? business.whatsappNumbers.join(" / ") : business.whatsappDisplay || placeholders.whatsapp;
  const mapQuery = business.mapQuery.trim();

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-rose-deep">
            <span className="h-px w-10 bg-rose-deep" aria-hidden="true" />
            Get In Touch
          </p>
          <h2
            id="contact-title"
            className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight text-burgundy sm:text-5xl"
          >
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Questions about a product or an order? Reach out any time. WhatsApp is the quickest way to get a reply.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal>
            <div className="h-full rounded-md border border-burgundy/10 bg-white p-7 shadow-[0_1px_2px_rgba(103,47,56,0.05)] sm:p-9">
              <ul className="space-y-6">
                <ContactRow
                  icon={<PhoneIcon />}
                  label="Phone"
                  value={phoneValue}
                  placeholder={placeholders.phone}
                  href={`tel:${business.phoneNumbers?.[0]?.replace(/[^\d+]/g, "") || business.phone.replace(/[^\d+]/g, "")}`}
                />
                <ContactRow
                  icon={<WhatsAppIcon className="h-5 w-5" />}
                  label="WhatsApp"
                  value={whatsappValue}
                  placeholder={placeholders.whatsapp}
                  href={generalWhatsappLink()}
                  external
                />
                <ContactRow
                  icon={<MailIcon />}
                  label="Email"
                  value={business.email}
                  placeholder={placeholders.email}
                  href={`mailto:${business.email}`}
                />
                <ContactRow
                  icon={<PinIcon />}
                  label="Address"
                  value={business.address}
                  placeholder={placeholders.address}
                />
                {business.hours.trim() && (
                  <ContactRow
                    icon={<ClockIcon />}
                    label="Business Hours"
                    value={business.hours}
                    placeholder=""
                  />
                )}
              </ul>

              <a
                href={generalWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 flex w-full items-center justify-center gap-2.5 rounded-md bg-burgundy px-6 py-4 text-sm font-semibold tracking-wide text-cream transition-colors duration-300 hover:bg-wa hover:text-charcoal"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat With Us on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-md border border-burgundy/10 bg-blush shadow-[0_1px_2px_rgba(103,47,56,0.05)] lg:min-h-full">
              {mapQuery ? (
                <iframe
                  title={`Map showing the location of ${business.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
                  className="h-full min-h-[320px] w-full border-0 lg:min-h-[460px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-4 p-8 text-center lg:min-h-[460px]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-rose/50 bg-cream text-rose-deep">
                    <PinIcon className="h-7 w-7" />
                  </span>
                  <p className="font-display text-2xl font-bold text-burgundy">Our location</p>
                  <p className="max-w-xs text-sm leading-relaxed text-charcoal/60">
                    The Google Map will appear here once the business address is added in the site configuration.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
