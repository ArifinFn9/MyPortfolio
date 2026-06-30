"use client";

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
  Award,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";

export default function SkillsPage() {
  const t = useTranslations("skills");
  const locale = useLocale();

  const getSkillName = (name) => {
    if (name === "Laporan Keuangan") {
      return locale === "en" ? "Financial Reporting" : "Laporan Keuangan";
    }
    return name;
  };

  const categories = [
    {
      id: "finance",
      title: t("categories.finance"),
      color: "from-white/5 to-white/10",
      borderColor: "hover:border-white/20",
      skills: [
        { name: "Microsoft Excel", icon: FileSpreadsheet, color: "text-zinc-400" },
        { name: "Power BI", icon: BarChart3, color: "text-zinc-400" },
        { name: "Google Sheets", icon: FileSpreadsheet, color: "text-zinc-400" },
        { name: "Laporan Keuangan", icon: Calculator, color: "text-zinc-400" },
        { name: "Data Visualization", icon: TrendingUp, color: "text-zinc-400" },
      ],
    },
    {
      id: "data",
      title: t("categories.data"),
      color: "from-white/5 to-white/10",
      borderColor: "hover:border-white/20",
      skills: [
        { name: "Data Cleaning", icon: Database, color: "text-zinc-400" },
        { name: "Power Query", icon: Database, color: "text-zinc-400" },
      ],
    },
    {
      id: "productivity",
      title: t("categories.productivity"),
      color: "from-white/5 to-white/10",
      borderColor: "hover:border-white/20",
      skills: [
        { name: "Microsoft Word", icon: FileText, color: "text-zinc-400" },
        { name: "Microsoft PowerPoint", icon: Presentation, color: "text-zinc-400" },
        { name: "Google Forms", icon: ClipboardList, color: "text-zinc-400" },
        { name: "Google Workspace", icon: Globe, color: "text-zinc-400" },
        { name: "Canva", icon: Palette, color: "text-zinc-400" },
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
                  <Award className="w-5 h-5 text-zinc-400" />
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
      </Section>
    </main>
  );
}
