import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";
import { rooms } from "@/data/rooms";

const price = new Intl.NumberFormat("ru-RU");

export function Rooms() {
  return <section className="section rooms" id="rooms" aria-labelledby="rooms-title"><div className="section-head split-head"><div><p className="section-kicker">Номерной фонд</p><h2 className="section-title" id="rooms-title">Выберите<br /><i>свой формат.</i></h2></div><p className="section-intro">Три продуманных категории для короткой поездки, рабочих задач или отдыха без спешки.</p></div><div className="room-grid">{rooms.map((room, index) => <article className={`room-card room-card-${index + 1}`} key={room.slug}><Link className="room-image" href={`/rooms/${room.slug}`} aria-label={`Подробнее о номере ${room.name}`}><Image src={room.images[0].src} alt={room.images[0].alt} fill unoptimized sizes="(max-width: 760px) 100vw, 48vw" /><span className="image-count">0{room.images.length} фото</span></Link><div className="room-content"><div className="room-card-top"><p>{room.eyebrow}</p><strong>от {price.format(room.price)} ₽ <small>/ ночь</small></strong></div><h3>{room.name}</h3><p className="room-description">{room.description}</p><div className="room-specs"><span>{room.area}</span><span>{room.guests}</span><span>{room.bed}</span></div><div className="room-actions"><Link href={`/rooms/${room.slug}`}>Подробнее <ArrowUpRight className="button-icon room-action-icon" /></Link><Link href={`/rooms/${room.slug}#booking`}>Забронировать</Link></div></div></article>)}</div></section>;
}
