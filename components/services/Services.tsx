import Image from "next/image";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="services-head">
        <div><p className="section-kicker">Всё в одном здании</p><h2 className="section-title" id="services-title">Для отдыха<br />и для дела</h2></div>
        <p className="section-intro">Поужинать, провести встречу или отдохнуть после дороги можно, не покидая гостиницу.</p>
      </div>
      <div className="services-grid">
        {services.map((service) => <article className="service-card" key={service.name}><Image src={service.image} alt={service.name} fill unoptimized sizes="(max-width: 800px) 100vw, 60vw" /><div className="service-copy"><h3>{service.name}</h3><p>{service.description}</p></div></article>)}
      </div>
    </section>
  );
}
