import { fetchExperiences } from "@/app/lib/data";

import Time from "@/app/ui/time";

export default function Section() {
  const experiences = fetchExperiences();

  return (
    <ul>
      {experiences.map((experience) => {
        return (
          <li
            className="mb-5 break-inside-avoid"
            key={`${experience.position}-${experience.organization}`}
          >
            <div className="flex justify-between items-baseline">
              <div className="text-l font-bold text-black">
                <h3>{experience.position}</h3>
              </div>
              <div className="text-l font-bold text-right">
                <Time date={experience.startDate} />
                <span> - </span>
                <Time date={experience.endDate} />
              </div>
            </div>
            <div className="overflow-auto">
              <div className="text-l basis-1/2 whitespace-nowrap float-left">
                <i>{experience.organization}</i>
              </div>
              <div className="basis-1/2 text-right whitespace-nowrap float-right">
                <span>{experience.location}</span>
              </div>
            </div>
            <div>
              <ul className="ml-5 list-disc list-outside basis-1/1 mt-2">
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
