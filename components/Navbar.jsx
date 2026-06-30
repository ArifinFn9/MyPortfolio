"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  Home,
  User,
  Code2,
  Briefcase,
  Layout,
  Mail,
  Globe,
  ArrowUpRight,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { socials } from "@/data/socials";

const navItems = [
  { key: "home", path: "#home", icon: Home },
  { key: "about", path: "#about", icon: User },
  { key: "skills", path: "#skills", icon: Code2 },
  { key: "experience", path: "#experience", icon: Briefcase },
  { key: "projects", path: "#projects", icon: Layout },
  { key: "contact", path: "#contact", icon: Mail },
];

const mobileNavItems = [
  { key: "home", path: "#home", icon: Home },
  { key: "about", path: "#about", icon: User },
  { key: "skills", path: "#skills", icon: Code2 },
  { key: "experience", path: "#experience", icon: Briefcase },
  { key: "projects", path: "#projects", icon: Layout },
  { key: "contact", path: "#contact", icon: Mail },
];

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredPath, setHoveredPath] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.path.replace("#", ""));
      let current = "home";
      let minDistance = Infinity;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // We look for the section closest to the top of the viewport
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e, path) => {
    if (isHomePage && path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const toggleLanguage = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    // Construct the new path maintaining active hash
    const hash = window.location.hash;
    router.replace(pathname, { locale: nextLocale });
    // Restore hash after navigation completes
    if (hash) {
      setTimeout(() => {
        window.location.hash = hash;
      }, 100);
    }
  };

  return (
    <>
      {/* Mobile Floating Bottom Navigation and Language Control Center */}
      <div
        key={`mobile-controls-${locale}`}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-sm flex items-center gap-2 select-none"
      >
        {/* Main Navigation Capsule */}
        <div className="flex-1 flex items-center justify-around p-1.5 rounded-full bg-zinc-950/80 backdrop-blur-[8px] border border-white/10 shadow-2xl">
          {mobileNavItems.map((item) => {
            const isActive = isHomePage && activeSection === item.path.replace("#", "");

            return (
              <Link
                key={item.path}
                href={isHomePage ? item.path : `/${locale}${item.path}`}
                onClick={(e) => handleNavLinkClick(e, item.path)}
                className={cn(
                  "relative p-2 rounded-full text-gray-400 transition-all duration-300",
                  isActive && "text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMobileNav"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <item.icon className="w-5 h-5 relative z-10" />
              </Link>
            );
          })}
        </div>

        {/* Standalone Language Switcher Bubble */}
        <div className="shrink-0 flex items-center justify-center p-1.5 rounded-full bg-zinc-950/80 backdrop-blur-[8px] border border-white/10 shadow-2xl">
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-9 h-9 rounded-full text-xs font-bold text-gray-400 hover:text-white transition-all cursor-pointer bg-white/5 border border-white/5 active:scale-90 duration-200"
          >
            <span className="font-mono text-xs uppercase">{locale}</span>
          </button>
        </div>
      </div>

      {/* Desktop Floating Navbar (Top Center) */}
      <nav
        key={`desktop-${locale}`}
        className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 items-center select-none"
      >
        <div className="flex items-center gap-3.5 p-2 pr-4 rounded-full bg-[#070708]/85 backdrop-blur-[8px] border border-white/10 shadow-2xl">
          {/* Logo Badge (AIZ style, MA for Muhammad Arifin) */}
          <Link
            href="/"
            onClick={(e) => handleNavLinkClick(e, "#home")}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950 border border-white/10 text-white font-black text-[10px] tracking-wider hover:border-white/20 transition-colors shrink-0"
          >
            MA
          </Link>

          {/* Divider */}
          <div className="w-[1px] h-4 bg-white/10" />

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.path.replace("#", "");

              return (
                <Link
                  key={item.path}
                  href={isHomePage ? item.path : `/${locale}${item.path}`}
                  onClick={(e) => handleNavLinkClick(e, item.path)}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={cn(
                    "relative px-3 py-1.5 rounded-full text-xs font-bold transition-colors duration-200 text-zinc-400 hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  {/* Hover background slide effect */}
                  <AnimatePresence>
                    {hoveredPath === item.path && (
                      <motion.div
                        layoutId="hoverBg"
                        className="absolute inset-0 bg-white/5 rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Underline for Active Section */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10">{t(item.key)}</span>
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-[1px] h-4 bg-white/10" />

          {/* Language Control */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-6 h-6 rounded-full text-[9px] font-extrabold text-zinc-400 hover:text-white transition-all cursor-pointer bg-white/5 border border-white/5 active:scale-90 duration-200"
          >
            <span className="font-mono uppercase">{locale}</span>
          </button>

          {/* Divider */}
          <div className="w-[1px] h-4 bg-white/10" />

          {/* "HUBUNGI SAYA" Button */}
          <Link
            href={isHomePage ? "#contact" : "/contact"}
            onClick={(e) => handleNavLinkClick(e, "#contact")}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 transition-all duration-150 text-white font-bold text-[10px] tracking-wider uppercase shrink-0"
          >
            <span>{t("contact")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
          </Link>

          <a
            href={socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 transition-all duration-150 text-zinc-400 hover:text-white font-bold text-[10px] tracking-wider uppercase shrink-0 shimmer-btn-dark"
          >
            <Download className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resume</span>
          </a>
        </div>
      </nav>
    </>
  );
}
