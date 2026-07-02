"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import {
  FileSpreadsheet,
  BarChart3,
  Globe,
  Palette,
  FileText,
  Presentation,
  ClipboardList,
  Database,
  TrendingUp,
  Calculator,
  Eraser,
  Filter,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

const ExcelIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M16.2 21H7.8C6.8 21 6 20.2 6 19.2V4.8C6 3.8 6.8 3 7.8 3h8.4c1 0 1.8.8 1.8 1.8v14.4c0 1-.8 1.8-1.8 1.8z" fill="#107c41" />
    <path d="M9.8 17.5h4.4c.5 0 .9-.4.9-.9v-3.4H9v3.4c0 .5.4.9.9.9z" fill="#107c41" />
    <path d="M2.3 7.7v8.6l7.2 2.2V5.5L2.3 7.7z" fill="#21a366" />
    <path d="M4.5 10.2l1.6 2.3 1.6-2.3H8.9L6.9 13l2 3.1H7.6l-1.5-2.4-1.5 2.4H3.3l2-3.1-2-2.8h1.2z" fill="#fff" />
  </svg>
);

const PowerBIIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <rect x="4" y="14" width="4" height="6" rx="1" fill="#f2c811" />
    <rect x="10" y="8" width="4" height="12" rx="1" fill="#f29f05" />
    <rect x="16" y="4" width="4" height="16" rx="1" fill="#e27c00" />
  </svg>
);

const GoogleSheetsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#0f9d58" />
    <path d="M19 3H7.5v6H19V3z" fill="#1bba70" />
    <rect x="6" y="11" width="3" height="3" fill="#fff" />
    <rect x="10.5" y="11" width="7.5" height="3" fill="#fff" />
    <rect x="6" y="15" width="3" height="3" fill="#fff" />
    <rect x="10.5" y="15" width="7.5" height="3" fill="#fff" />
  </svg>
);

const CanvaIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <defs>
      <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00c4cc" />
        <stop offset="50%" stopColor="#7d2ae8" />
        <stop offset="100%" stopColor="#ff4f93" />
      </linearGradient>
    </defs>
    <circle cx="12" cy="12" r="10" fill="url(#canvaGrad)" />
    <path d="M12.5 7.5c-2.2 0-3.5 1.5-3.5 3.5 0 2.5 2.1 3.5 3.5 3.5 1 0 1.7-.5 2-1l-1.2-.6c-.2.4-.5.6-.8.6-.7 0-1.5-.7-1.5-2.1 0-1.5.8-2.2 1.5-2.2.4 0 .7.2.9.5l1.2-.7c-.4-.7-1.2-1-2.1-1z" fill="#fff" />
  </svg>
);

const WordIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M16.2 21H7.8C6.8 21 6 20.2 6 19.2V4.8C6 3.8 6.8 3 7.8 3h8.4c1 0 1.8.8 1.8 1.8v14.4c0 1-.8 1.8-1.8 1.8z" fill="#106ebe" />
    <path d="M9.8 17.5h4.4c.5 0 .9-.4.9-.9v-3.4H9v3.4c0 .5.4.9.9.9z" fill="#106ebe" />
    <path d="M2.3 7.7v8.6l7.2 2.2V5.5L2.3 7.7z" fill="#1b5a90" />
    <path d="M3.5 10h1l1.1 2.9L6.7 10h1l1.1 2.9L9.9 10h1.1L9.5 15.5H8.4L7.3 12.3 6.2 15.5H5.1L3.5 10z" fill="#fff" />
  </svg>
);

const PowerPointIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M16.2 21H7.8C6.8 21 6 20.2 6 19.2V4.8C6 3.8 6.8 3 7.8 3h8.4c1 0 1.8.8 1.8 1.8v14.4c0 1-.8 1.8-1.8 1.8z" fill="#c43e1c" />
    <path d="M9.8 17.5h4.4c.5 0 .9-.4.9-.9v-3.4H9v3.4c0 .5.4.9.9.9z" fill="#c43e1c" />
    <path d="M2.3 7.7v8.6l7.2 2.2V5.5L2.3 7.7z" fill="#d83b01" />
    <path d="M4.8 10h2c1 0 1.7.6 1.7 1.6s-.7 1.6-1.7 1.6H5.8V15.5H4.8V10zm2 2.2c.4 0 .7-.2.7-.6s-.3-.6-.7-.6H5.8v1.2H6.8z" fill="#fff" />
  </svg>
);

const GoogleFormsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#7248b9" />
    <path d="M19 3H7.5v6H19V3z" fill="#8c58df" />
    <circle cx="7" cy="12" r="1" fill="#fff" />
    <circle cx="7" cy="15" r="1" fill="#fff" />
    <circle cx="7" cy="18" r="1" fill="#fff" />
    <rect x="10" y="11.5" width="8" height="1" fill="#fff" />
    <rect x="10" y="14.5" width="8" height="1" fill="#fff" />
    <rect x="10" y="17.5" width="8" height="1" fill="#fff" />
  </svg>
);

const GoogleWorkspaceIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M5 3.5h14a1.5 1.5 0 011.5 1.5v14a1.5 1.5 0 01-1.5 1.5H5A1.5 1.5 0 013.5 19V5A1.5 1.5 0 015 3.5z" fill="#fafafa" />
    <path d="M6 7.5h3v3H6z" fill="#4285f4" />
    <path d="M10.5 7.5h3v3h-3z" fill="#ea4335" />
    <path d="M15 7.5h3v3h-3z" fill="#fabc05" />
    <path d="M6 13.5h3v3H6z" fill="#34a853" />
    <path d="M10.5 13.5h3v3h-3z" fill="#4285f4" />
    <path d="M15 13.5h3v3h-3z" fill="#7248b9" />
  </svg>
);

export default function SkillsPage() {
  const t = useTranslations("skills");
  const locale = useLocale();
  const [isArcadeOpen, setIsArcadeOpen] = useState(false);

  const getSkillName = (name) => {
    if (name === "Laporan Keuangan") {
      return locale === "en" ? "Financial Reporting" : "Laporan Keuangan";
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
        { name: "Power Query", icon: Filter, color: "text-teal-400" },
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
  ];

  return (
    <main className="min-h-screen pt-12 md:pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <Section className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            {t("title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("pageDesc")}
          </p>
        </motion.div>

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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {cat.skills.map((skill, skillIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group/item"
                      >
                        <span
                          className={`${skill.color} group-hover/item:scale-110 transition-transform`}
                        >
                          <Icon className="w-5 h-5" />
                        </span>
                        <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors text-sm">
                          {getSkillName(skill.name)}
                        </span>
                      </div>
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
