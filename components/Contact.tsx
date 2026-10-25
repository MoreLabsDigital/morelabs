"use client";

import { useMemo, useState } from "react";
import { useUI } from "./UIProvider";
import { BRIEF_CHIPS, EMAIL } from "@/lib/content";

export function Contact() {
  const { copy } = useUI();
  const [picked, setPicked] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [msg, setMsg] = useState("");

  const brief = useMemo(() => {
    const chips = BRIEF_CHIPS.filter((c) => picked.includes(c.label));
    const editorialOnly = chips.length > 0 && chips.every((c) => c.to === "editorial");
    const to = editorialOnly ? EMAIL.editorial : EMAIL.agency;
    const list = chips.map((c) => c.label).join(", ");
    const subject = (list || "New project") + (org.trim() ? ` · ${org.trim()}` : "");
    const body = [
      "Hello More Labs,",
      "",
      msg.trim() || "[Tell us about the project]",
      "",
      `Interested in: ${list || "Not sure yet"}`,
      "",
      name.trim() ? `From: ${name.trim()}${org.trim() ? `, ${org.trim()}` : ""}` : "",
    ].join("\n");
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { to, subject, body, href };
  }, [picked, name, org, msg]);

  const toggle = (label: string) =>
    setPicked((p) => (p.includes(label) ? p.filter((x) => x !== label) : [...p, label]));

  return (
    <section className="contact paper" id="contact" aria-labelledby="c-h">
      <div className="wrap">
        <div className="eyebrow">Contact</div>
        <h2 className="c-big rv" id="c-h">
          Let’s <span className="thin">talk.</span>
        </h2>

        <div className="c-grid">
          <div className="mail dark">
            <div>
              <span className="lbl">Agency &amp; brand work</span>
              <h3>Campaigns, strategy, production</h3>
              <p>If you’re serious about connecting with young Africans, tell us what you’re working on.</p>
            </div>
            <div className="addr">
              <a href={`mailto:${EMAIL.agency}`}>{EMAIL.agency}</a>
              <button className="copy" onClick={() => copy(EMAIL.agency, `Copied ${EMAIL.agency}`)}>
                Copy
              </button>
            </div>
          </div>
          <div className="mail">
            <div>
              <span className="lbl">Press &amp; MoreBranches</span>
              <h3>Editorial, press and partnerships</h3>
              <p>Story tips, interview requests, MORE100 nominations and anything for the MoreBranches newsroom.</p>
            </div>
            <div className="addr">
              <a href={`mailto:${EMAIL.editorial}`}>{EMAIL.editorial}</a>
              <button className="copy" onClick={() => copy(EMAIL.editorial, `Copied ${EMAIL.editorial}`)}>
                Copy
              </button>
            </div>
          </div>
        </div>

        <form className="brief" noValidate onSubmit={(e) => e.preventDefault()}>
          <div>
            <h3>Build a quick brief</h3>
            <p className="sub">Pick what you need and add a few lines. We’ll put it together as an email to the right inbox.</p>
            <div className="chips" role="group" aria-label="What do you need?">
              {BRIEF_CHIPS.map((c) => (
                <button
                  type="button"
                  key={c.label}
                  className="chip"
                  aria-pressed={picked.includes(c.label)}
                  onClick={() => toggle(c.label)}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
          <div className="fields">
            <label htmlFor="f-name">
              Your name
              <input id="f-name" name="name" autoComplete="name" placeholder="Ada Okafor" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor="f-org">
              Brand or company
              <input id="f-org" name="org" autoComplete="organization" placeholder="Company name" value={org} onChange={(e) => setOrg(e.target.value)} />
            </label>
            <label htmlFor="f-msg">
              What are you working on?
              <textarea id="f-msg" name="msg" placeholder="Timeline, audience, budget range, anything useful." value={msg} onChange={(e) => setMsg(e.target.value)} />
            </label>
            <div className="brief-acts">
              <a className="btn" href={brief.href}>
                Open in email <span className="ar">→</span>
              </a>
              <button
                type="button"
                className="btn ghost"
                onClick={() =>
                  copy(`To: ${brief.to}\nSubject: ${brief.subject}\n\n${brief.body}`, `Brief copied. Paste it into an email to ${brief.to}`)
                }
              >
                Copy brief
              </button>
              <span className="status">Goes to {brief.to}</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
