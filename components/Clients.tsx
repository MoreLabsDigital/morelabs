import { CLIENT_NAMES } from "@/lib/content";
import { LOGOS, type BrandLogo } from "@/lib/logos";

const HOVER = ["var(--lime)", "var(--nw-yellow)", "var(--bs-sign)", "#7B73FF", "var(--nw-red)", "var(--lime)"];
const DOTS = ["var(--white)", "var(--bs-sign)", "var(--lime)", "var(--nw-yellow)", "var(--nw-red)", "#7B73FF"];

function Logo({ logo, i, hidden }: { logo: BrandLogo; i: number; hidden: boolean }) {
  // Equal optical area: wide wordmarks get shorter, square marks get taller.
  const h = Math.max(22, Math.min(58, Math.sqrt(3000 / logo.ratio)));
  return (
    <a
      className="logo"
      href={logo.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={logo.name}
      title={logo.name}
      tabIndex={hidden ? -1 : undefined}
      style={{ height: Math.round(h), ["--hc" as string]: HOVER[i % HOVER.length] }}
    >
      <svg viewBox={logo.viewBox} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        {logo.paths.map((p, j) => (
          <path key={j} d={p.d} className={p.knock ? "k" : undefined} />
        ))}
      </svg>
    </a>
  );
}

function LogoTrack({ hidden }: { hidden?: boolean }) {
  // The list is drawn twice inside each track so it fills very wide screens.
  const list = [...LOGOS, ...LOGOS];
  return (
    <div className="track" aria-hidden={hidden || undefined}>
      {list.map((l, i) => (
        <Logo key={i} logo={l} i={i} hidden={!!hidden || i >= LOGOS.length} />
      ))}
    </div>
  );
}

function NameTrack({ hidden }: { hidden?: boolean }) {
  const list = [...CLIENT_NAMES, ...CLIENT_NAMES];
  return (
    <div className="track" aria-hidden={hidden || undefined}>
      {list.map((n, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span className={`name ${n.style}`}>{n.name}</span>
          <span className="dot" style={{ ["--c" as string]: DOTS[i % DOTS.length] }} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export function Clients() {
  return (
    <section className="clients" aria-labelledby="clients-h">
      <div className="wrap clients-head">
        <div className="eyebrow" id="clients-h">
          Brands and agencies we’ve worked with
        </div>
        <p>Local giants and global names, across music, drinks, technology, media and development.</p>
      </div>
      <div className="marquee" style={{ ["--speed" as string]: "55s" }}>
        <LogoTrack />
        <LogoTrack hidden />
      </div>
      <div className="marquee rev" style={{ ["--speed" as string]: "70s" }}>
        <NameTrack />
        <NameTrack hidden />
      </div>
    </section>
  );
}
