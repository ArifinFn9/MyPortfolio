"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import MiniCard from "@/components/ui/MiniCard";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  TrendingUp,
  Calculator,
  Eraser,
  BarChart2,
  Briefcase,
  Users,
  BrainCircuit,
  Sparkles,
  Clock,
  MessageSquare,
} from "lucide-react";

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

const PowerQueryIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M4 4h16v3.5H4z" fill="#00838f" />
    <path d="M6 9.5h12v3.5H6z" fill="#00acc1" />
    <path d="M8 15h8v3.5H8z" fill="#26c6da" />
  </svg>
);

const PythonIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M11.8 2c-5.2 0-4.9 2.3-4.9 2.3v2.4h5v.7H4.9S2.6 7.1 2.6 12.3c0 5.2 2 5 2 5h1.2v-2.5c0-2.8 2.4-2.8 2.4-2.8h4.9s2.3.1 2.3-2.3V4.3C15.4 2 11.8 2 11.8 2zm-2.7 1.6c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776ab" />
    <path d="M12.2 22c5.2 0 4.9-2.3 4.9-2.3v-2.4h-5v-.7h7s2.3.3 2.3-4.9c0-5.2-2-5-2-5h-1.2v2.5c0 2.8-2.4 2.8-2.4 2.8h-4.9s-2.3-.1-2.3 2.3v4.9c0 2.3 3.6 2.3 3.6 2.3zm2.7-1.6c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#ffd43b" />
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
    <path d="M14.5 10c-.8-1-2.2-1.4-3.5-1-1.8.6-2.5 2.5-2.2 4.2.3 1.8 2.1 3 3.9 2.5 1-.3 1.8-1 2.2-1.9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const WordIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M16.2 21H7.8C6.8 21 6 20.2 6 19.2V4.8C6 3.8 6.8 3 7.8 3h8.4c1 0 1.8.8 1.8 1.8v14.4c0 1-.8 1.8-1.8 1.8z" fill="#185abd" />
    <path d="M9.8 17.5h4.4c.5 0 .9-.4.9-.9v-3.4H9v3.4c0 .5.4.9.9.9z" fill="#185abd" />
    <path d="M2.3 7.7v8.6l7.2 2.2V5.5L2.3 7.7z" fill="#103f91" />
    <path d="M3.8 10.2l1.3 5.4h1.2l1.1-4.2 1.1 4.2h1.2l1.3-5.4h-1.3l-.7 3.6-.9-3.6H7.9l-.9 3.6-.7-3.6H3.8z" fill="#fff" />
  </svg>
);

const PowerPointIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M16.2 21H7.8C6.8 21 6 20.2 6 19.2V4.8C6 3.8 6.8 3 7.8 3h8.4c1 0 1.8.8 1.8 1.8v14.4c0 1-.8 1.8-1.8 1.8z" fill="#c43e1c" />
    <path d="M9.8 17.5h4.4c.5 0 .9-.4.9-.9v-3.4H9v3.4c0 .5.4.9.9.9z" fill="#c43e1c" />
    <path d="M2.3 7.7v8.6l7.2 2.2V5.5L2.3 7.7z" fill="#d83b01" />
    <path d="M4.8 10.2h2.5c1.1 0 1.8.6 1.8 1.6s-.7 1.6-1.8 1.6H5.9v2.2H4.8v-5.4zm1.1 2.3h1.3c.5 0 .8-.2.8-.7s-.3-.7-.8-.7H5.9v1.4z" fill="#fff" />
  </svg>
);

const GoogleFormsIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#7248b9" />
    <circle cx="8" cy="8" r="1.5" fill="#fff" />
    <rect x="11" y="7.25" width="6" height="1.5" rx="0.75" fill="#fff" />
    <circle cx="8" cy="12" r="1.5" fill="#fff" />
    <rect x="11" y="11.25" width="6" height="1.5" rx="0.75" fill="#fff" />
    <circle cx="8" cy="16" r="1.5" fill="#fff" />
    <rect x="11" y="15.25" width="6" height="1.5" rx="0.75" fill="#fff" />
  </svg>
);

const GoogleWorkspaceIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" className={props.className}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#1a73e8" />
    <path d="M6 7.5h3v3H6z" fill="#ea4335" />
    <path d="M10.5 7.5h3v3h-3z" fill="#fbbc04" />
    <path d="M15 7.5h3v3h-3z" fill="#34a853" />
    <path d="M6 13.5h3v3H6z" fill="#4285f4" />
    <path d="M10.5 13.5h3v3h-3z" fill="#4285f4" />
    <path d="M15 13.5h3v3h-3z" fill="#7248b9" />
  </svg>
);

export default function SkillsSection() {
  const t = useTranslations("skills");

  const skillCategories = [
    {
      key: "analytics",
      titleKey: "categories.analytics",
      icon: BarChart2,
      color: "text-purple-400",
      skills: [
        { key: "Microsoft Excel", icon: ExcelIcon, color: "text-green-500" },
        { key: "Power BI", icon: PowerBIIcon, color: "text-yellow-500" },
        { key: "Power Query", icon: PowerQueryIcon, color: "text-teal-400" },
        { key: "Python", icon: PythonIcon, color: "text-sky-400" },
        { key: "Google Sheets", icon: GoogleSheetsIcon, color: "text-green-400" },
        { key: "financialReporting", icon: Calculator, color: "text-emerald-400", isKey: true },
        { key: "Data Cleaning", icon: Eraser, color: "text-cyan-400" },
        { key: "Data Visualization", icon: TrendingUp, color: "text-orange-400" },
      ],
    },
    {
      key: "productivity",
      titleKey: "categories.productivity",
      icon: Briefcase,
      color: "text-blue-400",
      skills: [
        { key: "Microsoft Word", icon: WordIcon, color: "text-blue-500" },
        { key: "Microsoft PowerPoint", icon: PowerPointIcon, color: "text-red-400" },
        { key: "Google Forms", icon: GoogleFormsIcon, color: "text-purple-400" },
        { key: "Google Workspace", icon: GoogleWorkspaceIcon, color: "text-blue-400" },
        { key: "Canva", icon: CanvaIcon, color: "text-pink-400" },
      ],
    },
    {
      key: "softSkills",
      titleKey: "categories.softSkills",
      icon: Users,
      color: "text-emerald-400",
      skills: [
        { key: "problemSolving", icon: BrainCircuit, color: "text-amber-400", isKey: true },
        { key: "adaptability", icon: Sparkles, color: "text-indigo-400", isKey: true },
        { key: "timeManagement", icon: Clock, color: "text-cyan-400", isKey: true },
        { key: "teamwork", icon: Users, color: "text-emerald-400", isKey: true },
        { key: "communication", icon: MessageSquare, color: "text-sky-400", isKey: true },
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

      {/* Categorized Skills Container */}
      <div className="space-y-6">
        {skillCategories.map((cat, catIdx) => (
          <Card key={cat.key} className="!p-6 md:!p-8 rounded-3xl relative overflow-hidden">
            {/* Category Sub-Header */}
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/10">
              <cat.icon className={`w-5 h-5 ${cat.color} shrink-0`} />
              <h3 className="text-lg md:text-xl font-bold text-white tracking-wide">
                {t(cat.titleKey)}
              </h3>
            </div>

            {/* Skills Grid for this Category */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
              {cat.skills.map((tech, i) => (
                <motion.div
                  key={tech.key}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * (catIdx * 6 + i) }}
                  viewport={{ once: true }}
                >
                  <MiniCard
                    interactive={false}
                    className="flex items-center gap-2.5 !px-3.5 !py-3 cursor-default h-full"
                  >
                    <tech.icon
                      className={`w-4.5 h-4.5 ${tech.color} group-hover/mini:scale-115 transition-transform shrink-0`}
                    />
                    <span className="text-xs md:text-sm font-semibold text-zinc-300 group-hover/mini:text-white transition-colors leading-tight">
                      {tech.isKey ? t(`items.${tech.key}`) : tech.key}
                    </span>
                  </MiniCard>
                </motion.div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
