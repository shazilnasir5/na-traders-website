import { generalWhatsappLink } from "@/config/siteConfig";
import { WhatsAppIcon } from "./Icons";

export function WhatsAppFloat() {
  return (
    <a
      href={generalWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with N.A Traders on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.65)] ring-4 ring-white/70 transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-8 w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-burgundy px-3 py-2 text-xs font-semibold text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
