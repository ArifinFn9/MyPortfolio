"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { revealVariants, getRevealTransition, revealViewport } from "@/lib/motion";

import { useEffect } from "react";

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const projectCount = projects.length;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedPos = sessionStorage.getItem("home_scroll_pos");
    if (savedPos !== null) {
      const targetY = parseInt(savedPos, 10);
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: targetY, behavior: "instant" });

      const timer = setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
        sessionStorage.removeItem("home_scroll_pos");
      }, 150);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Section
      id="projects"
      className="scroll-mt-4 py-12 md:py-20 px-6 max-w-6xl mx-auto relative overflow-hidden"
    >
      <div className="mb-8 md:mb-10 flex flex-col gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          transition={getRevealTransition(0)}
          viewport={revealViewport}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-2 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-400">
            {t("all_projects_title")}
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm md:text-lg mx-auto md:mx-0">
            {t("all_projects_desc")}
          </p>
        </motion.div>

        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          transition={getRevealTransition(0.12)}
          viewport={revealViewport}
          className="mx-auto w-full max-w-xs md:mx-0 md:w-auto"
        >
          <Card className="rounded-3xl px-5 py-4 shadow-2xl shadow-white/5 md:min-w-44 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
              {t("total_projects")}
            </p>
            <motion.p
              initial={{ scale: 1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={revealViewport}
              className="mt-2 text-4xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-400 md:text-5xl"
            >
              {String(projectCount).padStart(2, '0')}
            </motion.p>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={revealVariants.initial}
            whileInView={revealVariants.whileInView}
            transition={getRevealTransition(index * 0.08)}
            viewport={revealViewport}
            whileHover={{ y: -10, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
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
