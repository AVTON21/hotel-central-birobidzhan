import { reviews } from "@/data/site";

export function Reviews() {
  return <section className="section reviews" aria-labelledby="reviews-title"><div className="section-head"><p className="section-kicker">Впечатления</p><h2 className="section-title" id="reviews-title">Говорят<br /><i>по существу.</i></h2></div><div className="reviews-list">{reviews.map((review, index) => <article key={review.author}><span>0{index + 1}</span><blockquote>{review.quote}</blockquote><footer><strong>{review.author}</strong><small>{review.detail}</small></footer></article>)}</div><p className="demo-note">Отзывы созданы для демонстрации интерфейса portfolio-проекта.</p></section>;
}
