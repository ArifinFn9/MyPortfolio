"use client";

import { Link, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { projects } from "@/data/projects";
import Image from "next/image";
import { 
  ArrowLeft, 
  Github, 
  Globe, 
  CheckCircle2, 
  FileSpreadsheet, 
  BarChart3, 
  Database,
  Calendar,
  Briefcase,
  Tag,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import Section from "@/components/ui/Section";

const techIcons = {
  "Microsoft Excel": { icon: FileSpreadsheet, color: "text-green-500" },
  "Power BI": { icon: BarChart3, color: "text-yellow-500" },
  "Google Sheets": { icon: FileSpreadsheet, color: "text-green-400" },
  "Power Query": { icon: Database, color: "text-cyan-400" },
  "Excel VBA": { icon: FileSpreadsheet, color: "text-green-600" },
  "VBA Macros": { icon: FileSpreadsheet, color: "text-green-600" },
};

export default function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const locale = params.locale;
  const t = useTranslations("projects");

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-black text-white mb-4">Project Not Found</h1>
        <Link 
          href={`/${locale}`}
          className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all"
        >
          Return Home
        </Link>
      </main>
    );
  }

  const title = t(`items.${project.id}.title`);
  const description = t(`items.${project.id}.description`);
  const problem = t(`items.${project.id}.problem`);
  const solution = t(`items.${project.id}.solution`);
  const impact = t(`items.${project.id}.impact`);

  let steps = [];
  try {
    const rawSteps = t.raw(`items.${project.id}.steps`);
    if (Array.isArray(rawSteps)) {
      steps = rawSteps;
    }
  } catch (e) {
    console.error("Failed to load steps:", e);
  }

  const period = "2025";
  const metrics = project.metrics || [];
  const ratios = project.ratios || [];
  const financialStatement = project.financialStatement || [];

  return (
    <main className="min-h-screen pt-24 md:pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-[1000px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <Section className="max-w-6xl mx-auto">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (typeof window !== "undefined" && window.history.length > 1 && document.referrer && document.referrer.includes(window.location.host)) {
              router.back();
            } else {
              router.push('/#projects');
            }
          }}
          className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-300 hover:text-white hover:border-white/20 transition-all cursor-pointer mb-6 md:mb-8 text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{t("detail.back")}</span>
        </button>

        {/* Header Title Section */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            {title}
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Cover Preview Image */}
        <div className="relative aspect-[16/9] w-full bg-zinc-900 border border-white/10 rounded-[1.75rem] overflow-hidden mb-10 md:mb-14 shadow-2xl">
          {project.image ? (
            <Image
              src={project.image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 960px"
              className="object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-zinc-500">
              No Preview Available
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* KPI Metrics Cards */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
            {metrics.map((metric, idx) => {
              // Localize labels for Indonesian
              let displayLabel = metric.label;
              if (locale === "id") {
                const labelsMap = {
                  "Revenue": "Pendapatan",
                  "Net Profit": "Laba Bersih",
                  "Current Ratio": "Rasio Lancar",
                  "Debt-to-Equity": "Rasio Utang/Ekuitas (DER)",
                };
                displayLabel = labelsMap[metric.label] || metric.label;
              }

              // Localize values (Million M to Million Jt for ID and change decimal dots to commas)
              const displayValue = locale === "id"
                ? metric.value.replace(/\bM\b/g, "Jt").replace(/\./g, ",")
                : metric.value;

              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-4 md:p-5 space-y-2"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    {displayLabel}
                  </p>
                  <p className="text-xl md:text-2xl font-black text-white tracking-tight">
                    {displayValue}
                  </p>
                  <div className={`inline-flex items-center gap-1 text-xs font-bold ${metric.up ? 'text-emerald-400' : 'text-red-400'}`}>
                    {metric.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    <span>{metric.change.replace(/\./g, ",")}</span>
                    <span className="text-zinc-600 font-medium ml-0.5">YoY</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Left Column: Case Study Details (8 cols) */}
          <div className="lg:col-span-8 space-y-10 md:space-y-12">
            {/* Problem & Context */}
            {problem && (
              <div className="space-y-3">
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white border-b border-white/5 pb-2">
                  {t("detail.problemTitle")}
                </h2>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed pt-1">
                  {problem}
                </p>
              </div>
            )}

            {/* Analysis Steps (Timeline-like vertical steps) */}
            {steps.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white border-b border-white/5 pb-2">
                  {t("detail.stepsTitle")}
                </h2>
                <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 pt-2">
                  {steps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Circle indicator */}
                      <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-zinc-950 border border-white/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-black text-zinc-500 uppercase tracking-widest">
                          Step {idx + 1}
                        </span>
                        <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Financial Ratios Table */}
            {ratios.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white border-b border-white/5 pb-2">
                  {locale === "id" ? "Tabel Rasio Keuangan" : "Financial Ratios Table"}
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-xl">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-white/[0.04]">
                        <th className="text-left text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 md:px-5 py-3.5">
                          {locale === "id" ? "Rasio" : "Ratio"}
                        </th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 md:px-5 py-3.5">2023</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 md:px-5 py-3.5">2024</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 md:px-5 py-3.5">2025</th>
                        <th className="text-center text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 md:px-5 py-3.5">Trend</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {ratios.map((ratio, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 md:px-5 py-3.5 text-zinc-300 font-medium">{ratio.name}</td>
                          <td className="px-4 md:px-5 py-3.5 text-right text-zinc-400 font-mono text-xs">{ratio.y2023}</td>
                          <td className="px-4 md:px-5 py-3.5 text-right text-zinc-400 font-mono text-xs">{ratio.y2024}</td>
                          <td className="px-4 md:px-5 py-3.5 text-right text-white font-mono text-xs font-bold">{ratio.y2025}</td>
                          <td className="px-4 md:px-5 py-3.5 text-center">
                            {ratio.status === 'up' ? (
                              <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold">
                                <TrendingUp className="w-3.5 h-3.5" />
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-red-400 text-xs font-bold">
                                <TrendingDown className="w-3.5 h-3.5" />
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Detail Financial Statement Table */}
            {financialStatement.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white border-b border-white/5 pb-2">
                  {locale === "id" ? "Detail Laporan Keuangan" : "Detail Financial Statement"}
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-xl">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-white/[0.04]">
                        <th className="text-left text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 py-3.5 pl-5">{locale === "id" ? "Tahun" : "Year"}</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 py-3.5">{locale === "id" ? "Pendapatan" : "Revenue"}</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 py-3.5">{locale === "id" ? "Laba Bersih" : "Net Profit"}</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 py-3.5">{locale === "id" ? "Laba Kotor" : "Gross Profit"}</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 py-3.5">{locale === "id" ? "Total Aset" : "Total Assets"}</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 py-3.5">{locale === "id" ? "Total Ekuitas" : "Total Equity"}</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 py-3.5">DER</th>
                        <th className="text-right text-xs font-bold uppercase tracking-wider text-zinc-400 px-4 py-3.5 pr-5">NPM</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {financialStatement.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-3.5 pl-5 text-white font-bold">{row.year}</td>
                          <td className="px-4 py-3.5 text-right text-zinc-300 font-mono text-xs">{row.revenue}</td>
                          <td className="px-4 py-3.5 text-right text-zinc-300 font-mono text-xs">{row.netProfit}</td>
                          <td className="px-4 py-3.5 text-right text-zinc-300 font-mono text-xs">{row.grossProfit}</td>
                          <td className="px-4 py-3.5 text-right text-zinc-300 font-mono text-xs">{row.totalAssets}</td>
                          <td className="px-4 py-3.5 text-right text-zinc-300 font-mono text-xs">{row.totalEquity}</td>
                          <td className="px-4 py-3.5 text-right text-zinc-300 font-mono text-xs">{row.der}</td>
                          <td className="px-4 py-3.5 text-right text-white font-mono text-xs font-bold pr-5">{row.npm}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-zinc-500 font-medium italic mt-2.5">
                  {locale === "id"
                    ? "*Catatan: Seluruh nilai mata uang Rupiah di atas disajikan dalam Jutaan Rupiah (kecuali DER & NPM)"
                    : "*Note: All Rupiah currency values above are presented in Millions of Rupiah (except DER & NPM)"}
                </p>
              </div>
            )}

            {/* Solution & Implementation */}
            {solution && (
              <div className="space-y-3">
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white border-b border-white/5 pb-2">
                  {t("detail.solutionTitle")}
                </h2>
                <p className="text-zinc-300 text-base md:text-lg leading-relaxed pt-1">
                  {solution}
                </p>
              </div>
            )}

            {/* Results & Impact */}
            {impact && (
              <div className="space-y-4">
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white border-b border-white/5 pb-2">
                  {t("detail.impactTitle")}
                </h2>
                <div className="flex items-start gap-4 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 shadow-xl">
                  <CheckCircle2 className="w-6 h-6 text-white shrink-0 mt-0.5" />
                  <p className="text-zinc-200 text-base md:text-lg leading-relaxed">
                    {impact}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Metadata Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 md:sticky md:top-28">
            {/* Meta details card */}
            <div className="p-6 md:p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 space-y-6">
              <h3 className="text-md font-black uppercase tracking-[0.2em] text-white border-b border-white/5 pb-3">
                {t("detail.projectInfo")}
              </h3>

              {/* Attributes list */}
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-0.5">{t("detail.role")}</p>
                    <p className="text-zinc-300 font-semibold truncate">{t("detail.roleVal")}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-0.5">{t("detail.period")}</p>
                    <p className="text-zinc-300 font-semibold truncate">{period}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Tag className="w-4 h-4 text-zinc-500 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-0.5">{t("detail.category")}</p>
                    <p className="text-zinc-300 font-semibold truncate">{t("detail.categoryVal")}</p>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3 pt-2">
                <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{t("detail.tools")}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => {
                    const TechIcon = techIcons[tech]?.icon;
                    const colorClass = techIcons[tech]?.color || "text-zinc-400";
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-zinc-300"
                      >
                        {TechIcon && <TechIcon className={`h-3.5 w-3.5 ${colorClass}`} />}
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Direct Links section */}
            <div className="flex flex-col gap-3">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full border border-white/10 hover:bg-white/5 text-sm font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer"
                >
                  <Github className="h-4 w-4" />
                  <span>{t("detail.sourceCode")}</span>
                </Link>
              )}

              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white hover:bg-gray-200 text-sm font-black text-black transition-all active:scale-95 duration-150 cursor-pointer"
                >
                  <Globe className="h-4 w-4" />
                  <span>{t("detail.liveDemo")}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              )}
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}
