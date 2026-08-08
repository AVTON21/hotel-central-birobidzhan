import type { Metadata } from "next";
import { Advantages } from "@/components/advantages/Advantages";
import { Faq } from "@/components/faq/Faq";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Location } from "@/components/location/Location";
import { Rooms } from "@/components/rooms/Rooms";
import { Services } from "@/components/services/Services";

export const metadata: Metadata = {
  title: "Гостиница «Центральная» — Биробиджан",
  description:
    "Гостиница «Центральная» в центре Биробиджана: 96 номеров, бесплатное бронирование, Wi‑Fi и парковка.",
};

export default function Home() {
  return (
    <>
      <main>
        <div className="first-screen">
          <Header />
          <Hero />
        </div>
        <Rooms />
        <Advantages />
        <Services />
        <Location />
        <Faq />
      </main>
      <Footer />
      <a
        className="mobile-booking"
        href="https://hotel79.ru/booking.html"
        target="_blank"
        rel="noreferrer"
      >
        Забронировать
        <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
