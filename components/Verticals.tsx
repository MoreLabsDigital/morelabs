import Image from "next/image";
import { PropertyLink } from "./PropertyLink";
import { NawaStack } from "./NawaStack";
import { MB_STATS } from "@/lib/content";

const Arrow = () => (
  <span className="open">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  </span>
);

export function Verticals() {
  return (
    <section className="verticals" id="verticals" aria-labelledby="v-h">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow">The More Labs universe</div>
            <h2 className="h2 rv" id="v-h">
              Four properties. <span className="thin">One house.</span>
            </h2>
          </div>
          <p className="lede">
            Each one serves a different part of young Nigerian life, from the news cycle to the dance floor. Together
            they give our brand work a reach and a read on culture that most agencies have to rent. Tap any card for the
            full picture.
          </p>
        </div>

        <div className="v-grid">
          <article className="v v-mb rv">
            <PropertyLink vertical="mb" className="v-hit" label="Open MoreBranches" />
            <div className="mb-l">
              <div className="top">
                <span className="kind">Flagship publication · Since 2017</span>
              </div>
              <Image
                className="mb-logo"
                src="/images/morebranches-wordmark.png"
                alt="MoreBranches"
                width={1335}
                height={382}
                sizes="(max-width: 860px) 90vw, 520px"
              />
              <div className="body">
                <p>
                  What young and smart Africans read. News and culture covered as one beat, in one direct voice, from
                  politics and public-interest reporting to music, fashion and nightlife.
                </p>
                <div className="tags">
                  <span>News</span>
                  <span>Culture</span>
                  <span>Politics</span>
                  <span>MoreBranchesTV</span>
                </div>
              </div>
            </div>
            <div className="mb-r">
              {MB_STATS.map((s) => (
                <div className="mbs" key={s.label}>
                  <b {...(s.count ? { "data-count": s.count, "data-suffix": s.suffix } : {})}>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
              <Arrow />
            </div>
          </article>

          <article className="v v-bs rv">
            <PropertyLink vertical="bs" className="v-hit" label="Open Broad Street" />
            <Image className="art" src="/images/broad-street-sign.png" alt="" width={276} height={222} sizes="100px" />
            <div className="top">
              <span className="kind">Nightlife</span>
              <Arrow />
            </div>
            <div className="body">
              <h3>Broad Street</h3>
              <p>Lagos after dark, on the record. Vox pops, scenes and subcultures from the city’s nightlife.</p>
              <div className="tags">
                <span>Vox pop</span>
                <span>Events</span>
                <span>Subcultures</span>
              </div>
            </div>
          </article>

          <article className="v v-100 rv">
            <PropertyLink vertical="m100" className="v-hit" label="Open MORE100" />
            <Image className="art" src="/images/more100.png" alt="" width={576} height={322} sizes="150px" />
            <div className="top">
              <span className="kind">Annual list</span>
              <Arrow />
            </div>
            <div className="body">
              <h3>MORE100</h3>
              <p>One hundred Nigerians who moved their fields forward this year, across ten sectors.</p>
              <div className="tags">
                <span>Class of 2026</span>
                <span>10 sectors</span>
                <span>Year 4</span>
              </div>
            </div>
          </article>

          <article className="v v-nawa rv">
            <PropertyLink vertical="nawa" className="v-hit" label="Open Nawa!" />
            <div className="top">
              <span className="kind">News product · In development</span>
              <Arrow />
            </div>
            <NawaStack />
            <div className="body">
              <Image className="art" src="/images/NAWA.png" alt="" width={276} height={222} sizes="100px" />
              <p>Nigerian news in the language you speak, sent to your WhatsApp.</p>
              <div className="tags">
                <span>Yorùbá</span>
                <span>Igbo</span>
                <span>Hausa</span>
                <span>Pidgin</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
