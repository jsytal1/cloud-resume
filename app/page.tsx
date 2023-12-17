import Header from "@/app/ui/header";
import Section from "@/app/ui/section";
import SkillsList from "@/app/ui/skills-list";
import CertificateList from "@/app/ui/certificate-list";
import ExperienceList from "@/app/ui/experience-list";

export default function Home() {
  return (
    <main>
      <Header />
      <Section name="Skills">
        <SkillsList />
      </Section>
      <Section name="Certificates">
        <CertificateList />
      </Section>
      <Section name="Experience">
        <ExperienceList />
      </Section>
    </main>
  );
}
