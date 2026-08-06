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
