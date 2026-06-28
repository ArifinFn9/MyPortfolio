"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { Briefcase, Award, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { socials } from "@/data/socials";

const experiencesKeys = ["bsi", "udemy", "myskill"];

export default function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <Section
      id="experience"
      className="scroll-mt-4 py-20 px-6 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center md:text-left mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600 pb-2 mb-4">
          {t("title")}
        </h2>
      </motion.div>

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
        {experiencesKeys.map((key, index) => {
          const title = t(`items.${key}.title`);
          const company = t(`items.${key}.company`);
          const period = t(`items.${key}.period`);
          const tasks = t.raw(`items.${key}.tasks`);

          return (
            <div key={key} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

              <Card
                className="p-6 md:p-8 bg-white/5 border-white/5 transition-all duration-300 hover:border-white/20 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                    {title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-mono text-zinc-300 bg-white/5 px-3 py-1 rounded-full w-fit shrink-0 whitespace-nowrap md:mt-1">
                    <Briefcase className="w-3 h-3" />
                    {period}
                  </div>
                </div>

                <p className="text-zinc-400 font-medium mb-4">{company}</p>

                <ul className="space-y-2">
                  {tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>

                {/* Certificate Button */}
                {socials.certificates && socials.certificates[key] && (
                  <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
                    <a
                      href={socials.certificates[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer group/cert"
                    >
                      <Award className="w-4 h-4 text-cyan-400 group-hover/cert:scale-110 transition-transform" />
                      <span>{t("viewCert")}</span>
                      <ExternalLink className="w-3 h-3 text-gray-500 group-hover/cert:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      </div>

        {/* Freelance CTA */}
        <Card className="mt-16 p-8 md:p-10 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/20 text-center">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity"
          >
            {t("cta.button")}
          </a>
        </Card>
    </Section>
  );
}
