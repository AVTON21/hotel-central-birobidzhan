export type Room = {
  name: string;
  price: string;
  area: string;
  guests: string;
  features: string[];
  image: string;
  href: string;
  featured?: boolean;
};

export const rooms: Room[] = [
  {
    name: "Люкс 2-комнатный",
    price: "9 000 ₽ / сутки",
    area: "49 м²",
    guests: "2 взрослых",
    features: ["Спальня и гостиная", "Кондиционер", "Ванная комната"],
    image: "/images/room-living.jpg",
    href: "https://hotel79.ru/reserve/double-suite.html",
    featured: true,
  },
  {
    name: "Двухместный с двуспальной кроватью",
    price: "5 000 ₽ / сутки",
    area: "18 м²",
    guests: "2 взрослых",
    features: ["Двуспальная кровать", "Холодильник", "Кондиционер"],
    image: "/images/room-bedroom.jpg",
    href: "https://hotel79.ru/reserve/2m_1bed.html",
  },
];
