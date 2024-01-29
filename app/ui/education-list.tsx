import { fetchEducation } from "@/app/lib/data";

import Time from "@/app/ui/time";

export default function Section() {
  const educations = fetchEducation();

  return (
    <ul>
      {educations.map((education) => {
        return (
          <li
            className="mb-5 print:mb-3 break-inside-avoid"
            key={`${education.level}-${education.organization}`}
          >
            <div className="flex justify-between items-baseline">
              <div className="font-bold text-black">
                <h3 className="text-base font-bold text-black">
                  {education.level} - {education.area_of_study}
                </h3>
              </div>
              <div className="text-base font-bold text-right">
                <Time date={education.startDate} />
                <span> - </span>
                <Time date={education.endDate} />
              </div>
            </div>
            <p className="text-base">
              <i>{education.organization}</i>
            </p>
            <ul className="ml-5 list-disc list-outside">
              <li className="text-base">{education.gpa} GPA</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
