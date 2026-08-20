export const contacts = {
  phone: "+7 (42622) 4-03-30", phoneHref: "tel:+74262240330", email: "hello@central-concept.ru",
  address: "Биробиджан, ул. Шолом-Алейхема, 1",
  mapUrl: "https://yandex.ru/maps/?text=%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0%20%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%91%D0%B8%D1%80%D0%BE%D0%B1%D0%B8%D0%B4%D0%B6%D0%B0%D0%BD",
};

export const navigation = [["Номера", "#rooms"], ["Об отеле", "#about"], ["Услуги", "#services"], ["Галерея", "#gallery"], ["Расположение", "#location"], ["FAQ", "#faq"], ["Контакты", "#contacts"]] as const;

export const facts = [
  ["Центр города", "Кафе, магазины и городские маршруты — в нескольких минутах ходьбы."],
  ["Круглые сутки", "Стойка администратора работает 24/7 — заезд не зависит от времени прибытия."],
  ["Для работы", "Wi‑Fi, спокойные номера и пространство для встреч в здании гостиницы."],
  ["Для поездки", "Парковка и документы для командировочных — без лишних согласований."],
] as const;

export const reviews = [
  { quote: "«Чисто, спокойно и действительно рядом с центром. Удобно было и работать, и гулять после встреч.»", author: "Алексей К.", detail: "деловая поездка · demo review" },
  { quote: "«Понравился понятный сервис: быстро заселились, оставили машину, утром без спешки уехали на вокзал.»", author: "Марина П.", detail: "выходные · demo review" },
  { quote: "«Номер с отдельной гостиной — хороший вариант, когда в поездке нужно и отдохнуть, и принять коллегу.»", author: "Игорь С.", detail: "командировка · demo review" },
] as const;

export const galleryItems = [
  { src: "/images/hotel-facade.jpg", alt: "Фасад гостиницы Центральная" }, { src: "/images/room-living.jpg", alt: "Гостиная номера" }, { src: "/images/room-bedroom.jpg", alt: "Спальня номера" }, { src: "/images/restaurant.jpg", alt: "Ресторан гостиницы" }, { src: "/images/conference.jpg", alt: "Конференц-зал" }, { src: "/images/sportbar.jpg", alt: "Спортбар" }, { src: "/images/sauna.jpg", alt: "Сауна" },
] as const;
