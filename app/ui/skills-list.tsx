import { fetchSkills } from "@/app/lib/data";

export default function Section() {
  const skills = fetchSkills();

  return (
    <ul>
      {skills.map((skill) => {
        return (
          <li key={skill.category}>
            <strong>{skill.category}: </strong>
            {skill.keywords.map((keyword, idx) => (
              <>
                {!!idx && <span> · </span>}
                <span key={keyword}>{keyword}</span>
              </>
            ))}
          </li>
        );
      })}
    </ul>
  );
}
