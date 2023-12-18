import { fetchProjects } from "@/app/lib/data";

export default function Section() {
  const projects = fetchProjects();

  return (
    <ul>
      {projects.map((item) => {
        return (
          <li className="mb-5 break-inside-avoid" key={item.name}>
            <h3 className="text-xl font-bold text-black">{item.name}</h3>
            <p className="text-lg">
              <a
                className="text-indigo-900"
                href={`${item.url}`}
                target="_blank"
              >
                {item.url}
              </a>
            </p>
            <ul className="ml-5 list-disc list-outside">
              {item.highlights.map((highlight, idx) => {
                return <li key={idx}>{highlight}</li>;
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
