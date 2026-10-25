"use client";

import { useRef } from "react";
import { TIMELINE } from "@/lib/content";

export function Story() {
  const tl = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    const el = tl.current;
    const card = el?.querySelector(".yr");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 14), behavior: "smooth" });
  };

  return (
    <section className="story paper" id="story" aria-labelledby="story-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">Our story</div>
            <h2 className="h2 rv" id="story-h">
              Radical <span className="thin">proximity.</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, alignItems: "flex-start" }}>
            <p className="lede">
              The stories about young Africans were being told by people who hadn’t lived them. We decided to tell them
              from inside.
            </p>
            <div className="tl-nav">
              <button aria-label="Previous year" onClick={() => move(-1)}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button aria-label="Next year" onClick={() => move(1)}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="tl" ref={tl} tabIndex={0} aria-label="Timeline">
          {TIMELINE.map((y) => (
            <article className="yr" key={y.year} style={{ ["--yc" as string]: y.color }}>
              <div className="y">
                {y.year}
                <small>{y.tag}</small>
              </div>
              <p>
                {y.text}
                {y.link && (
                  <>
                    {" "}
                    <a href={y.link.href}>{y.link.label}</a>
                  </>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
