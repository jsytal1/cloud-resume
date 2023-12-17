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
            <a target="_blank" href={certificate.url}>
              <Image
                width="60"
                height="60"
                alt={`Badge for ${certificate.name}`}
                src={certificate.image}
                unoptimized
              />
              <div>
                <p>{certificate.name}</p>
                <p>
                  <i>
                    Issuer: <span>{certificate.issuer}</span>
                  </i>
                </p>
                <p>
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
