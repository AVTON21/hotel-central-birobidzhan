const navigation = [
  ["Номера", "#rooms"],
  ["Услуги", "#services"],
  ["О гостинице", "#about"],
  ["Контакты", "#contacts"],
];

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Гостиница Центральная, на главную">
        Центральная <small>Биробиджан</small>
      </a>
      <nav className="desktop-nav" aria-label="Основная навигация">
        {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-phone" href="tel:+74262240330">+7 (42622) 4-03-30</a>
      <a className="header-book" href="https://hotel79.ru/booking.html" target="_blank" rel="noreferrer">Забронировать</a>
      <details className="mobile-nav">
        <summary aria-label="Открыть меню"><span className="menu-lines" /></summary>
        <nav className="mobile-panel" aria-label="Мобильная навигация">
          {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          <a className="mobile-phone" href="tel:+74262240330">+7 (42622) 4-03-30</a>
        </nav>
      </details>
    </header>
  );
}
