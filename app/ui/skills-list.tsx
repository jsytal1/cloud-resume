import { fetchSkills } from "@/app/lib/data";
import { Fragment } from "react";
import Markdown from "react-markdown";

export default function Section() {
  const skills = fetchSkills();

  return (
    <ul className="mt-2 print:mt-0 mb-2">
      {skills.map((skill) => {
        return (
          <li className="print:leading-5 -indent-5 pl-5" key={skill.category}>
            <strong className="text-sm mr-1">{skill.category}: </strong>
            {skill.keywords.map((keyword, idx) => (
              <Fragment key={keyword}>
                {!!idx && <span> · </span>}
                <span className="whitespace-nowrap"><Markdown disallowedElements={['p']} unwrapDisallowed>{keyword}</Markdown></span>
              </Fragment>
            ))}
          </li>
        );
      })}
    </ul>
  );
}
