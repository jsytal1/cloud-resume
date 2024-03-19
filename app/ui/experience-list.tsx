import { fetchExperiences } from "@/app/lib/data";

import Time from "@/app/ui/time";

export default function Section() {
  const experiences = fetchExperiences();

  return (
    <ul className="mt-2 print:mt-0 print:mb-4">
      {experiences.map((experience) => {
        return (
          <li
            className="mb-5 print:mb-2 break-inside-avoid"
            key={`${experience.position}-${experience.organization}`}
          >
            <div className="flex justify-between items-baseline leading-5">
              <div className="text-base font-bold text-black flex-1">
                <h3>{experience.position}</h3>
              </div>
              <div className="text-base font-bold text-right flex-1">
                <Time date={experience.startDate} />
                <span> - </span>
                <Time date={experience.endDate} />
              </div>
            </div>
            <div className="flex justify-between items-baseline -mt-1">
              <div className="text-base whitespace-nowrap flex-1">
                <em>{experience.organization}</em>
              </div>
              <div className="flex justify-center leading-tight mr-1">
                <em>{experience.location}</em>
              </div>
            </div>
            <div>
              <ul className="ml-5 list-disc list-outside basis-1/1">
                {experience.highlights.map((highlight, idx) => {
                  return (
                    <li className="print:leading-5" key={idx}>
                      {highlight}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
