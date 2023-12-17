import { fetchExperiences } from "@/app/lib/data";

import Time from "@/app/ui/time";

export default function Section() {
  const experiences = fetchExperiences();

  return (
    <ul>
      {experiences.map((experience) => {
        return (
          <li key={`${experience.position}-${experience.organization}`}>
            <h3>{experience.position}</h3>
            <p>
              <i>{experience.organization}</i>
            </p>
            <p>
              <Time date={experience.startDate} />
              <span> - </span>
              <Time date={experience.endDate} />
            </p>
            <ul>
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
