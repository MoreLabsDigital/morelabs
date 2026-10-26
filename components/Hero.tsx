import { HeroField } from "./HeroField";
import { PropertyLink } from "./PropertyLink";
import { VERTICALS, VERTICAL_ORDER } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" id="hero">
      {/* <HeroField /> */}
      <div className="wrap">
        <div className="hero-grid">
          <h1>
            <span className="row">
              <span>Narrative</span>
            </span>
            <span className="row">
              <span className="thin">infrastructure</span>
            </span>
            <span className="row">
              <span className="serif">for Africa’s next generation.</span>
            </span>
          </h1>
          <nav className="hero-index" aria-label="More Labs properties">
            <span className="mono idx-h">The house</span>
            {VERTICAL_ORDER.map((k) => (
              <PropertyLink key={k} vertical={k}>
                <img
                  className="brand-mark"
                  src={VERTICALS[k].image}
                  alt={VERTICALS[k].name}
                 
                />
                {VERTICALS[k].name}
                <em>{VERTICALS[k].short}</em>
              </PropertyLink>
            ))}
          </nav>
        </div>
        <div className="hero-low">
          <p className="tongue">
            We engineer narratives for audiences.{" "}
            <span className="dim">
              Media we own, products we build, and campaigns we run for the
              brands and institutions that need young Africans to listen.
            </span>
          </p>
          <div className="hero-cta">
            <p className="lede">
              More Labs is a media and narrative engineering company. Give us an
              audience you need to reach and a story that has to land, and we’ll
              build what carries it.
            </p>
            <div className="row">
              <a href="#contact" className="btn">
                Work with us <span className="ar">→</span>
              </a>
              <a href="#labs" className="btn ghost">
                What we do
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
