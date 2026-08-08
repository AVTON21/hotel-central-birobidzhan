import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hotel-central-demo.sites.openai.com"),
  title: {
    default: "Гостиница «Центральная» — Биробиджан",
    template: "%s — Гостиница «Центральная»",
  },
  description:
    "Современная городская гостиница в центре Биробиджана, в 10 минутах пешком от вокзала.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Гостиница «Центральная» — Биробиджан",
    description: "Гостиница в центре Биробиджана. 96 номеров и бесплатное бронирование.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Гостиница «Центральная» в Биробиджане" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Гостиница «Центральная» — Биробиджан",
    description: "Гостиница в центре Биробиджана. 96 номеров и бесплатное бронирование.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
