import { fetchEducation } from "@/app/lib/data";

import Time from "@/app/ui/time";

export default function Section() {
  const educations = fetchEducation();

  return (
    <ul>
      {educations.map((education) => {
        return (
          <li
            className="mb-5 break-inside-avoid"
            key={`${education.level}-${education.organization}`}
          >
            <h3 className="text-lg font-bold text-black">
              {education.level} - {education.area_of_study}
            </h3>
            <p className="text-md">
              <i>{education.organization}</i>
            </p>
            <p className="text-gray-800 text-sm">
              <Time date={education.startDate} />
              <span> - </span>
              <Time date={education.endDate} />
            </p>
            <ul className="ml-5 list-disc list-outside">
              <li className="text-md">{education.gpa} GPA</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
