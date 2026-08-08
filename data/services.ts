export type Service = { name: string; description: string; image: string };

export const services: Service[] = [
  { name: "Ресторан", description: "Завтраки и ресторан на первом этаже гостиницы", image: "/images/restaurant.jpg" },
  { name: "Конференц-зал", description: "Пространство для деловых встреч и переговоров", image: "/images/conference.jpg" },
  { name: "Спортбар", description: "Бар в здании гостиницы", image: "/images/sportbar.jpg" },
  { name: "Сауна", description: "Отдых после дороги или рабочего дня", image: "/images/sauna.jpg" },
];
