import Image from "next/image";

export function Hero() {
  return <section className="hero" id="top" aria-labelledby="hero-title"><div className="hero-media"><Image className="hero-photo" src="/images/hotel-facade.jpg" alt="Фасад гостиницы Центральная" fill priority unoptimized sizes="100vw" /><div className="hero-shade" /><div className="hero-copy"><p className="eyebrow">Биробиджан · городской отель</p><h1 id="hero-title">Остановитесь <em>в своём ритме.</em></h1><p>Тихие номера, деловые пространства и всё важное в нескольких минутах от вас.</p><div className="hero-actions"><a className="button button-primary" href="#rooms">Выбрать номер <span>↓</span></a><a className="button button-ghost" href="#booking">Забронировать <span>↗</span></a></div></div><div className="hero-facts" aria-label="Ключевые факты"><span>Центр города</span><span>10 минут до вокзала</span><span>24/7 стойка</span></div><p className="concept-badge">Concept / portfolio project</p></div></section>;
}
