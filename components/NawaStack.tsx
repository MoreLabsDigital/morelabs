"use client";

import { useEffect, useState } from "react";
import { NAWA_WORDS } from "@/lib/content";

/** The Nawa! brand device: the five words for news, stacked, one highlighted at a time. */
export function NawaStack() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % NAWA_WORDS.length), 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="nw-stack" aria-hidden="true">
      {NAWA_WORDS.map((w, n) => (
        <span key={w} className={n === i ? "on" : undefined}>
          {w}
        </span>
      ))}
    </span>
  );
}
