"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import {
  User,
  Globe,
  GraduationCap,
  FileSpreadsheet,
  BarChart3,
  Palette,
  FileText,
  Presentation,
  ClipboardList,
  Database,
  TrendingUp,
  MapPin,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { socials } from "@/data/socials";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTelegram,
  SiYoutube,
} from "react-icons/si";

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <main className="min-h-screen pt-12 md:pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <Section className="max-w-5xl mx-auto">
        {/* Hero Section with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          {/* Photo */}
          <div className="relative shrink-0">
            <div className="relative w-64 h-96 md:w-80 md:h-[480px] group">
              {/* Animated Border/Glow - Monochrome */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-zinc-900/50 to-white/5 rounded-[2rem] -rotate-6 scale-105 opacity-40 blur-lg group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-[#101012] to-black rounded-[2rem] -rotate-3 border border-white/10" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden border-2 border-white/20 shadow-2xl z-10 bg-gradient-to-b from-zinc-800 via-zinc-950 to-black">
                <Image
                  src="/assets/me.png"
                  alt="Muhammad Arifin"
                  fill

                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-120 scale-105"
                  style={{
                    objectPosition: "center 38%",
                  }}
                />

              </div>
            </div>
          </div>

          {/* Intro Text */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              {t("title")}
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6 text-left">
              {t("pageDesc")}
            </p>
            <div className="flex w-full md:w-auto gap-2 md:gap-3 justify-between md:justify-start mb-5 md:mb-6">
              <span className="flex-1 md:flex-initial justify-center md:justify-start px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
                <MapPin className="w-3 md:w-3.5 h-3 md:h-3.5 text-zinc-400 shrink-0" />
                {t("based")}
              </span>
              <span className="flex-1 md:flex-initial justify-center md:justify-start px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
                <span className="relative flex h-1.5 md:h-2 w-1.5 md:w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-green-500"></span>
                </span>
                {t("available")}
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start">
              <a
                href={socials.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 active:scale-95 transition-all duration-150 shadow-lg shrink-0 w-full justify-center md:w-auto cursor-pointer shimmer-btn-light"
              >
                <FileText className="w-4 h-4" />
                <span>{t("viewResume")}</span>
              </a>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {[
                  {
                    key: "email",
                    icon: Mail,
                    href: `mailto:${socials.email.url}`,
                    hoverClass: "hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20",
                  },
                  {
                    key: "linkedin",
                    icon: SiLinkedin,
                    href: socials.linkedin.url,
                    hoverClass: "hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/20",
                  },
                  {
                    key: "github",
                    icon: SiGithub,
                    href: socials.github.url,
                    hoverClass: "hover:bg-white/10 hover:text-white hover:border-white/10",
                  },
                  {
                    key: "instagram",
                    icon: SiInstagram,
                    href: socials.instagram.url,
                    hoverClass: "hover:bg-pink-500/10 hover:text-pink-400 hover:border-pink-500/20",
                  },
                  {
                    key: "telegram",
                    icon: SiTelegram,
                    href: socials.telegram.url,
                    hoverClass: "hover:bg-sky-500/10 hover:text-sky-400 hover:border-sky-500/20",
                  },
                ].map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-150 hover:-translate-y-0.5 active:scale-90 shadow-md ${social.hoverClass}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <Card className="p-8 h-full hover:border-white/20 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t("backgroundTitle")}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t("backgroundDesc")}
            </p>
          </Card>

          <Card className="p-8 h-full hover:border-white/20 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t("philosophyTitle")}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t("philosophyDesc")}
            </p>
          </Card>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-gray-300" />
            {t("educationTitle")}
          </h2>
          <Card className="p-8">
            {/* Header row: Icon, University, and Desktop Period */}
            <div className="flex items-center md:items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 text-gray-300 shrink-0 flex items-center justify-center overflow-hidden p-2">
                  <img
                    src="/assets/ums.png"
                    alt="UMS Logo"
                    className="w-full h-full object-contain filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none' }}>
                    <GraduationCap className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {t("university")}
                  </h3>
                  <h4 className="hidden md:block text-lg font-semibold text-gray-200 mt-1">
                    {t("degree")}
                  </h4>
                </div>
              </div>
              <span className="hidden md:inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-mono whitespace-nowrap shadow-sm shrink-0">
                {t("period")}
              </span>
            </div>

            {/* Mobile Only Details row: Degree & Period */}
            <div className="flex flex-col gap-2 mb-4 md:hidden">
              <h4 className="text-lg font-semibold text-gray-200">
                {t("degree")}
              </h4>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-mono whitespace-nowrap shadow-sm w-fit">
                {t("period")}
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed">
              {t("eduDesc")}
            </p>
          </Card>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {t("techStackTitle")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  name: "Microsoft Excel",
                  icon: <FileSpreadsheet className="w-5 h-5" />,
                  color: "text-green-500",
                },
                {
                  name: "Power BI",
                  icon: <BarChart3 className="w-5 h-5" />,
                  color: "text-yellow-500",
                },
                {
                  name: "Google Sheets",
                  icon: <FileSpreadsheet className="w-5 h-5" />,
                  color: "text-green-400",
                },
                {
                  name: "Data Cleaning",
                  icon: <Database className="w-5 h-5" />,
                  color: "text-cyan-400",
                },
                {
                  name: "Data Visualization",
                  icon: <TrendingUp className="w-5 h-5" />,
                  color: "text-orange-400",
                },
                {
                  name: "Microsoft Word",
                  icon: <FileText className="w-5 h-5" />,
                  color: "text-blue-500",
                },
                {
                  name: "Microsoft PowerPoint",
                  icon: <Presentation className="w-5 h-5" />,
                  color: "text-red-400",
                },
                {
                  name: "Google Forms",
                  icon: <ClipboardList className="w-5 h-5" />,
                  color: "text-purple-400",
                },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 p-4 rounded-xl glass-card hover:border-white/20 hover:bg-white/10 transition-all group"
                >
                  <span
                    className={`${tech.color} group-hover:scale-110 transition-transform`}
                  >
                    {tech.icon}
                  </span>
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </Section>
    </main>
  );
}
