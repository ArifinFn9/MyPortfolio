"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import MiniCard from "@/components/ui/MiniCard";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown } from "lucide-react";
import {
  TrendingUp,
  Calculator,
  Eraser,
  Users,
  BrainCircuit,
  Sparkles,
  Clock,
  MessageSquare,
  PieChart,
} from "lucide-react";

import {
  ExcelIcon,
  PowerBIIcon,
  PowerQueryIcon,
  PythonIcon,
  GoogleSheetsIcon,
  CanvaIcon,
  WordIcon,
  PowerPointIcon,
  GoogleFormsIcon,
  GoogleWorkspaceIcon,
} from "@/components/icons/TechIcons";

import { revealVariants, getRevealTransition, revealViewport } from "@/lib/motion";

export default function SkillsSection({ showArcade = false }) {
  const t = useTranslations("skills");
  const [isArcadeOpen, setIsArcadeOpen] = useState(false);

  const arcadeBadges = [
    {
      id: "level1",
      img: "https://cdn.qwiklabs.com/X2exCVJa0%2B6pcTZJtq8ScpOpU1FtZc7e%2B%2FujEwZ2bHI%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18253251",
      alt: t("arcade.badges.level1"),
    },
    {
      id: "level2",
      img: "https://cdn.qwiklabs.com/EdapQ6bVK7EJA%2BclqjUA4ocs%2BeJewTfBxqWS%2FbHnWn0%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18299773",
      alt: t("arcade.badges.level2"),
    },
    {
      id: "level3",
      img: "https://cdn.qwiklabs.com/6DPuegr7C1MTd7SknOvXivh1MEpVC1gyLFRJbSn8BZ0%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18319757",
      alt: t("arcade.badges.level3"),
    },
    {
      id: "trivia1",
      img: "https://cdn.qwiklabs.com/EdZaBB2mo3K%2Fgeqeq17gFdxla0tbc%2B%2Fg8kLMW626ODs%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18274308",
      alt: t("arcade.badges.trivia1"),
    },
    {
      id: "trivia2",
      img: "https://cdn.qwiklabs.com/1%2BBao%2FFBuAyakkobTCGRhkqdpLMmkOw4xvsG%2F617cxM%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18275219",
      alt: t("arcade.badges.trivia2"),
    },
    {
      id: "trivia3",
      img: "https://cdn.qwiklabs.com/YYKpzMuUyKgtCrf68HQUfZqkcpOA0lthRvk1WGAQ%2FVA%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18319757",
      alt: t("arcade.badges.trivia3"),
    },
    {
      id: "trivia4",
      img: "https://cdn.qwiklabs.com/EVhPuKXXqq0Ia%2FktHB9KZ51stuSnvWSk697I6%2Fh7ULs%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18517075",
      alt: t("arcade.badges.trivia4"),
    },
    {
      id: "basecamp",
      img: "https://cdn.qwiklabs.com/NaV2sOsKbQP4RSGsk8XrnEhI3NQdQZQFnoj%2F2yrK%2BIs%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18734046",
      alt: t("arcade.badges.basecamp"),
    },
    {
      id: "scribble",
      img: "https://cdn.qwiklabs.com/nx3MSjoNE2vjAhLTwswmsBEI4ILSFljtg6JBBSBelhE%3D",
      url: "https://www.skills.google/public_profiles/9a7eceec-958a-4bd5-8822-1e0011309694/badges/18348588",
      alt: t("arcade.badges.scribble"),
    },
  ];

  const skillCategories = [
    {
      key: "analytics",
      titleKey: "categories.analytics",
      color: "text-purple-400",
      skills: [
        { key: "Microsoft Excel", icon: ExcelIcon, color: "text-green-500" },
        { key: "Power BI", icon: PowerBIIcon, color: "text-yellow-500" },
        { key: "Power Query", icon: PowerQueryIcon, color: "text-teal-400" },
        { key: "Python", icon: PythonIcon, color: "text-sky-400" },
        { key: "Google Sheets", icon: GoogleSheetsIcon, color: "text-green-400" },
        { key: "Data Cleaning", icon: Eraser, color: "text-cyan-400" },
        { key: "budgetingControl", icon: PieChart, color: "text-amber-400", isKey: true },
        { key: "dataVisualization", icon: TrendingUp, color: "text-orange-400", isKey: true },
        { key: "financialReporting", icon: Calculator, color: "text-emerald-400", isKey: true },
      ],
    },
    {
      key: "productivity",
      titleKey: "categories.productivity",
      color: "text-blue-400",
      skills: [
        { key: "Microsoft Word", icon: WordIcon, color: "text-blue-500" },
        { key: "Google Forms", icon: GoogleFormsIcon, color: "text-purple-400" },
        { key: "Microsoft PowerPoint", icon: PowerPointIcon, color: "text-red-400" },
        { key: "Google Workspace", icon: GoogleWorkspaceIcon, color: "text-blue-400" },
        { key: "Canva", icon: CanvaIcon, color: "text-pink-400" },
      ],
    },
    {
      key: "softSkills",
      titleKey: "categories.softSkills",
      color: "text-emerald-400",
      skills: [
        { key: "adaptability", icon: Sparkles, color: "text-indigo-400", isKey: true },
        { key: "teamwork", icon: Users, color: "text-emerald-400", isKey: true },
        { key: "communication", icon: MessageSquare, color: "text-sky-400", isKey: true },
        { key: "timeManagement", icon: Clock, color: "text-cyan-400", isKey: true },
        { key: "problemSolving", icon: BrainCircuit, color: "text-amber-400", isKey: true },
      ],
    },
  ];

  return (
    <Section id="skills" className="scroll-mt-4 py-12 md:py-20 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <SectionHeader
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* 3-Column Balanced Layout with Organic Wave Blur-Reveal Floating Chips */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.key}
            initial={revealVariants.initial}
            whileInView={revealVariants.whileInView}
            transition={getRevealTransition(catIdx * 0.12)}
            viewport={revealViewport}
            className="flex flex-col h-full"
          >
            <Card className="!p-6 md:!p-7 rounded-3xl relative overflow-hidden h-full flex flex-col justify-between group">
              <div>
                {/* Category Sub-Header */}
                <div className="flex items-center justify-between gap-2.5 mb-5 pb-3 border-b border-white/10 min-h-[1rem] md:min-h-[3.5rem]">
                  <h3 className="text-base md:text-lg font-bold text-white tracking-wide flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${cat.color.replace("text-", "bg-")}`} />
                    <span>{t(cat.titleKey)}</span>
                  </h3>
                </div>

                {/* Skills Grid for this Category */}
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={revealViewport}
                  variants={{
                    initial: {},
                    animate: {
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3"
                >
                  {cat.skills.map((tech) => (
                    <motion.div
                      key={tech.key}
                      variants={{
                        initial: { opacity: 0, y: 12 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                        },
                      }}
                    >
                      <MiniCard
                        interactive={false}
                        className="flex items-center gap-2.5 !px-3 !py-2.5 cursor-default h-full"
                      >
                        <tech.icon
                          className={`w-4 h-4 ${tech.color} group-hover/mini:scale-115 transition-transform shrink-0`}
                        />
                        <span className="text-xs md:text-xs font-semibold text-zinc-300 group-hover/mini:text-white transition-colors leading-tight">
                          {tech.isKey ? t(`items.${tech.key}`) : tech.key}
                        </span>
                      </MiniCard>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Optional Google Arcade Badges Showcase */}
      {showArcade && (
        <>
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsArcadeOpen(!isArcadeOpen)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white font-semibold text-sm transition-all duration-300 cursor-pointer shadow-md select-none w-fit"
            >
              <span>
                {isArcadeOpen
                  ? t("arcade.hideBtn")
                  : t("arcade.showBtn")}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isArcadeOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <AnimatePresence>
            {isArcadeOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-8"
              >
                <div className="flex flex-wrap justify-center gap-5 pb-4">
                  {arcadeBadges.map((badge, idx) => (
                    <motion.a
                      key={badge.id}
                      href={badge.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.04, duration: 0.3 }}
                      title={badge.alt}
                      className="group/badge block"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 group-hover/badge:border-white/40 group-hover/badge:shadow-[0_0_18px_rgba(255,255,255,0.15)] group-hover/badge:scale-110 transition-all duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={badge.img}
                          alt={badge.alt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </Section>
  );
}
