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
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  { key: "experience", path: "#experience", icon: Briefcase },
  { key: "projects", path: "#projects", icon: Layout },
  { key: "contact", path: "#contact", icon: Mail },
];

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredPath, setHoveredPath] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.path.replace("#", ""));
      let current = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.startsWith("/demo")) return null;

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "id" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div key={`top-${locale}`} className="md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] flex items-center justify-between py-2 px-4 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 shadow-lg">
        <Link href="/" className="font-bold text-white tracking-wide text-sm">
          {t("brand")}
        </Link>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-gray-400 hover:text-white transition-colors bg-white/5 border border-white/10 cursor-pointer"
        >
          <Globe className="w-3.5 h-3.5" />
          <span className="font-mono text-xs">{locale.toUpperCase()}</span>
        </button>
      </div>

      {/* Mobile Floating Bottom Glassmorphism Tab Bar */}
      <div key={`bottom-${locale}`} className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm p-2 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-around">
        {mobileNavItems.map((item) => {
          const isHomePage = pathname === "/";
          const isActive = isHomePage && activeSection === item.path.replace("#", "");

          return (
            <Link
              key={item.path}
              href={isHomePage ? item.path : `/${item.path}`}
              className="relative flex flex-col items-center justify-center p-2.5 rounded-full transition-colors"
            >
              <item.icon
                className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive
                    ? "text-white scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    : "text-gray-400 hover:text-white",
                )}
              />
              {isActive && (
                <motion.div
                  layoutId="mobile-active-dot"
                  className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_white]"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Desktop Floating Navbar (Top Center) */}
      <nav
        key={`desktop-${locale}`}
        className={cn(
          "hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 items-center gap-2.5",
        )}
      >
        {/* Main Navbar Bubble */}
        <div
          className={cn(
            "relative flex items-center justify-center p-1.5 rounded-full backdrop-blur-md transition-all duration-300",
            "bg-zinc-950/80", // Dark base background
            "border border-transparent", // Transparent border for gradient mask
            "before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px]", // Gradient border container
            "before:bg-gradient-to-r before:from-white/20 before:via-gray-400/20 before:to-white/20", // The gradient
            "before:content-[''] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
            "before:[mask-composite:exclude]",
            "shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]", // Glow effect
          )}
        >
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isHomePage = pathname === "/";
              const isActive = isHomePage && activeSection === item.path.replace("#", "");
              const isHovered = hoveredPath === item.path;
              const isExternal = item.path.startsWith("http");

              return (
                <Link
                  key={item.path}
                  href={isHomePage ? item.path : `/${item.path}`}
                  {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={cn(
                    "relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    isActive ? "text-white" : "text-gray-400 hover:text-white",
                  )}
                >
                  {/* Hover Background */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-white/5 rounded-full z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {/* Active Background */}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-white/10 rounded-full z-0"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span>{t(item.key)}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Standalone Language Switcher Bubble */}
        <div
          className={cn(
            "relative flex items-center justify-center p-1.5 rounded-full backdrop-blur-md transition-all duration-300 shrink-0",
            "bg-zinc-950/80", // Dark base background
            "border border-transparent", // Transparent border for gradient mask
            "before:absolute before:inset-0 before:-z-10 before:rounded-full before:p-[1px]", // Gradient border container
            "before:bg-gradient-to-r before:from-white/20 before:via-gray-400/20 before:to-white/20", // The gradient
            "before:content-[''] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
            "before:[mask-composite:exclude]",
            "shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]", // Glow effect
          )}
        >
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer group"
          >
            <Globe className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-mono">{locale.toUpperCase()}</span>
          </button>
        </div>
      </nav>
    </>
  );
}
