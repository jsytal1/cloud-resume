import { fetchBasics, fetchProfiles } from "@/app/lib/data";
import { stripPhonePunctuation } from "@/app/lib/utils";

import Section from "@/app/ui/section";

export default function Header() {
  const basics = fetchBasics();
  const profiles = fetchProfiles();

  const tel_phone = basics?.phone ? stripPhonePunctuation(basics.phone) : "";

  return (
    <header className="flex justify-center items-center flex-col">
      <h1 className="mb-1 text-4xl font-bold text-black">{basics.name}</h1>

      <address
        className={`not-italic text-sm flex flex-col justify-center items-center `}
      >
        {basics.email && basics.phone && (
          <p>
            <a href={`mailto:${basics.email}`} target="_blank">
              {basics.email}
            </a>
            <span>·</span>
            <a href={`tel:${tel_phone}`}>{basics.phone}</a>
            <span>·</span>
            <span>{basics.location.city}</span>
          </p>
        )}
        <p>
          {profiles.map((profile, idx) => {
            const trimmedUrl = profile.url.replace(/^https:\/\/(www\.)?/, "");
            return (
              <>
                {idx > 0 && <span> · </span>}
                <a
                  className="text-indigo-900"
                  key={profile.name}
                  href={`${profile.url}`}
                  target="_blank"
                >
                  {trimmedUrl}
                </a>
              </>
            );
          })}
        </p>
      </address>
      <Section name="Summary">
        <p>{basics.summary}</p>
      </Section>
    </header>
  );
}
