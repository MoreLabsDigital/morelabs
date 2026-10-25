"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useUI } from "./UIProvider";
import { VERTICALS, type VerticalKey } from "@/lib/content";

function Art({ k }: { k: VerticalKey }) {
  switch (k) {
    case "mb":
      return (
        <Image
          src="/images/morebranches-wordmark.png"
          alt="MoreBranches"
          width={252}
          height={72}
          style={{ height: 72, width: "auto", filter: "brightness(0)" }}
        />
      );
    case "bs":
      return <Image src="/images/broad-street-sign.png" alt="Broad Street" width={132} height={120} />;
    case "m100":
      return (
        <span style={{ fontSize: 96, fontWeight: 900, fontVariationSettings: "'wdth' 125", letterSpacing: "-.05em", lineHeight: 0.8 }}>
          100
        </span>
      );
    default:
      return null;
  }
}

export function VerticalDrawer() {
  const { vertical, closeVertical } = useUI();
  const closeRef = useRef<HTMLButtonElement>(null);
  const v = vertical ? VERTICALS[vertical] : null;

  useEffect(() => {
    if (!vertical) return;
    const t = setTimeout(() => closeRef.current?.focus(), 60);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeVertical();
    addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      removeEventListener("keydown", onKey);
    };
  }, [vertical, closeVertical]);

  return (
    <>
      <div className="scrim" onClick={closeVertical} />
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="d-title"
        aria-hidden={!v}
        inert={!v}
        style={v ? ({ "--dbg": v.theme.bg, "--dfg": v.theme.fg } as React.CSSProperties) : undefined}
      >
        <button className="x" ref={closeRef} aria-label="Close" onClick={closeVertical}>
          ×
        </button>
        {v && (
          <>
            {v.key !== "nawa" && (
              <div className="art-slot">
                <Art k={v.key} />
              </div>
            )}
            <span className="mono" style={{ opacity: 0.7 }}>
              {v.kind}
            </span>
            <h3 id="d-title">
              {v.key === "nawa" ? (
                <span className="nawa-mark">
                 <Image className="" src="/images/NAWA.png" alt="" width={252} height={202} style={{ height: 102, width: "auto"}} />
                </span>
              ) : (
                v.name
              )}
            </h3>
            <p className="tag">{v.tagline}</p>
            <div style={{ display: "grid", gap: 14 }}>
              {v.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <dl>
              {v.facts.map(([k, val]) => (
                <div key={k} style={{ display: "contents" }}>
                  <dt>{k}</dt>
                  <dd>{val}</dd>
                </div>
              ))}
            </dl>
            <div className="acts">
              {v.actions.map((a, i) => (
                <a
                  key={a.label}
                  className={`btn${i ? " ghost" : ""}`}
                  href={a.href}
                  {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={a.href.startsWith("#") ? closeVertical : undefined}
                >
                  {a.label}
                </a>
              ))}
            </div>
          </>
        )}
      </aside>
    </>
  );
}
