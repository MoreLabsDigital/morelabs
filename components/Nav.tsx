"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/content";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const onScroll = () => {
      let cur = "";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) cur = id;
      });
      setActive(cur);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="nav" id="top">
        <div className="wrap">
          <a href="#hero" className="brand" aria-label="More Labs home">
            <Image src="/images/morelabs-wordmark.png" alt="More Labs" width={140} height={18} priority />
          </a>
          <nav className="links" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className={active === n.href.slice(1) ? "on" : undefined}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="nav-r">
            <a href="#contact" className="btn sm">
              Start a project <span className="ar">→</span>
            </a>
            <button
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mmenu"
              onClick={() => setOpen((o) => !o)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className="mobile-menu" id="mmenu" aria-label="Menu" aria-hidden={!open}>
        {NAV.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {n.label}
          </a>
        ))}
        <a href="#contact" className="btn" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Start a project <span className="ar">→</span>
        </a>
      </div>
    </>
  );
}
