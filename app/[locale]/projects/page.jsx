"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { revealVariants, getRevealTransition, revealViewport } from "@/lib/motion";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const projectCount = projects.length.toString().padStart(2, "0");

  return (
    <main className="min-h-screen pt-12 md:pt-32 pb-20 px-6 relative overflow-hidden">
      <Section className="max-w-7xl mx-auto">
        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          transition={getRevealTransition()}
          viewport={revealViewport}
          className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="text-center md:text-left w-full">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              {t("all_projects_title")}
            </h1>
            <p className="text-gray-400 max-w-2xl text-lg mx-auto md:mx-0">
              {t("all_projects_desc")}
            </p>
          </div>

          <Card className="mx-auto w-full max-w-xs rounded-3xl px-5 py-4 shadow-2xl shadow-white/5 md:mx-0 md:w-auto md:min-w-44 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
              {t("total_projects")}
            </p>
            <p className="mt-2 text-4xl font-black text-white md:text-5xl">
              {projectCount}
            </p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={revealVariants.initial}
              whileInView={revealVariants.whileInView}
              transition={getRevealTransition(index * 0.08)}
              viewport={revealViewport}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
            >
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </div>
      </Section>
    </main>
  );
}
