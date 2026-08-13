"use client";

import { useState } from "react";
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
} from "react-icons/si";

// Formatters declared outside component to prevent re-creation during render (resolves SonarQube S6478)
const renderAccent = (chunks) => (
  <span className="text-zinc-400">
    {chunks}
  </span>
);

const renderName = (chunks) => (
  <span className="inline-block px-2 bg-white/10 text-white font-bold rounded-lg border border-white/10 -rotate-2 hover:rotate-0 transition-transform duration-300 mx-1 shadow-sm">
    {chunks}
  </span>
);

import { revealVariants, getRevealTransition, revealViewport } from "@/lib/motion";

export default function AboutSection() {
  const t = useTranslations("about");
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Section id="about" className="scroll-mt-4 py-12 md:py-20 px-6 max-w-6xl mx-auto">
      {/* Bio & Photo Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        {/* Photo Column - Enhanced Animation */}
        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          transition={getRevealTransition()}
          viewport={revealViewport}
          className="relative shrink-0"
        >
          <div className="relative w-64 h-96 md:w-80 md:h-[480px] group [perspective:1000px]">
            {/* Pure Circular Soft Halo Ambient Glow (Behind all layers) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] aspect-square rounded-full -z-20 opacity-70 group-hover:opacity-95 transition-opacity duration-700 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 70%)"
              }}
            />

            {/* 2 Cool Rotated Monochrome 3D Stacked Card Layers */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-zinc-900/50 to-white/5 rounded-[2rem] -rotate-6 scale-105 opacity-40 blur-sm group-hover:opacity-60 transition-opacity duration-500 animate-pulse-slow -z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-[#101012] to-black rounded-[2rem] -rotate-4 border border-white/10 -z-5" />

            {/* Image Container with 3D Flip Motion */}
            <motion.div
              onClick={() => setIsFlipped(!isFlipped)}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full rounded-[1.8rem] overflow-hidden border-2 border-white/20 shadow-2xl z-10 bg-gradient-to-b from-zinc-800 via-zinc-950 to-black cursor-pointer group/flip [transform-style:preserve-3d]"
            >
              {/* FRONT SIDE */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                <Image
                  src="/assets/me.webp"
                  alt="Muhammad Arifin Fadhil Nugroho"
                  fill
                  sizes="(max-width: 768px) 512px, 640px"
                  priority
                  className="object-cover transition-transform duration-700 group-hover/flip:scale-110 scale-105"
                  style={{
                    objectPosition: "center 38%",
                  }}
                />
              </div>

              {/* BACK SIDE (MIRROR PHOTO EFFECT) */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <Image
                  src="/assets/me.webp"
                  alt="Muhammad Arifin Fadhil Nugroho Backside"
                  fill
                  sizes="(max-width: 768px) 512px, 640px"
                  priority
                  className="object-cover transition-transform duration-700 group-hover/flip:scale-110 scale-105 -scale-x-1"
                  style={{
                    objectPosition: "center 38%",
                  }}
                />
              </div>
            </motion.div>

            {/* Decorative Floating Elements (Asynchronous Organic Zero-Gravity Drift) */}
            <motion.div
              animate={{
                y: [-8, 10, -8],
                rotate: [-4, 4, -4],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-6 top-10 z-20"
            >
              <div className="p-3 rounded-xl glass-card hover:border-white/30 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-default shadow-xl">
                <GraduationCap className="w-6 h-6 text-zinc-300" />
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [10, -8, 10],
                rotate: [4, -4, 4],
              }}
              transition={{
                duration: 6.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8,
              }}
              className="absolute -left-6 bottom-10 z-20"
            >
              <div className="p-3 rounded-xl glass-card hover:border-white/30 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-default shadow-xl">
                <Briefcase className="w-6 h-6 text-zinc-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content - Single Cohesive Reveal */}
        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          transition={getRevealTransition(0.1)}
          viewport={revealViewport}
          className="text-center md:text-left flex-1"
        >
          <div className="mb-2 text-gray-400 font-mono text-sm tracking-wider uppercase">
            {t("title")}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            {t.rich("subtitle", {
              accent: renderAccent
            })}
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8 text-left">
            {t.rich("desc", {
              name: renderName
            })}
          </p>

          <div className="grid grid-cols-2 gap-x-3.5 gap-y-3.5 md:gap-4 mb-8 text-left">
            {["bullet1", "bullet2", "bullet3", "bullet4", "bullet5", "bullet6"].map((key) => (
              <div key={key} className="flex items-start gap-2 sm:gap-2.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm md:text-base font-medium leading-snug">{t(key)}</span>
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

          {/* Social Links & CV Button Row */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-center md:justify-start">
            <motion.a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.35)] transition-all duration-300 shadow-lg shrink-0 w-full justify-center md:w-auto cursor-pointer shimmer-btn-light"
            >
              <FileText className="w-4 h-4" />
              <span>{t("viewResume")}</span>
            </motion.a>

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
                <motion.a
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0, ease: [0.16, 1, 0.3, 1] }}
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-150 shadow-md ${social.hoverClass}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          transition={getRevealTransition(0.2)}
          viewport={revealViewport}
          className="h-full"
        >
          <Card className="p-8 h-full transition-colors group">
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
          initial={revealVariants.initial}
          whileInView={revealVariants.whileInView}
          transition={getRevealTransition(0.3)}
          viewport={revealViewport}
          className="h-full"
        >
          <Card className="p-8 h-full transition-colors group">
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

      {/* Education Section - Enhanced Layout  */}
      <motion.div
        initial={revealVariants.initial}
        whileInView={revealVariants.whileInView}
        transition={getRevealTransition(0.4)}
        viewport={revealViewport}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-white" />
          {t("educationTitle")}
        </h2>

        <div className="relative group p-[1px]">
          <Card className="p-6 md:p-8 h-full transition-colors group">
            {/* Header row: Logo, University, Degree, and Period*/}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white/10 to-gray-500/10 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] shrink-0 overflow-hidden p-2">
                  <img
                    src="/assets/logo_ums.webp"
                    alt="UMS Logo"
                    className="w-full h-full object-contain filter-none opacity-100 md:opacity-85 md:grayscale-[20%] md:group-hover:opacity-100 md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none' }}>
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {t("university")}
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-zinc-400 mt-1">
                    {t("degree")}
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs md:text-sm font-mono whitespace-nowrap shadow-sm sm:self-start self-start w-fit shrink-0">
                {t("period")}
              </span>
            </div>

            {/* Relevant Courses Sub-List */}
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                {t("relevantCoursesLabel")}
              </p>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                {t("eduDesc")}
              </p>
            </div>
          </Card>
        </div>
      </motion.div>
    </Section>
  );
}
