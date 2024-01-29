import { fetchExperiences } from "@/app/lib/data";

import Time from "@/app/ui/time";

export default function Section() {
  const experiences = fetchExperiences();

  return (
    <ul>
      {experiences.map((experience) => {
        return (
          <li
            className="mb-5 print:mb-3 break-inside-avoid"
            key={`${experience.position}-${experience.organization}`}
          >
            <div className="flex justify-between items-baseline">
              <div className="text-lg font-bold text-black flex-1">
                <h3>{experience.position}</h3>
              </div>
              <div className="text-lg whitespace-nowrap flex-1 flex justify-center">
                <strong>{experience.organization}</strong>
              </div>
              <div className="text-lg font-bold text-right flex-1">
                <Time date={experience.startDate} />
                <span> - </span>
                <Time date={experience.endDate} />
              </div>
            </div>
            <div className="overflow-auto">
              <div className="flex justify-center leading-tight">
                <span>{experience.location}</span>
              </div>
            </div>
            <div>
              <ul className="ml-5 list-disc list-outside basis-1/1">
                {experience.highlights.map((highlight, idx) => {
                  return <li key={idx}>{highlight}</li>;
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
