"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Card from "@/components/ui/Card";
import { Github, Globe, ArrowUpRight, BarChart3, FileSpreadsheet, Database } from "lucide-react";
const techIcons = {
  "Microsoft Excel": { icon: FileSpreadsheet, color: "text-green-500" },
  "Power BI": { icon: BarChart3, color: "text-yellow-500" },
  "Google Sheets": { icon: FileSpreadsheet, color: "text-green-400" },
  "Power Query": { icon: Database, color: "text-cyan-400" },
  "Excel VBA": { icon: FileSpreadsheet, color: "text-green-600" },
  "VBA Macros": { icon: FileSpreadsheet, color: "text-green-600" },
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
  const isClickable = project.hasDetails !== false;

  const handleCardClick = () => {
    if (isClickable) {
      router.push(`/${locale}/projects/${project.id}`);
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      className={`group relative h-full w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/70 p-0 shadow-2xl shadow-black/20 transition-colors duration-500 ${isClickable ? "hover:border-white/20 cursor-pointer" : "cursor-default"}`}
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${accent} opacity-80`} />

      <div className="relative z-10 flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
          {project.image ? (
            <Image
              src={project.image}
              alt={title}
              fill
              sizes="(max-w-768px) 100vw, 33vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-zinc-500">No Preview</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            #{projectNumber}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="mb-5">
            <h3 className="mb-2 text-xl font-bold text-zinc-200 transition-colors group-hover:text-white md:text-2xl">
              {title}
            </h3>
            <p className="line-clamp-3 text-sm leading-relaxed text-zinc-400 md:text-base">
              {description}
            </p>
          </div>

          <div className="mb-5 flex flex-wrap gap-2">
            {project.tech.map((tech) => {
              const TechIcon = techIcons[tech]?.icon;
              const colorClass = techIcons[tech]?.color || "text-zinc-400";

              return (
                <div
                  key={tech}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {TechIcon && (
                    <TechIcon className={`h-3.5 w-3.5 ${colorClass}`} />
                  )}
                  <span>{tech}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white group/link"
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
                onClick={(e) => e.stopPropagation()}
                className="ml-auto flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white group/link"
              >
                <Globe className="h-4 w-4" />
                <span>Live Demo</span>
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
