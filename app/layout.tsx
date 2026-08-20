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
  metadataBase: new URL("https://hotel-central-birobidzhan.mariahhihh.chatgpt.site"),
  title: {
    default: "Central Hotel Concept — portfolio project",
    template: "%s — Central Hotel Concept",
  },
  description:
    "Самостоятельный portfolio-концепт современного городского отеля: номера, услуги и демо-бронирование.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Central Hotel Concept — городской отель",
    description: "Portfolio-концепт современного городского отеля: номера, услуги и демо-бронирование.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Гостиница «Центральная» в Биробиджане" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Central Hotel Concept — городской отель",
    description: "Portfolio-концепт современного городского отеля: номера, услуги и демо-бронирование.",
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
