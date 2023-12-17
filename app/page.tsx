import Header from "@/app/ui/header";
import Section from "@/app/ui/section";
import SkillsList from "@/app/ui/skills-list";

export default function Home() {
  return (
    <main>
      <Header />
      <Section name="Skills">
        <SkillsList />
      </Section>
    </main>
  );
}
