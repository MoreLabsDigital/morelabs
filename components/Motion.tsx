"use client";

import { useEffect } from "react";

/**
 * Page-level motion that does not belong to one component:
 * - `.rv` elements ease in the first time they scroll into view (they are visible before that).
 * - `[data-count]` numbers count up once.
 * - the coloured progress bar under the nav follows the scroll position.
 */
export function Motion() {
  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.15 },
    );
    document.querySelectorAll(".rv").forEach((el) => reveal.observe(el));

    const counter = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          counter.unobserve(e.target);
          if (reduce) return;
          const el = e.target as HTMLElement;
          const to = Number(el.dataset.count);
          const suffix = el.dataset.suffix ?? "";
          const t0 = performance.now();
          const step = (t: number) => {
            const k = Math.min(1, (t - t0) / 1400);
            el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suffix;
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }),
      { threshold: 0.6 },
    );
    document.querySelectorAll("[data-count]").forEach((el) => counter.observe(el));

    const bar = document.getElementById("progress");
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar) bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      reveal.disconnect();
      counter.disconnect();
      removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div className="progress" id="progress" aria-hidden="true" />;
}
