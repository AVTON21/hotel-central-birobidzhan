import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media">
        <Image className="hero-photo" src="/images/hotel-facade.jpg" alt="Фасад гостиницы «Центральная» на улице Шолом-Алейхема в Биробиджане" fill priority unoptimized sizes="100vw" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p className="eyebrow">Гостиница в Биробиджане</p>
          <h1 id="hero-title">В центре города. <em>Всё рядом.</em></h1>
          <p className="hero-sub">96 номеров — от недорогих вариантов до апартаментов. Бесплатные Wi‑Fi, парковка и бронирование.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://hotel79.ru/booking.html" target="_blank" rel="noreferrer">Забронировать номер <span aria-hidden="true">↗</span></a>
            <a className="button button-ghost" href="#rooms">Посмотреть номера</a>
          </div>
        </div>
        <span className="hero-scroll" aria-hidden="true">Листайте</span>
        <div className="hero-dock" aria-label="Ключевая информация">
          <div className="dock-item"><span>Расположение</span><strong>Центр города</strong></div>
          <div className="dock-item"><span>От вокзала</span><strong>10 минут пешком</strong></div>
          <a className="dock-book" href="https://hotel79.ru/booking.html" target="_blank" rel="noreferrer">Бронировать бесплатно →</a>
        </div>
      </div>
    </section>
  );
}
