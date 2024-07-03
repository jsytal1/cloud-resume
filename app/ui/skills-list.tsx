import { fetchSkills } from "@/app/lib/data";
import { Fragment } from "react";

export default function Section() {
  const skills = fetchSkills();

  return (
    <ul className="mt-2 print:mt-0 mb-2">
      {skills.map((skill) => {
        return (
          <li className="print:leading-5" key={skill.category}>
            <strong>{skill.category}: </strong>
            {skill.keywords.map((keyword, idx) => (
              <Fragment key={keyword}>
                {!!idx && <span> · </span>}
                <span className="whitespace-nowrap">{keyword}</span>
              </Fragment>
            ))}
          </li>
        );
      })}
    </ul>
  );
}
