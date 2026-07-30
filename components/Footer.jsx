"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/routing";
import { Mail, ArrowUp } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram, SiTelegram, SiYoutube } from "react-icons/si";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { socials } from "@/data/socials";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navbar");
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e, item) => {
    if (item.key === "home") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        e.preventDefault();
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-zinc-950 to-black mt-20 relative overflow-hidden">
      {/* Enhanced top glow elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-purple-500/10 blur-2xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-28 md:pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand Column (5 cols) */}
          <div className="col-span-1 md:col-span-6 lg:col-span-5">
            <div className="h-8 flex items-center mb-4">
              <Link href="/" className="flex items-center gap-2.5 group w-fit">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950 border border-white/10 text-white font-black text-[10px] tracking-wider group-hover:border-white/30 transition-all duration-300 shrink-0 shadow-lg shadow-black/50">
                  MA
                </div>
                <span className="font-bold text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  {t("brand")}
                </span>
              </Link>
            </div>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              {t("desc")}
            </p>
          </div>

          {/* Links Column (3 cols) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3">
            <div className="h-8 flex items-center mb-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">{t("navTitle")}</h3>
            </div>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { key: "home", path: "/#home" },
                { key: "about", path: "/about" },
                { key: "skills", path: "/skills" },
                { key: "experience", path: "/experience" },
                { key: "projects", path: "/projects" },
                { key: "contact", path: "/contact" },
              ].map((item) => {
                const isActive = (item.key === "home" && pathname === "/") || pathname === item.path;

                return (
                  <li key={item.key}>
                    <Link
                      href={item.path}
                      onClick={(e) => handleNavLinkClick(e, item)}
                      className={cn(
                        "transition-all duration-300 text-sm hover:translate-x-1 flex items-center gap-1.5",
                        isActive ? "text-white font-semibold" : "text-gray-400 hover:text-white"
                      )}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
                      )}
                      <span>{tNav(item.key)}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Social Column (4 cols) */}
          <div className="col-span-1 md:col-span-3 lg:col-span-4">
            <div className="h-8 flex items-center mb-4">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">{t("connTitle")}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${socials.email.url}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-all hover:-translate-y-0.5 active:scale-90 border border-white/5 hover:border-emerald-500/20 duration-150"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition-all hover:-translate-y-0.5 active:scale-90 border border-white/5 hover:border-blue-500/20 duration-150"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 transition-all hover:-translate-y-0.5 active:scale-90 border border-white/5 hover:border-white/10 duration-150"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href={socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-500/10 hover:text-pink-400 text-gray-400 transition-all hover:-translate-y-0.5 active:scale-90 border border-white/5 hover:border-pink-500/20 duration-150"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href={socials.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-sky-500/10 hover:text-sky-400 text-gray-400 transition-all hover:-translate-y-0.5 active:scale-90 border border-white/5 hover:border-sky-500/20 duration-150"
                aria-label="Telegram"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
              <a
                href={socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-gray-400 transition-all hover:-translate-y-0.5 active:scale-90 border border-white/5 hover:border-red-500/20 duration-150"
                aria-label="YouTube"
              >
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            {t("rights", { year: currentYear })}
          </p>

          <div className="text-gray-600 text-sm flex items-center gap-1">
            {t.rich("builtWith", {
              heart: (chunks) => <span className="text-red-500">♥{chunks}</span>
            })}
          </div>
        </div>
      </div>

      {/* Floating Back to Top Glassmorphism Button (Desktop Only) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={scrollToTop}
            className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 shadow-2xl hover:shadow-purple-500/10 text-xs font-semibold transition-all duration-200 cursor-pointer active:scale-95 group select-none"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
