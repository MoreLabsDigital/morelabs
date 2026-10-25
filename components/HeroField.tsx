"use client";

import { useEffect, useRef } from "react";

// Brand colours the signals can take: white, MORE100 lime, Broad Street green, Nawa! yellow, light indigo.
const COLOURS = ["255,255,255", "215,255,107", "46,148,102", "255,198,26", "123,115,255"];

type Route = { P: [number, number][]; seg: number[]; L: number; c: number; t: number; v: number; lit: boolean };

/** A street grid behind the hero headline, with signals travelling along its routes. */
export function HeroField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const cx = cv.getContext("2d");
    if (!cx) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0,
      H = 0,
      G = 56,
      routes: Route[] = [],
      run = true,
      raf = 0;
    const pick = () => (Math.random() < 0.55 ? 0 : 1 + Math.floor(Math.random() * 4));

    const build = () => {
      const r = cv.getBoundingClientRect();
      const d = Math.min(2, devicePixelRatio || 1);
      W = r.width;
      H = r.height;
      cv.width = W * d;
      cv.height = H * d;
      cx.setTransform(d, 0, 0, d, 0, 0);
      G = W < 700 ? 40 : 56;
      const cols = Math.ceil(W / G) + 1,
        rows = Math.ceil(H / G) + 1;
      routes = [];
      const n = Math.round((cols * rows) / 9);
      for (let k = 0; k < n; k++) {
        let x = Math.floor(Math.random() * cols),
          y = Math.floor(Math.random() * rows),
          dir = Math.floor(Math.random() * 4);
        const pts: [number, number][] = [[x, y]];
        const len = 5 + Math.floor(Math.random() * 12);
        for (let i = 0; i < len; i++) {
          if (Math.random() < 0.32) dir = (dir + (Math.random() < 0.5 ? 1 : 3)) % 4;
          x += [1, 0, -1, 0][dir];
          y += [0, 1, 0, -1][dir];
          if (x < 0 || y < 0 || x > cols || y > rows) break;
          pts.push([x, y]);
        }
        if (pts.length < 3) continue;
        const P = pts.map(([a, b]) => [a * G, b * G] as [number, number]);
        const seg: number[] = [];
        let L = 0;
        for (let i = 1; i < P.length; i++) {
          const l = Math.hypot(P[i][0] - P[i - 1][0], P[i][1] - P[i - 1][1]);
          seg.push(l);
          L += l;
        }
        routes.push({ P, seg, L, c: pick(), t: Math.random() * L, v: (0.35 + Math.random() * 0.9) * (G / 56), lit: Math.random() < 0.5 });
      }
    };

    const at = (r: Route, d: number): [number, number] => {
      d = ((d % r.L) + r.L) % r.L;
      for (let i = 0; i < r.seg.length; i++) {
        if (d <= r.seg[i]) {
          const a = r.P[i],
            b = r.P[i + 1],
            k = d / r.seg[i];
          return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
        }
        d -= r.seg[i];
      }
      return r.P[r.P.length - 1];
    };

    const frame = () => {
      cx.clearRect(0, 0, W, H);
      cx.fillStyle = "rgba(255,255,255,.08)";
      for (let x = 0; x <= W; x += G) for (let y = 0; y <= H; y += G) cx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
      cx.lineWidth = 1;
      cx.strokeStyle = "rgba(255,255,255,.055)";
      for (const r of routes) {
        cx.beginPath();
        cx.moveTo(r.P[0][0], r.P[0][1]);
        for (const p of r.P) cx.lineTo(p[0], p[1]);
        cx.stroke();
      }
      for (const r of routes) {
        if (!r.lit) continue;
        r.t += r.v;
        const col = COLOURS[r.c],
          trail = Math.min(r.L * 0.6, G * 2.2),
          steps = 14;
        cx.lineWidth = 1.6;
        for (let i = 0; i < steps; i++) {
          const p = at(r, r.t - (trail * i) / steps),
            q = at(r, r.t - (trail * (i + 1)) / steps);
          cx.strokeStyle = `rgba(${col},${0.75 * (1 - i / steps)})`;
          cx.beginPath();
          cx.moveTo(p[0], p[1]);
          cx.lineTo(q[0], q[1]);
          cx.stroke();
        }
        const h = at(r, r.t);
        cx.fillStyle = `rgba(${col},1)`;
        cx.beginPath();
        cx.arc(h[0], h[1], 2.2, 0, 7);
        cx.fill();
        if (r.t % r.L < r.v) r.c = pick();
      }
      if (run && !reduce) raf = requestAnimationFrame(frame);
    };

    build();
    frame();

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        build();
        if (reduce || !run) frame();
      }, 150);
    };
    addEventListener("resize", onResize);

    const io = new IntersectionObserver((entries) => {
      const visible = entries[0].isIntersecting;
      if (visible && !run) {
        run = true;
        cancelAnimationFrame(raf);
        frame();
      } else if (!visible) run = false;
    });
    io.observe(cv);

    return () => {
      run = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas id="field" ref={ref} aria-hidden="true" />;
}
