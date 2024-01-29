import { fetchCertificates } from "@/app/lib/data";
import Image from "next/image";

import Time from "@/app/ui/time";

export default function Section() {
  const certificates = fetchCertificates();

  return (
    <ul>
      {certificates.map((certificate) => {
        return (
          <li key={certificate.name}>
            <div className="flex justify-between items-baseline w-full">
              <h3 className="font-bold text-base">{certificate.name}</h3>
              <p className="text-base text-right font-bold">
                <Time date={certificate.date}></Time>
              </p>
            </div>
            <div>
              <p className="text-base">
                <i>{certificate.issuer}</i>
                <span className="mx-1"> - </span>
                <a
                  className="text-indigo-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={certificate.url}
                >
                  {certificate.validation_number}
                </a>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
