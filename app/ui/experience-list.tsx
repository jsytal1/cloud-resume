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
            <h3 className="text-xl font-bold text-black">
              {experience.position}
            </h3>
            <p className="text-lg">
              <i>{experience.organization}</i>
            </p>
            <p className="text-gray-800 text-sm">
              <Time date={experience.startDate} />
              <span> - </span>
              <Time date={experience.endDate} />
            </p>
            <ul className="ml-5 list-disc list-outside">
              {experience.highlights.map((highlight, idx) => {
                return <li key={idx}>{highlight}</li>;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
