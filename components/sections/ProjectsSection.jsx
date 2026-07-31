"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const projectCount = projects.length;

  return (
    <Section
      id="projects"
      className="scroll-mt-4 py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-8 md:mb-10 flex flex-col gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-2 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
            {t("all_projects_title")}
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-lg mx-auto md:mx-0">
            {t("all_projects_desc")}
          </p>
        </div>

        <Card className="mx-auto w-full max-w-xs rounded-3xl px-5 py-4 shadow-2xl shadow-white/5 md:mx-0 md:w-auto md:min-w-44 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
            {t("total_projects")}
          </p>
          <p className="mt-2 text-4xl font-black text-white md:text-5xl">
            {String(projectCount).padStart(2, '0')}
          </p>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              project={project}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
