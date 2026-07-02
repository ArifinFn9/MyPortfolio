"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  TrendingUp,
  Calculator,
  Eraser,
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

const techStack = [
  { name: "Microsoft Excel", icon: ExcelIcon, color: "text-green-500" },
  { name: "Power BI", icon: PowerBIIcon, color: "text-yellow-500" },
  { name: "Google Sheets", icon: GoogleSheetsIcon, color: "text-green-400" },
  { name: "Laporan Keuangan", icon: Calculator, color: "text-emerald-400" },
  { name: "Data Cleaning", icon: Eraser, color: "text-cyan-400" },
  { name: "Data Visualization", icon: TrendingUp, color: "text-orange-400" },
  { name: "Microsoft Word", icon: WordIcon, color: "text-blue-500" },
  { name: "Microsoft PowerPoint", icon: PowerPointIcon, color: "text-red-400" },
  { name: "Google Forms", icon: GoogleFormsIcon, color: "text-purple-400" },
  { name: "Google Workspace", icon: GoogleWorkspaceIcon, color: "text-blue-400" },
  { name: "Canva", icon: CanvaIcon, color: "text-pink-400" },
];

export default function SkillsSection() {
  const t = useTranslations("skills");
  const locale = useLocale();

  const getSkillName = (name) => {
    if (name === "Laporan Keuangan") {
      return locale === "en" ? "Financial Reporting" : "Laporan Keuangan";
    }
    return name;
  };

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
      <div className="p-8 rounded-3xl glass-card relative overflow-hidden">
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
                {getSkillName(tech.name)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
