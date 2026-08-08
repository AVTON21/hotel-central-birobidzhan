export function Location() {
  return (
    <section className="section location" aria-labelledby="location-title">
      <div className="location-copy">
        <p className="section-kicker">Локация</p>
        <h2 className="section-title" id="location-title">Город<br />начинается здесь</h2>
        <p className="location-address">Биробиджан,<br />ул. Шолом-Алейхема, 1</p>
        <a className="button" href="https://yandex.ru/maps/?text=%D0%93%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B8%D1%86%D0%B0%20%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%91%D0%B8%D1%80%D0%BE%D0%B1%D0%B8%D0%B4%D0%B6%D0%B0%D0%BD" target="_blank" rel="noreferrer">Построить маршрут ↗</a>
      </div>
      <div className="location-visual" aria-hidden="true"><div className="map-grid" /><span className="map-pin" /><span className="map-label">Центральная</span><p className="map-walk">10 минут пешком от железнодорожного вокзала</p></div>
    </section>
  );
}
