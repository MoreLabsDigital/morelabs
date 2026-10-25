"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { RECOGNITION, TEAM } from "@/lib/content";

export function Team() {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="team" id="team" aria-labelledby="team-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">The people</div>
            <h2 className="h2 rv" id="team-h">
              Three founders, <span className="thin">three different lenses.</span>
            </h2>
          </div>
          <p className="lede">All three of us still write, edit, shoot and pitch. Tap a portrait to read more.</p>
        </div>

        <div className="t-grid">
          {TEAM.map((p) => {
            const isOpen = open === p.id;
            return (
              <article
                key={p.id}
                className={`person rv${isOpen ? " on" : ""}`}
                style={{ ["--pc" as string]: p.accent, ["--pf" as string]: p.accentText }}
              >
                <button
                  className="card-btn"
                  aria-expanded={isOpen}
                  aria-controls={`bio-${p.id}`}
                  onClick={() => setOpen(isOpen ? null : p.id)}
                >
                  <span className="ph">
                    <Image src={p.photo} alt={`Portrait of ${p.name}`} width={640} height={800} sizes="(max-width: 520px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                  </span>
                  <span className="meta">
                    <span className="h3">{p.name}</span>
                    <span className="role">{p.role}</span>
                  </span>
                  <span className="more" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="bio" id={`bio-${p.id}`} aria-hidden={!isOpen} inert={!isOpen}>
                  <div>
                    <h3>{p.name}</h3>
                    <p style={{ opacity: 0.7, marginTop: 4 }}>{p.role}</p>
                  </div>
                  <p>{p.bio}</p>
                  <div className="links2">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ))}
                    <button onClick={() => setOpen(null)}>Close</button>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Fourth seat: replace with the next team member when ready (add them to TEAM in lib/content.ts). */}
          <div className="seat rv">
            <div className="eyebrow">Open seat</div>
            <h3>
              The newsroom is <b>growing.</b>
            </h3>
            <p>We’re hiring storytellers, editors, video producers and designers who know this audience because they are this audience.</p>
            <a href="#contact" className="btn ghost sm" style={{ alignSelf: "flex-start" }}>
              Introduce yourself <span className="ar">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="recog" style={{ marginTop: "clamp(56px,7vw,96px)" }}>
          <div className="eyebrow" style={{ marginBottom: 22 }}>
            Recognition &amp; partners
          </div>
          <div className="r-grid">
            {RECOGNITION.map((r) => (
              <a className="r rv" href={r.href} target="_blank" rel="noopener noreferrer" key={r.who}>
                <span className="y">{r.year}</span>
                <div>
                  <span className="who">{r.who}</span>
                  <p>{r.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
