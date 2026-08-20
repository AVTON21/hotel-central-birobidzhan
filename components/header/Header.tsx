"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/site";
import { ArrowUpRight } from "@/components/icons/ArrowUpRight";

export function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 28); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <Link className="brand" href="/" aria-label="Центральная, на главную">Центральная <small>hotel concept</small></Link>
    <nav className="desktop-nav" aria-label="Основная навигация">{navigation.map(([label, href]) => <Link key={href} href={`/${href}`}>{label}</Link>)}</nav>
    <Link className="header-book" href="/#booking">Забронировать <ArrowUpRight className="button-icon" /></Link>
    <button className="menu-toggle" type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
    {open && <nav className="mobile-panel" aria-label="Мобильная навигация"><div className="mobile-panel-top"><span>Навигация</span><button type="button" onClick={() => setOpen(false)} aria-label="Закрыть меню">×</button></div>{navigation.map(([label, href], index) => <Link key={href} href={`/${href}`} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</Link>)}<Link className="mobile-menu-book" href="/#booking" onClick={() => setOpen(false)}>Забронировать <ArrowUpRight className="button-icon" /></Link></nav>}
  </header>;
}
