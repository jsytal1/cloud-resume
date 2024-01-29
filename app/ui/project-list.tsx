import { fetchProjects } from "@/app/lib/data";

import Time from "@/app/ui/time";

export default function Section() {
  const projects = fetchProjects();

  return (
    <ul>
      {projects.map((item) => {
        return (
          <li className="mb-5 print:mb-3 break-inside-avoid" key={item.name}>
            <div className="flex justify-between items-baseline w-full">
              <h3 className="text-l font-bold text-black">{item.name}</h3>
              <p className="text-base text-right font-bold">
                <Time date={item.date}></Time>
              </p>
            </div>
            <ul className="ml-5 list-disc list-outside">
              {item.highlights.map((highlight, idx) => {
                return (
                  <li key={idx}>
                    {highlight}
                    {idx === 0 && item.url && " - "}
                    {idx === 0 && item.url && (
                      <a
                        className="text-indigo-900"
                        href={`${item.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.url}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}
