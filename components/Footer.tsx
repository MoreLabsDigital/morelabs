"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PropertyLink } from "./PropertyLink";
import { EMAIL, SITE } from "@/lib/content";

function useLagosTime() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function Footer() {
  const time = useLagosTime();
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="f-top">
          <div>
            <h4>{SITE.legalName.replace(" Ltd", "")}</h4>
            <p>Media and narrative engineering from Lagos, Nigeria. Building the stories young Africans trust.</p>
          </div>
          <div>
            <h4>Properties</h4>
            <ul>
              <li>
                <a href="https://morebranches.com" target="_blank" rel="noopener noreferrer">
                  MoreBranches 
                </a>
              </li>
              <li>
                <PropertyLink vertical="bs" className="flink">Broad Street</PropertyLink>
              </li>
              <li>
                <PropertyLink vertical="m100" className="flink">MORE100</PropertyLink>
              </li>
              <li>
                <PropertyLink vertical="nawa" className="flink">Nawa!</PropertyLink>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#labs">The Labs</a></li>
              <li><a href="#story">Story</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4>Write to us</h4>
            <ul>
              <li><a href={`mailto:${EMAIL.agency}`}>hello@</a></li>
              <li><a href={`mailto:${EMAIL.editorial}`}>editorial@</a></li>
              <li><a href="#hero">Back to top ↑</a></li>
            </ul>
          </div>
        </div>
        <Image className="f-logo" src="/images/morelabs-wordmark.png" alt="More Labs" width={1194} height={154} sizes="100vw" />
        <div className="f-base">
          <span>© {year} {SITE.legalName}. All rights reserved.</span>
          <span>Lagos, Nigeria{time ? ` · ${time} WAT` : ""}</span>
        </div>
      </div>
    </footer>
  );
}
