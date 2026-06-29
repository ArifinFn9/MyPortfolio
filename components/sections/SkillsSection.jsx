"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
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
} from "lucide-react";

const techStack = [
  { name: "Microsoft Excel", icon: FileSpreadsheet, color: "text-green-500" },
  { name: "Power BI", icon: BarChart3, color: "text-yellow-500" },
  { name: "Google Sheets", icon: FileSpreadsheet, color: "text-green-400" },
  { name: "Data Cleaning", icon: Database, color: "text-cyan-400" },
  { name: "Data Visualization", icon: TrendingUp, color: "text-orange-400" },
  { name: "Microsoft Word", icon: FileText, color: "text-blue-500" },
  { name: "Microsoft PowerPoint", icon: Presentation, color: "text-red-400" },
  { name: "Google Forms", icon: ClipboardList, color: "text-purple-400" },
  { name: "Google Workspace", icon: Globe, color: "text-blue-400" },
  { name: "Canva", icon: Palette, color: "text-pink-400" },
];

export default function SkillsSection() {
  const t = useTranslations("skills");

  return (
    <Section id="skills" className="scroll-mt-4 py-12 md:py-20 px-6 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600 pb-2 mb-4">
          {t("title")}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
          "{t("subtitle")}"
        </p>
      </motion.div>

      {/* Tech Stack Grid */}
      <div className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group cursor-default"
            >
              <tech.icon
                className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`}
              />
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
