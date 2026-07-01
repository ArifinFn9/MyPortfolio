"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { User, Globe, GraduationCap, CheckCircle2, FileText, MapPin, Mail, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { socials } from "@/data/socials";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiTelegram,
  SiYoutube,
} from "react-icons/si";

// Formatters declared outside component to prevent re-creation during render (resolves SonarQube S6478)
const renderGradient = (chunks) => (
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">
    {chunks}
  </span>
);

const renderName = (chunks) => (
  <span className="inline-block px-3 py-1 bg-white/10 text-white font-bold rounded-lg border border-white/10 -rotate-2 hover:rotate-0 transition-transform duration-300">
    {chunks}
  </span>
);

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <Section id="about" className="scroll-mt-4 py-12 md:py-20 px-6 max-w-6xl mx-auto">
      {/* Bio & Photo Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        {/* Photo Column - Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="relative shrink-0"
        >
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

              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm">
                  {t("hello")}
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 top-10 z-20"
            >
              <div className="p-3 rounded-xl glass-card hover:border-white/30 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-default shadow-xl">
                <GraduationCap className="w-6 h-6 text-zinc-300" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-6 bottom-10 z-20"
            >
              <div className="p-3 rounded-xl glass-card hover:border-white/30 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-default shadow-xl">
                <Briefcase className="w-6 h-6 text-zinc-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center md:text-left flex-1"
        >
          <div className="mb-2 text-gray-400 font-mono text-sm tracking-wider uppercase">
            {t("title")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            {t.rich("subtitle", {
              gradient: renderGradient
            })}
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            {t.rich("desc", {
              name: renderName
            })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
            {["bullet1", "bullet2", "bullet3", "bullet4", "bullet5", "bullet6"].map((key) => (
              <div key={key} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                <span className="text-sm md:text-base font-medium">{t(key)}</span>
              </div>
            ))}
          </div>

          <div className="flex w-full md:w-auto gap-2 md:gap-3 justify-between md:justify-start mb-6 md:mb-8">
            <span className="flex-1 md:flex-initial justify-center md:justify-start px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
              <MapPin className="w-3 md:w-3.5 h-3 md:h-3.5 text-zinc-400 shrink-0" />
              {t("based")}
            </span>
            <span className="flex-1 md:flex-initial justify-center md:justify-start px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs md:text-sm font-medium flex items-center gap-1.5 md:gap-2">
              <span className="relative flex h-1.5 md:h-2 w-1.5 md:w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 md:h-2 w-1.5 md:w-2 bg-green-500"></span>
              </span>
              {t("available")}
            </span>
          </div>

          {/* Social Links & CV Button */}
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
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="p-8 h-full hover:border-white/20 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform shrink-0">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t("backgroundTitle")}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t("backgroundDesc")}
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <Card className="p-8 h-full hover:border-white/20 transition-colors group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:scale-110 transition-transform shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{t("philosophyTitle")}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t("philosophyDesc")}
            </p>
          </Card>
        </motion.div>
      </div>

      {/* Education Section - Enhanced Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-white" />
          {t("educationTitle")}
        </h2>

        <div className="relative group p-[1px]">
          <div className="relative p-8 rounded-2xl glass-card overflow-hidden h-full hover:border-white/20 transition-colors duration-300">
            {/* Background Glow - Subtle White/Gray */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 group-hover:bg-white/10 transition-colors duration-500" />

            {/* Header row: Icon, University, and Desktop Period */}
            <div className="flex items-center md:items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white/10 to-gray-500/10 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] shrink-0 overflow-hidden p-2">
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
                    <GraduationCap className="w-7 h-7 md:w-10 md:h-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md">
                    {t("university")}
                  </h3>
                  <p className="hidden md:block text-gray-400 font-medium tracking-wide mt-1">
                    {t("degree")}
                  </p>
                </div>
              </div>
              <span className="hidden md:inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-mono whitespace-nowrap shadow-sm shrink-0">
                {t("period")}
              </span>
            </div>

            {/* Mobile Only Details row: Degree & Period */}
            <div className="flex flex-col gap-2 mb-4 md:hidden">
              <p className="text-gray-400 font-medium tracking-wide">
                {t("degree")}
              </p>
              <span className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-gray-200 text-sm font-mono whitespace-nowrap shadow-sm w-fit">
                {t("period")}
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 font-medium">
              {t("eduDesc")}
            </p>

            {/* Tags / Achievements */}
            <div className="flex flex-wrap gap-2">
              {[
                t("tags.se"),
                t("tags.sd"),
                t("tags.wt"),
                t("tags.db"),
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-semibold shadow-[0_0_10px_rgba(255,255,255,0.05)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
