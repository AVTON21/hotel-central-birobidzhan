export type Room = {
  slug: string;
  name: string;
  eyebrow: string;
  price: number;
  area: string;
  guests: string;
  bed: string;
  description: string;
  features: string[];
  amenities: string[];
  images: { src: string; alt: string }[];
  featured?: boolean;
};

export const rooms: Room[] = [
  {
    slug: "standard", name: "Стандарт Queen", eyebrow: "Для короткой поездки", price: 4800, area: "18 м²", guests: "до 2 гостей", bed: "1 двуспальная кровать",
    description: "Спокойный номер для тех, кому важно удобно остановиться в центре города и быстро переключиться на свой ритм.",
    features: ["Рабочее место", "Кондиционер", "Wi‑Fi"],
    amenities: ["Двуспальная кровать", "Кондиционер", "Телевизор", "Мини-холодильник", "Wi‑Fi", "Набор для чая", "Фен", "Ежедневная уборка"],
    images: [{ src: "/images/room-bedroom.jpg", alt: "Спальня номера Стандарт Queen" }, { src: "/images/room-living.jpg", alt: "Зона отдыха в номере Стандарт Queen" }],
  },
  {
    slug: "comfort", name: "Комфорт Twin", eyebrow: "Больше пространства", price: 6200, area: "26 м²", guests: "до 2 гостей", bed: "2 раздельные кровати",
    description: "Практичный формат для коллег и друзей: пространство для отдыха, вещей и спокойной работы после насыщенного дня.",
    features: ["Отдельная зона отдыха", "Wi‑Fi", "Холодильник"],
    amenities: ["Две раздельные кровати", "Зона отдыха", "Кондиционер", "Телевизор", "Мини-холодильник", "Wi‑Fi", "Набор для чая", "Фен"],
    images: [{ src: "/images/room-living.jpg", alt: "Гостиная номера Комфорт Twin" }, { src: "/images/room-bedroom.jpg", alt: "Спальня номера Комфорт Twin" }],
  },
  {
    slug: "suite", name: "Джуниор Сьют", eyebrow: "Для особого случая", price: 9000, area: "49 м²", guests: "до 3 гостей", bed: "Спальня и гостиная",
    description: "Самая просторная категория для долгой поездки, семьи или спокойного вечера в собственном темпе.",
    features: ["Две комнаты", "Гостиная", "Кондиционер"],
    amenities: ["Отдельная спальня", "Гостиная", "Мягкая мебель", "Кондиционер", "Телевизор", "Мини-холодильник", "Wi‑Fi", "Набор для чая", "Фен", "Ежедневная уборка"],
    images: [{ src: "/images/room-living.jpg", alt: "Гостиная номера Джуниор Сьют" }, { src: "/images/room-bedroom.jpg", alt: "Спальня номера Джуниор Сьют" }],
    featured: true,
  },
];

export function getRoom(slug: string) { return rooms.find((room) => room.slug === slug); }
