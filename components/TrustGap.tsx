import { TRUST_STATS } from "@/lib/content";

export function TrustGap() {
  return (
    <section className="gap" aria-labelledby="gap-h">
      <div className="wrap">
        <div className="eyebrow">The trust gap</div>
        <p className="gap-big rv" aria-hidden="true">
          $4.7B
        </p>
        <div className="gap-row">
          <div>
            <h2 className="h2" id="gap-h" style={{ fontSize: "clamp(28px,3.4vw,46px)" }}>
              Spent every year trying to reach young Africans. <span className="thin">Most of it misses.</span>
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Campaigns written far from the audience, trends chased months late, success measured in impressions.
              Young people notice, and they tune out.
            </p>
          </div>
          <div>
            <div className="gap-stats">
              {TRUST_STATS.map((s) => (
                <div className="gs" key={s.value}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
            <p className="fine">Figures from More Labs market research.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
