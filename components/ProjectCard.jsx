"use client";

import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { Github, Globe, ArrowUpRight, BarChart3, FileSpreadsheet, Database, Code2, Clock } from "lucide-react";
import { motion } from "framer-motion";

const techIcons = {
  "Microsoft Excel": { icon: FileSpreadsheet, color: "text-green-500" },
  "Power BI": { icon: BarChart3, color: "text-yellow-500" },
  "Google Sheets": { icon: FileSpreadsheet, color: "text-green-400" },
  "Power Query": { icon: Database, color: "text-cyan-400" },
  "Excel VBA": { icon: FileSpreadsheet, color: "text-green-600" },
  "VBA Macros": { icon: FileSpreadsheet, color: "text-green-600" },
  "Python": { icon: Code2, color: "text-amber-400" },
};

const cardAccents = [
  "from-emerald-400/25 via-cyan-400/10 to-transparent",
  "from-violet-400/25 via-fuchsia-400/10 to-transparent",
  "from-sky-400/25 via-blue-400/10 to-transparent",
  "from-amber-400/25 via-orange-400/10 to-transparent",
  "from-lime-400/25 via-emerald-400/10 to-transparent",
  "from-rose-400/25 via-pink-400/10 to-transparent",
];

export default function ProjectCard({ project, index = 0 }) {
  const t = useTranslations("projects");
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || "id";
  const accent = cardAccents[index % cardAccents.length];
  const projectNumber = String(index + 1).padStart(2, "0");

  const title = t(`items.${project.id}.title`);
  const description = t(`items.${project.id}.description`);
  const isWip = project.isWip === true;
  const isClickable = !isWip && project.hasDetails !== false;

  const handleCardClick = () => {
    if (isClickable) {
      router.push(`/projects/${project.id}`);
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      className={`group relative h-full w-full overflow-hidden rounded-[1.75rem] border bg-zinc-950/70 p-0 shadow-2xl transition-colors duration-500 ${isWip
        ? "border-amber-500/30 hover:border-amber-500/50 shadow-amber-950/20 cursor-default"
        : isClickable
          ? "border-white/10 hover:border-white/20 cursor-pointer shadow-black/20"
          : "border-white/10 cursor-default shadow-black/20"
        }`}
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accent} opacity-80`} />

      <div className="relative z-10 flex h-full flex-col">
        <div className="relative aspect-[16/11] overflow-hidden bg-zinc-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={title}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className={`object-cover object-top scale-[1.000] [backface-visibility:hidden] will-change-transform transition-transform duration-700 ${isWip ? "opacity-75 grayscale-[20%]" : "group-hover:scale-100"
                }`}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-500">No Preview</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
          {/* Absolute bottom border overlay to prevent sub-pixel hover blinking */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-white/10 z-20 pointer-events-none" />

          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            #{projectNumber}
          </div>

          {/* WIP Badge */}
          {isWip && (
            <div className="absolute right-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-zinc-950/80 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur shadow-lg shadow-amber-950/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span>{t("wipBadge")}</span>
            </div>
          )}
        </div>

        {/* Bagian 2 (Snap Top): Judul, Deskripsi, dan Teknologi */}
        <div className="flex flex-1 flex-col p-5 md:p-6 pb-4">
          <div className="mb-3">
            <h3 className="mb-2 text-lg font-bold text-zinc-200 transition-colors group-hover:text-white md:text-xl">
              {title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400">
              {description}
            </p>
          </div>

          {/* Tech tags container: Marquee loop for >2 tags with gradient mask; static & clean for <=2 tags */}
          {(() => {
            const isMarquee = project.tech.length > 2;
            const displayTechs = isMarquee ? [...project.tech, ...project.tech] : project.tech;

            return (
              <div
                className={`relative mt-auto overflow-hidden py-1 ${isMarquee ? "[mask-image:linear-gradient(to_right,transparent_0%,black_6%,black_94%,transparent_100%)]" : ""}`}
              >
                <motion.div
                  className="flex shrink-0 gap-2 whitespace-nowrap w-max"
                  animate={isMarquee ? { x: ["0%", "-50%"] } : {}}
                  transition={
                    isMarquee
                      ? {
                        duration: Math.max(10, project.tech.length * 4),
                        repeat: Infinity,
                        ease: "linear",
                      }
                      : {}
                  }
                >
                  {displayTechs.map((tech, index) => {
                    const TechIcon = techIcons[tech]?.icon;
                    const colorClass = techIcons[tech]?.color || "text-zinc-400";

                    return (
                      <div
                        key={`${tech}-${index}`}
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300 shrink-0"
                      >
                        {TechIcon && (
                          <TechIcon className={`h-3.5 w-3.5 ${colorClass}`} />
                        )}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })()}
        </div>

        {/* Bagian 3 (Snap Bottom): Garis Pembatas Presisi dengan Margin Kiri-Kanan & Source Code / Status */}
        <div className="mt-auto shrink-0">
          <div className="mx-5 md:mx-6 border-t border-white/10" />
          <div className="flex h-14 items-center justify-between gap-3 px-5 md:px-6">
            {isWip ? (
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 cursor-default select-none">
                <Github className="h-4 w-4 text-zinc-500" />
                <span>{t("detail.soon")}</span>
              </div>
            ) : project.githubUrl ? (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white group/link"
              >
                <Github className="h-4 w-4" />
                <span>{t("detail.sourceCode")}</span>
              </Link>
            ) : null}

            {isWip ? (
              <div className="ml-auto flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                <Clock className="h-3.5 w-3.5 text-amber-400 animate-spin" style={{ animationDuration: '4s' }} />
                <span>{t("wipStatus")}</span>
              </div>
            ) : project.liveUrl ? (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="ml-auto flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white group/link"
              >
                <Globe className="h-4 w-4" />
                <span>Live Demo</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            ) : isClickable ? (
              <span className="ml-auto flex items-center gap-1.5 text-xs md:text-sm font-semibold text-zinc-400 transition-colors group-hover:text-white">
                <span>{t("detail.viewDetails")}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Card>
  );
}
