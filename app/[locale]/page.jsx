import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import SectionDivider from "@/components/ui/SectionDivider";
import { getPageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return getPageMetadata(locale, '', null);
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactSection />
    </main>
  );
}
