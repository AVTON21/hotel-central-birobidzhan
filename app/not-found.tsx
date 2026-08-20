import Link from "next/link";
export default function NotFound() { return <main className="not-found"><p className="section-kicker">404</p><h1>Эта страница<br /><i>не нашлась.</i></h1><p>Возможно, ссылка устарела — на главной всё на своих местах.</p><Link className="button button-dark" href="/">На главную</Link></main>; }
