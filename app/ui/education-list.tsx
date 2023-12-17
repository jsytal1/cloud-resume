import { fetchEducation } from "@/app/lib/data";

import Time from "@/app/ui/time";

export default function Section() {
  const educations = fetchEducation();

  return (
    <ul>
      {educations.map((education) => {
        return (
          <li key={`${education.level}-${education.organization}`}>
            <h3>
              {education.level} - {education.area_of_study}
            </h3>
            <i>{education.organization}</i>
            <p>
              <Time date={education.startDate} />
              <span> - </span>
              <Time date={education.endDate} />
            </p>
            <ul>
              <li>{education.gpa} GPA</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
