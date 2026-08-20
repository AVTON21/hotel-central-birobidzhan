import type { Metadata } from "next";
import { Advantages } from "@/components/advantages/Advantages";
import { Booking } from "@/components/booking/Booking";
import { Faq } from "@/components/faq/Faq";
import { Footer } from "@/components/footer/Footer";
import { Gallery } from "@/components/gallery/Gallery";
import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Location } from "@/components/location/Location";
import { Reviews } from "@/components/reviews/Reviews";
import { Rooms } from "@/components/rooms/Rooms";
import { Services } from "@/components/services/Services";

export const metadata: Metadata = { title: "Central Hotel Concept — городской отель", description: "Самостоятельный portfolio-концепт современного городского отеля: номера, услуги и демо-бронирование." };
export default function Home() { return <><main><div className="first-screen"><Header /><Hero /></div><Rooms /><Advantages /><Services /><Gallery /><Booking /><Reviews /><Location /><Faq /></main><Footer /><div className="mobile-cta"><a href="tel:+74262240330">Позвонить</a><a href="#booking">Забронировать <span>↗</span></a></div></>; }
