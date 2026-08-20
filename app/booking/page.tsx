import type { Metadata } from "next";
import { Booking } from "@/components/booking/Booking";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export const metadata: Metadata = { title: "Демо-бронирование", description: "Самостоятельный демонстрационный сценарий бронирования номера." };
export default function BookingPage() { return <><Header /><main className="inner-page"><Booking /></main><Footer /></>; }
