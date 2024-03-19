"use client";

import { fetchBasics, fetchProfiles } from "@/app/lib/data";
import { stripPhonePunctuation } from "@/app/lib/utils";

import Section from "@/app/ui/section";
import { Fragment, useEffect, useState } from "react";

export default function Header() {
  const default_basics = fetchBasics();
  const profiles = fetchProfiles();
  const [overrides, setOverrides] = useState({});
  const basics = { ...default_basics, ...overrides };

  useEffect(() => {
    // Perform localStorage action
    const basicsJSON = localStorage.getItem("basics") ?? "{}";
    let basics;
    try {
      basics = JSON.parse(basicsJSON);
    } catch (e) {
      basics = {};
    }
    setOverrides(basics);
  }, []);

  const tel_phone = basics?.phone ? stripPhonePunctuation(basics.phone) : "";

  return (
    <header className="flex justify-center items-center flex-col print:flex-row print:justify-center print:mb-0">
      <h1 className="mb-1 text-4xl font-bold text-black print:order-1 print:flex-1 print:text-center">
        {basics.name}
      </h1>

      <address
        className={`not-italic text-sm flex flex-col justify-center items-center print:order-0 print:flex-1 print:items-start`}
      >
        {basics.email && basics.phone && (
          <p className="print:flex print:flex-col">
            <span>{basics.location.city}</span>
            <span className="mx-1 print:hidden"> · </span>
            <a
              href={`mailto:${basics.email}`}
              className="text-indigo-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {basics.email}
            </a>
            <span className="mx-1 print:hidden"> · </span>
            <a className="text-indigo-900" href={`tel:${tel_phone}`}>
              {basics.phone}
            </a>
          </p>
        )}
      </address>
      <div className="print:order-2 print:flex-1 text-sm">
        <p className="print:flex print:flex-col print:items-end">
          {profiles.map((profile, idx) => {
            const trimmedUrl = profile.url.replace(/^https:\/\/(www\.)?/, "");
            return (
              <Fragment key={profile.name}>
                {idx > 0 && <span className="mx-1 print:hidden"> · </span>}
                <a
                  className="text-indigo-900"
                  key={profile.name}
                  href={`${profile.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {trimmedUrl}
                </a>
              </Fragment>
            );
          })}
        </p>
      </div>
      {basics.summary && (
        <Section name="Summary">
          <p>{basics.summary}</p>
        </Section>
      )}
    </header>
  );
}
