"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Briefcase, Award, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { socials } from "@/data/socials";
import { usePreview } from "@/components/PreviewProvider";

const experiencesKeys = ["bsi", "udemy", "myskill"];

export default function ExperiencePage() {
  const t = useTranslations("experience");
  const { openPreview } = usePreview();

  const handleCertClick = (e, key, title, period) => {
    e.preventDefault();
    const url = socials.certificates[key];
    if (url && (url.startsWith("http://") || url.startsWith("https://")) && !url.endsWith(".pdf") && !url.endsWith(".png") && !url.endsWith(".jpg") && !url.endsWith(".jpeg")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    let cleanTitle = title;
    let type = "";
    if (title.includes(" (")) {
      const parts = title.split(" (");
      cleanTitle = parts[0];
      type = parts[1].replace(")", "");
    }
    const yearMatch = period.match(/\b\d{4}\b/);
    const year = yearMatch ? yearMatch[0] : "2025";

    openPreview({
      url: url,
      title: cleanTitle,
      type: type,
      year: year,
    });
  };

  return (
    <main className="min-h-screen pt-12 md:pt-32 pb-20 px-6 relative overflow-hidden">
      <Section className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600 pb-2 mb-4 text-center md:text-left">
          {t("title")}
        </h2>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {experiencesKeys.map((key, index) => {
            const title = t(`items.${key}.title`);
            const company = t(`items.${key}.company`);
            const period = t(`items.${key}.period`);
            const tasks = t.raw(`items.${key}.tasks`);

            return (
              <div key={key} className="relative pl-8 md:pl-12 group/timeline">
                {/* Timeline Dot */}
                <div className="absolute -left-[6px] top-0 w-3 h-3 rounded-full bg-white/30 scale-90 transition-all duration-300 timeline-dot" />

                <Card
                  className="p-6 md:p-8 transition-all duration-300 hover:border-white/20 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 shrink-0 flex items-center justify-center overflow-hidden p-1.5">
                        <img
                          src={
                            key === 'bsi'
                              ? '/assets/logo-bsi.svg'
                              : key === 'udemy'
                                ? '/assets/logo-udemy.svg'
                                : '/assets/logo-myskill.svg'
                          }
                          alt={company}
                          className="w-full h-full object-contain filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div style={{ display: 'none' }} className="text-gray-500 group-hover:text-white transition-colors duration-300">
                          {key === 'bsi' ? <Briefcase className="w-5 h-5" /> : <Award className="w-5 h-5" />}
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-white transition-colors">
                        {title}
                      </h3>
                    </div>
                    <div className="text-sm font-mono text-gray-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit shrink-0 whitespace-nowrap md:mt-1">
                      {period}
                    </div>
                  </div>

                  <p className="text-gray-300 font-semibold mb-4">
                    {company}
                  </p>

                  <ul className="space-y-2">
                    {tasks.map((task, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-400"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>

                  {/* Certificate Button */}
                  {socials.certificates && socials.certificates[key] && (
                    <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                      <button
                        onClick={(e) => handleCertClick(e, key, title, period)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer group/cert"
                      >
                        <Award className="w-4 h-4 text-zinc-400 group-hover/cert:scale-110 transition-transform" />
                        <span>{t("viewCert")}</span>
                        <ExternalLink className="w-3 h-3 text-gray-500 group-hover/cert:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  )}
                </Card>
              </div>
            );
          })}
        </div>

        {/* Freelance CTA */}
        <Card className="mt-16 p-8 md:p-10 bg-zinc-900/40 border border-white/10 relative overflow-hidden text-center">
          <div className="flex justify-center mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t("cta.title")}
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
            {t("cta.desc")}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 active:scale-95 duration-150 transition-all shadow-md"
          >
            {t("cta.button")}
          </a>
        </Card>
      </Section>
    </main>
  );
}
