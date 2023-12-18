import Header from "@/app/ui/header";
import Section from "@/app/ui/section";
import SkillsList from "@/app/ui/skills-list";
import CertificateList from "@/app/ui/certificate-list";
import ProjectList from "@/app/ui/project-list";
import ExperienceList from "@/app/ui/experience-list";
import EducationList from "@/app/ui/education-list";
import Footer from "@/app/ui/footer";

import { clsx } from "clsx";

export default function Home() {
  return (
    <>
      <main
        className={clsx({
          "bg-white": true,
          "mx-auto": true,
          "shadow-lg": true,
          "max-w-[8.5in]": true,
          "p-10": true,
          "transition-[margin-top]": true,
          "lg:min-h-[11in]": true,
          "lg:p-[1in]": true,
          "lg:my-[1in]": true,
          "print:m-0": true,
          "lg:print:my-0": true,
          "print:max-w-none": true,
          "print:shadow-none": true,
        })}
      >
        <Header />
        <Section name="Skills">
          <SkillsList />
        </Section>
        <Section name="Certificates">
          <CertificateList />
        </Section>
        <Section name="Projects">
          <ProjectList />
        </Section>
        <Section name="Experience">
          <ExperienceList />
        </Section>
        <Section name="Education">
          <EducationList />
        </Section>
      </main>
      <Footer />
    </>
  );
}
