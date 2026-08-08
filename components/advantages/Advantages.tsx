const facts = [
  ["Самый центр", "Магазины, кафе и городские места — в шаговой доступности."],
  ["96 номеров", "Категории от одноместных стандартов до апартаментов."],
  ["Бесплатно", "Бронирование на официальном сайте, Wi‑Fi и парковка для гостей."],
  ["24 часа", "Стойка администратора работает круглосуточно."],
];

export function Advantages() {
  return (
    <section className="section advantages" id="about" aria-labelledby="advantages-title">
      <div className="advantages-head">
        <p className="section-kicker">Почему «Центральная»</p>
        <h2 className="section-title" id="advantages-title">Гостиница, в которой всё устроено по делу</h2>
      </div>
      <div className="facts">
        {facts.map(([title, text], index) => <div className="fact" key={title}><span className="fact-index">0{index + 1}</span><strong>{title}</strong><p>{text}</p></div>)}
      </div>
    </section>
  );
}
