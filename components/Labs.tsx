import { SERVICES } from "@/lib/content";

export function Labs() {
  return (
    <section className="labs paper" id="labs" aria-labelledby="labs-h">
      <div className="wrap labs-grid">
        <div className="labs-left">
          <div className="eyebrow">The Labs · for brands</div>
          <h2 className="h2 rv" id="labs-h">
            Narrative engineering <span className="thin">for brands that want to</span> <em>matter.</em>
          </h2>
          <p className="lede">
            We work with brands that want a real relationship with young Africans. The same people who edit our
            publications plan your campaign, so the cultural read comes first and the deliverables follow from it.
          </p>
          <div>
            <a href="#contact" className="btn" style={{ background: "var(--ink)", color: "var(--paper)" }}>
              Brief us <span className="ar">→</span>
            </a>
          </div>
        </div>
        <div className="svc-list">
          {SERVICES.map((s, i) => (
            <details className="svc" key={s.title} open={i === 0}>
              <summary>
                <h3>{s.title}</h3>
                <span className="pm" aria-hidden="true" />
              </summary>
              <div className="ans">
                <p>{s.body}</p>
                <div className="best">
                  <b>Best for</b>
                  {s.best}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
