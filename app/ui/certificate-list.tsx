import { fetchCertificates } from "@/app/lib/data";
import Image from "next/image";

import Time from "@/app/ui/time";

export default function Section() {
  const certificates = fetchCertificates();

  return (
    <ul className="mt-2 print:mt-1">
      {certificates.map((certificate) => {
        return (
          <li
            className="mb-3 print:mb-1 break-inside-avoid"
            key={certificate.name}
          >
            <div className="flex gap-3">
              <h3 className="font-bold text-base">{certificate.name}</h3>
              <a
                className="text-indigo-900"
                target="_blank"
                rel="noopener noreferrer"
                href={certificate.url}
              >
                {certificate.validation_number}
              </a>
              <div className="text-base font-bold text-right flex-1">
                <Time date={certificate.date} />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
