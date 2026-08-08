import Image from "next/image";
import { rooms } from "@/data/rooms";

export function Rooms() {
  return (
    <section className="section rooms" id="rooms" aria-labelledby="rooms-title">
      <div className="rooms-heading">
        <div>
          <p className="section-kicker">Номерной фонд</p>
          <h2 className="section-title" id="rooms-title">Выберите свой<br />ритм отдыха</h2>
          <p className="section-intro">96 номеров разных категорий: от практичных стандартов до просторных апартаментов.</p>
        </div>
        <a className="button" href="https://hotel79.ru/reserve/" target="_blank" rel="noreferrer">Все категории →</a>
      </div>
      <div className="room-grid">
        {rooms.map((room) => (
          <article className={`room-card${room.featured ? " room-card-featured" : ""}`} key={room.name}>
            <div className="room-image"><Image src={room.image} alt={`Интерьер: ${room.name}`} fill unoptimized sizes={room.featured ? "(max-width: 800px) 100vw, 55vw" : "(max-width: 800px) 100vw, 40vw"} /></div>
            <div className="room-meta">
              <h3>{room.name}</h3>
              <div className="room-price">от<strong>{room.price}</strong></div>
            </div>
            <div className="room-details"><span>{room.area}</span><span>{room.guests}</span>{room.features.map((feature) => <span key={feature}>{feature}</span>)}</div>
            <div className="room-actions"><a href={room.href} target="_blank" rel="noreferrer">Подробнее</a><a href="https://hotel79.ru/booking.html" target="_blank" rel="noreferrer">Забронировать</a></div>
          </article>
        ))}
      </div>
    </section>
  );
}
