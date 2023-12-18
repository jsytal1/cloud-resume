import { fetchCertificates } from "@/app/lib/data";
import Image from "next/image";

import Time from "@/app/ui/time";

export default function Section() {
  const certificates = fetchCertificates();

  return (
    <ul>
      {certificates.map((certificate) => {
        return (
          <li className="flex" key={certificate.name}>
            <a
              className="flex align-middle hover:bg-slate-100 space-x-2 p-2 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
              href={certificate.url}
            >
              <Image
                className="w-[60px] h-[60px]"
                width="60"
                height="60"
                alt={`Badge for ${certificate.name}`}
                src={certificate.image}
                unoptimized
              />
              <div>
                <h3 className="font-bold">{certificate.name}</h3>
                <p className="text-sm">
                  Issuer: <span>{certificate.issuer}</span>
                </p>
                <p className="text-gray-800 text-sm">
                  Issued: <Time date={certificate.date}></Time>
                </p>
              </div>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
