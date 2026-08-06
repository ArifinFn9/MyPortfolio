"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import {
  TrendingUp,
  Calculator,
  Eraser,
  Filter,
  ChevronDown,
  BrainCircuit,
  Sparkles,
  Clock,
  Users,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import MiniCard from "@/components/ui/MiniCard";
import SectionHeader from "@/components/ui/SectionHeader";

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

export default function SkillsPage() {
  const t = useTranslations("skills");
  const locale = useLocale();
  const [isArcadeOpen, setIsArcadeOpen] = useState(false);

  const getSkillName = (name) => {
    if (name === "Laporan Keuangan") {
      return t("items.financialReporting");
    }
    return name;
  };
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
  const categories = [
    {
      id: "finance",
      title: t("categories.finance"),
      color: "from-white/5 to-white/10",
      borderColor: "hover:border-white/20",
      skills: [
        { name: "Microsoft Excel", icon: ExcelIcon, color: "text-green-500" },
        { name: "Power BI", icon: PowerBIIcon, color: "text-yellow-500" },
        { name: "Google Sheets", icon: GoogleSheetsIcon, color: "text-green-400" },
        { name: "Laporan Keuangan", icon: Calculator, color: "text-emerald-400" },
        { name: "Data Visualization", icon: TrendingUp, color: "text-orange-400" },
      ],
    },
    {
      id: "data",
      title: t("categories.data"),
      color: "from-white/5 to-white/10",
      borderColor: "hover:border-white/20",
      skills: [
        { name: "Data Cleaning", icon: Eraser, color: "text-cyan-400" },
        { name: "Power Query", icon: PowerQueryIcon, color: "text-teal-400" },
        { name: "Python", icon: PythonIcon, color: "text-sky-400" },
      ],
    },
    {
      id: "productivity",
      title: t("categories.productivity"),
      color: "from-white/5 to-white/10",
      borderColor: "hover:border-white/20",
      skills: [
        { name: "Microsoft Word", icon: WordIcon, color: "text-blue-500" },
        { name: "Microsoft PowerPoint", icon: PowerPointIcon, color: "text-red-400" },
        { name: "Google Forms", icon: GoogleFormsIcon, color: "text-purple-400" },
        { name: "Google Workspace", icon: GoogleWorkspaceIcon, color: "text-blue-400" },
        { name: "Canva", icon: CanvaIcon, color: "text-pink-400" },
      ],
    },
    {
      id: "softSkills",
      title: t("categories.softSkills"),
      color: "from-white/5 to-white/10",
      borderColor: "hover:border-white/20",
      skills: [
        { name: t("items.problemSolving"), icon: BrainCircuit, color: "text-amber-400" },
        { name: t("items.adaptability"), icon: Sparkles, color: "text-indigo-400" },
        { name: t("items.timeManagement"), icon: Clock, color: "text-cyan-400" },
        { name: t("items.teamwork"), icon: Users, color: "text-emerald-400" },
        { name: t("items.communication"), icon: MessageSquare, color: "text-sky-400" },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-12 md:pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <Section className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionHeader
          title={t("title")}
          subtitle={t("pageDesc")}
        />

        {/* Skill Categories Grid */}
        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className={`p-8 glass-card relative overflow-hidden transition-colors duration-500 ${cat.borderColor} group`}>
                <div className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-br ${cat.color} rounded-full blur-3xl -z-10 opacity-30 group-hover:opacity-50 transition-opacity`} />

                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2.5">
                  {cat.title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {cat.skills.map((skill, skillIdx) => {
                    const Icon = skill.icon;
                    return (
                      <MiniCard
                        key={skill.name}
                        interactive={false}
                        className="flex items-center gap-2.5 !px-3.5 !py-3 cursor-default h-full group/mini"
                      >
                        <span
                          className={`${skill.color} group-hover/mini:scale-110 transition-transform shrink-0`}
                        >
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="text-gray-300 font-medium group-hover/mini:text-white transition-colors text-xs sm:text-sm leading-tight">
                          {getSkillName(skill.name)}
                        </span>
                      </MiniCard>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

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
      </Section>
    </main>
  );
}
