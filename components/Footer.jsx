"use client";

import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram, SiTelegram, SiYoutube } from "react-icons/si";
import { useTranslations } from "next-intl";

import { socials } from "@/data/socials";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navbar");
  const currentYear = new Date().getFullYear();

  const handleNavLinkClick = (e, item) => {
    if (item.key === "home") {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        e.preventDefault();
        homeSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-zinc-950 to-black mt-20 relative overflow-hidden">
      {/* Subtle top glow element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-28 md:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group w-fit">
              <div className="p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-500 group-hover:scale-105 transition-transform duration-300">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {t("brand")}
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              {t("desc")}
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-bold text-white mb-4">{t("navTitle")}</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                { key: "home", path: "/#home" },
                { key: "about", path: "/about" },
                { key: "skills", path: "/skills" },
                { key: "experience", path: "/experience" },
                { key: "projects", path: "/projects" },
                { key: "contact", path: "/contact" },
              ].map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavLinkClick(e, item)}
                    className="text-gray-400 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="font-bold text-white mb-4">{t("connTitle")}</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-white text-gray-400 transition-all duration-300 hover:-translate-y-0.5 border border-white/5 hover:border-white/10"
                aria-label="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 border border-white/5 hover:border-blue-500/20"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-500/10 hover:text-pink-400 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 border border-white/5 hover:border-pink-500/20"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
              <a
                href={socials.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-sky-500/10 hover:text-sky-400 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 border border-white/5 hover:border-sky-500/20"
                aria-label="Telegram"
              >
                <SiTelegram className="w-5 h-5" />
              </a>
              <a
                href={socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 border border-white/5 hover:border-red-500/20"
                aria-label="YouTube"
              >
                <SiYoutube className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socials.email.url}`}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-emerald-500/10 hover:text-emerald-400 text-gray-400 transition-all duration-300 hover:-translate-y-0.5 border border-white/5 hover:border-emerald-500/20"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
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
    </footer>
  );
}
