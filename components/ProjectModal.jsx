"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Globe, ArrowUpRight, CheckCircle2, FileSpreadsheet, BarChart3, Database } from "lucide-react";
import Link from "next/link";
const techIcons = {
  "Microsoft Excel": { icon: FileSpreadsheet, color: "text-green-500" },
  "Power BI": { icon: BarChart3, color: "text-yellow-500" },
  "Google Sheets": { icon: FileSpreadsheet, color: "text-green-400" },
  "Power Query": { icon: Database, color: "text-cyan-400" },
  "Excel VBA": { icon: FileSpreadsheet, color: "text-green-600" },
  "VBA Macros": { icon: FileSpreadsheet, color: "text-green-600" },
};

export default function ProjectModal({ project, isOpen, onClose }) {
  const t = useTranslations("projects");
  if (!project) return null;

  const title = t(`items.${project.id}.title`);
  const description = t(`items.${project.id}.description`);
  const problem = t(`items.${project.id}.problem`);
  const solution = t(`items.${project.id}.solution`);
  const impact = t(`items.${project.id}.impact`);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl z-10 max-h-[85vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 p-2.5 rounded-full bg-black/60 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all cursor-pointer"
              aria-label={t("modal.close")}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Scrollable Content Wrapper */}
            <div className="overflow-y-auto flex-1 custom-scrollbar">
              {/* Image Preview */}
              <div className="relative aspect-[16/9] w-full bg-zinc-900 border-b border-white/10">
                {project.image ? (
                  <div
                    className="absolute inset-0 bg-cover bg-top"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-zinc-500">
                    No Preview
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              </div>

              {/* Text & Data Details */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const TechIcon = techIcons[tech]?.icon;
                    const colorClass = techIcons[tech]?.color || "text-zinc-400";
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-zinc-300"
                      >
                        {TechIcon && <TechIcon className={`h-4 w-4 ${colorClass}`} />}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-white/5 pt-6 space-y-6">
                  {/* Problem & Context */}
                  {problem && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        {t("modal.problemTitle")}
                      </h4>
                      <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                        {problem}
                      </p>
                    </div>
                  )}

                  {/* Solution & Implementation */}
                  {solution && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                        {t("modal.solutionTitle")}
                      </h4>
                      <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                        {solution}
                      </p>
                    </div>
                  )}

                  {/* Results & Impact */}
                  {impact && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                        {t("modal.impactTitle")}
                      </h4>
                      <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-zinc-200 text-sm md:text-base leading-relaxed">
                          {impact}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sticky Modal Footer (Links) */}
            <div className="border-t border-white/10 p-5 bg-zinc-950/90 flex items-center justify-end gap-4 shrink-0">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium text-zinc-300 hover:text-white transition-all"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </Link>
              )}

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-gray-200 text-sm font-bold text-black transition-all active:scale-95 duration-150"
                >
                  <Globe className="h-4 w-4" />
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
