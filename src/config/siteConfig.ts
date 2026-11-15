/**
 * ============================================================
 *  N.A TRADERS — SITE CONFIGURATION
 *  Edit everything here: contact details, prices, text, images.
 * ============================================================
 */

import heroImg from "@/assets/hero.jpg";
import productsImg from "@/assets/products.jpeg";
import chocolateFillingImg from "@/assets/chocolate filling.jpg";
import strawberryFillingImg from "@/assets/strawberry filling.jpg";
import caramelSauceImg from "@/assets/caramel sauce.jpg";
import redGlazedCherryImg from "@/assets/red glazed cherry.jpg";
import khastaImg from "@/assets/khasta.jpg";
import blackCherrySauceImg from "@/assets/black cherry sauce.jpg";
import blackCherryBigImg from "@/assets/black cherry big.jpeg";
import pineappleSauceImg from "@/assets/pineapple sauce.jpg";
import pineappleBigImg from "@/assets/pineapple big.jpeg";
import strawberrySauceImg from "@/assets/strawberry sauce.jpg";
import strawberryBigImg from "@/assets/strawberry big.jpeg";
import chocolateFudgeImg from "@/assets/chocolate fudge.jpg";
import dryMixFruitImg from "@/assets/dry mix fruit.jpg";
import blackCurrantImg from "@/assets/black currant.jpg";
import blackCurrantBigImg from "@/assets/black currant big.jpeg";

/* ---------- Business details ---------- */
export const business = {
  name: "N.A Traders",
  tagline: "Quality food products, simply ordered.",

  /**
   * WhatsApp number — digits only, with country code, no "+" or spaces.
   * Example for Pakistan: "923001234567"
   * Leave empty ("") until you have the number: WhatsApp will still open
   * with the message pre-filled and let the visitor choose the contact.
   */
  whatsappNumber: "923435395040",

  /** Shown on the website. Leave "" to display a placeholder. */
  whatsappDisplay: "+92 3435395040 / +92 3275753676",
  phone: "+92 3435395040 / +92 3275753676",
  phoneNumbers: ["+92 3435395040", "+92 3275753676"],
  whatsappNumbers: ["+92 3435395040", "+92 3275753676"],
  instagram: "na_traders00",
  instagramLink: "https://instagram.com/na_traders00",
  email: "nasirghazi14@gmail.com",
  address: "Chah Sultan, Rawalpindi",
  hours: "",
  deliveryText: "Delivery all over Pakistan",

  /**
   * Text used to find the business on Google Maps (usually the address,
   * or the business name + city). Leave "" to show a map placeholder.
   */
  mapQuery: "Chah Sultan Rawalpindi",
};

export const placeholders = {
  phone: "[Add Phone Number]",
  whatsapp: "[Add WhatsApp Number]",
  email: "[Add Email Address]",
  address: "[Add Complete Business Address]",
  price: "[Add Price]",
};

/* ---------- Hero ---------- */
export const hero = {
  image: heroImg,
  eyebrow: "N.A TRADERS",
  headline: "Bring More Flavour to Every Creation.",
  text: "Discover our range of quality food products, carefully presented to bring flavour, colour and creativity to your creations.",
  primaryCta: "Explore Our Products",
  secondaryCta: "Contact Us",
};

/* ---------- About ---------- */
export const about = {
  heading: "About N.A Traders",
  image: productsImg,
  imageAlt: "Products collage featuring sauces, cherries and fruit products",
  // Replace these paragraphs with your real company background.
  paragraphs: [
    "N.A Traders deals in food products including topping sauces, glazed cherry, Khasta Gari and fruit purees.",
    "We present each product clearly, with its price on display, so ordering is simple: choose what you need and message us directly on WhatsApp.",
  ],
};

/* ---------- Products ---------- */
export type Product = {
  id: string;
  name: string;
  description: string;
  /** Just the amount, e.g. "1,200" — shown as "Rs. 1,200". Leave "" for placeholder. */
  price: string;
  /** Optional unit, e.g. "per kg" */
  unit?: string;
  /** Small secondary note beneath the price, e.g. "16 kg bucket: Rs. 22,400" */
  note?: string;
  image: string;
  imageAlt: string;
  images?: string[];
};

export const productsSection = {
  heading: "Explore Our Products",
  text: "Discover our selection of products.",
};

