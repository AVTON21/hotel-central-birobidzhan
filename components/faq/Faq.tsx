import { faqItems } from "@/data/faq";

export function Faq() {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div><p className="section-kicker">Коротко о важном</p><h2 className="section-title" id="faq-title">Перед<br />поездкой</h2></div>
      <div className="faq-list">{faqItems.map((item) => <details key={item.question}><summary>{item.question}</summary><p className="faq-answer">{item.answer}</p></details>)}</div>
    </section>
  );
}
