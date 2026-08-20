import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import Link from "next/link";
export default function PrivacyPage() { return <><Header /><main className="legal-page"><p className="section-kicker">Portfolio project</p><h1>Политика конфиденциальности</h1><p>Этот сайт — демонстрационный проект. Заявки не передаются третьим лицам и не сохраняются после закрытия текущего сеанса.</p><Link className="button button-dark" href="/">Вернуться на главную</Link></main><Footer /></>; }