export const products: Product[] = [
  {
    id: "chocolate-sauce",
    name: "Chocolate Sauce",
    description: "Smooth, rich chocolate sauce for desserts, cakes, drizzles and ice cream toppings.",
    price: "1,250",
    unit: "1300ml bottle",
    image: chocolateFillingImg,
    imageAlt: "Chocolate filling in a bottle for toppings and desserts",
  },
  {
    id: "strawberry-sauce",
    name: "Strawberry Sauce",
    description: "Sweet strawberry sauce with a vibrant fruit flavour for desserts, pastries and shakes.",
    price: "1,150",
    unit: "1300ml bottle",
    image: strawberryFillingImg,
    imageAlt: "Strawberry filling in a bottle for desserts and toppings",
  },
  {
    id: "caramel-sauce",
    name: "Caramel Sauce",
    description: "Golden caramel sauce for desserts, waffles, cakes and indulgent drizzles.",
    price: "1,150",
    unit: "1300ml bottle",
    image: caramelSauceImg,
    imageAlt: "Caramel sauce in a bottle for desserts and toppings",
  },
  {
    id: "glazed-cherry",
    name: "Glazed Cherry",
    description: "Glossy, ruby-red cherries to finish cakes, pastries, desserts and drinks.",
    price: "1,400",
    unit: "per kg",
    note: "16 kg bucket: Rs. 22,400",
    image: redGlazedCherryImg,
    imageAlt: "A jar of glossy glazed red cherries",
  },
  {
    id: "khasta-gari",
    name: "Apricot Kernel (Khasta)",
    description: "Crisp, flaky and delicious, a traditional savoury bite for any occasion.",
    price: "1,600",
    unit: "per kg",
    image: khastaImg,
    imageAlt: "A plate of golden flaky apricot seeds",
  },
  {
    id: "black-cherry-sauce",
    name: "Black Cherry Filling",
    description: "Rich black cherry flavour for desserts, pastries, smoothies and drizzles.",
    price: "1,200",
    unit: "per 900 gm",
    image: blackCherrySauceImg,
    imageAlt: "Black cherry sauce in a pack for desserts and beverages",
    images: [blackCherrySauceImg, blackCherryBigImg],
  },
  {
    id: "chocolate-fudge-pack",
    name: "Chocolate Fudge Filling",
    description: "Velvety chocolate fudge for cakes, brownies and indulgent dessert finishes.",
    price: "1,300",
    unit: "per 900 gm",
    image: chocolateFudgeImg,
    imageAlt: "Chocolate fudge in a pack for dessert toppings and fillings",
  },
  {
    id: "pineapple-sauce-pack",
    name: "Pineapple Filling",
    description: "Sunny pineapple flavour for toppings, desserts, pastries and drinks.",
    price: "1,550",
    unit: "per 900 gm",
    image: pineappleSauceImg,
    imageAlt: "Pineapple sauce in a pack for desserts and beverages",
    images: [pineappleSauceImg, pineappleBigImg],
  },
  {
    id: "strawberry-sauce-pack",
    name: "Strawberry Sauce",
    description: "Sweet strawberry flavour for desserts, pastries, shakes and cake finishes.",
    price: "1,200",
    unit: "per 900 gm",
    image: strawberrySauceImg,
    imageAlt: "Strawberry sauce in a pack for desserts and toppings",
    images: [strawberrySauceImg, strawberryBigImg],
  },
  {
    id: "dry-mix-fruit",
    name: "Dry Mix Fruit",
    description: "A premium blend of dried fruits for snacking, desserts and festive mixes.",
    price: "1,550",
    unit: "per kg",
    note: "Available in 12 kg bucket",
    image: dryMixFruitImg,
    imageAlt: "Dry mix fruit product in a bucket packaging",
  },
  {
    id: "black-currant-filling",
    name: "Black Currant Filling",
    description: "Distinct black currant flavour for rich fillings, pastries and indulgent dessert finishes.",
    price: "1,600",
    unit: "per 900 gm",
    image: blackCurrantImg,
    imageAlt: "Black currant filling product in packaging",
    images: [blackCurrantImg, blackCurrantBigImg],
  },
];

/* ---------- Navigation ---------- */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

/* ---------- WhatsApp helpers ---------- */
const digits = (v: string) => v.replace(/\D/g, "");

export const formatPrice = (p: Product) =>
  `Rs. ${p.price.trim() || placeholders.price}`;

export const whatsappLink = (message: string) => {
  const number = digits(business.whatsappNumber);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

export const productOrderLink = (p: Product) =>
  whatsappLink(
    `Assalam-o-Alaikum! I am interested in ordering ${p.name}. Displayed Price: ${formatPrice(p)}. Please share further details.`,
  );

export const generalWhatsappLink = () =>
  whatsappLink(`Assalam-o-Alaikum! I would like to know more about your products.`);
