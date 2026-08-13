"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Link } from "@/i18n/routing";
import { Typewriter } from "react-simple-typewriter";
import { useTranslations, useLocale } from "next-intl";
import { socials } from "@/data/socials";
import { FileText, ArrowUpRight, Play, RotateCcw, Terminal, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { ExcelIcon, PowerBIIcon } from "@/components/icons/TechIcons";
import { revealVariants, getRevealTransition } from "@/lib/motion";

// --- 3D Tilt & Floating Component ---
const Tilt = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 220, damping: 22 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left - width / 2;
    const mouseYVal = e.clientY - rect.top - height / 2;
    x.set(mouseXVal / 8);
    y.set(mouseYVal / 8);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(mouseY, [-100, 100], [12, -12]);
  const rotateY = useTransform(mouseX, [-100, 100], [-12, 12]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: 0, scale: 1.005 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// --- Orbiting Icons ---
const OrbitIcon = ({ Icon, color, delay, radius }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
    style={{ width: radius * 2, height: radius * 2 }}
  >
    <motion.div
      className="absolute top-0 left-1/2 -translate-x-1/2"
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
    >
      <div
        className={`p-3 rounded-full bg-[#1a1a2e]/80 border border-white/10 backdrop-blur-md shadow-lg ${color}`}
      >
        <Icon className="w-6 h-6" />
      </div>
    </motion.div>
  </motion.div>
);

// --- Code Window with Interactive Easter Eggs & Terminal Mode ---
const CodeWindow = ({ t }) => {
  const [isTerminalMode, setIsTerminalMode] = useState(false);
  const [terminalStep, setTerminalStep] = useState(0);
  const [shake, setShake] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Handle Red Dot 🔴 (Shake & Toast)
  const handleRedClick = () => {
    setShake(true);
    setToastMessage("// Hey! Don't close me, I'm working hard! 😅");
    setTimeout(() => setShake(false), 400);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Handle Run Code Execution
  const handleRunCode = () => {
    setIsTerminalMode(true);
    setTerminalStep(0);
  };

  // Handle Terminal Line Animation Steps
  useEffect(() => {
    if (isTerminalMode) {
      const timer1 = setTimeout(() => setTerminalStep(1), 500);
      const timer2 = setTimeout(() => setTerminalStep(2), 1200);
      const timer3 = setTimeout(() => setTerminalStep(3), 2000);
      const timer4 = setTimeout(() => setTerminalStep(4), 2800);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [isTerminalMode]);

  return (
    <Card className={`w-full font-mono text-sm relative z-0 overflow-hidden !p-0 transition-all duration-300 ${shake ? "animate-shake" : ""}`}>
      {/* Toast Floating Alert Banner */}
      {toastMessage && (
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30 px-3.5 py-1.5 rounded-full bg-zinc-900/95 border border-white/20 text-xs font-mono text-emerald-400 shadow-xl flex items-center gap-2 animate-bounce whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Window Header  */}
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10 select-none">
        {/* Mac Dots */}
        <div className="flex gap-2 items-center w-16">
          <button
            onClick={handleRedClick}
            title="Click to shake!"
            className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 hover:scale-125 transition-all cursor-pointer"
          />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>

        {/* Tab Name (Centered) */}
        <div className="flex-1 flex items-center justify-center text-xs text-gray-400 font-medium gap-1.5 text-center">
          {isTerminalMode ? (
            <>
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Terminal — analyst.output</span>
            </>
          ) : (
            <span>analyst.js</span>
          )}
        </div>

        {/* Action Button: Run / Code Mode (Borderless Icon Only) */}
        <div className="flex justify-end w-16">
          {isTerminalMode ? (
            <button
              onClick={() => setIsTerminalMode(false)}
              title="Back to Code"
              className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleRunCode}
              title="Execute analyst.analyze()"
              className="p-1 rounded-md text-emerald-400 hover:bg-emerald-500/10 hover:scale-110 active:scale-95 transition-all cursor-pointer group/run"
            >
              <Play className="w-3.5 h-3.5 fill-emerald-400" />
            </button>
          )}
        </div>
      </div>

      {/* Window Body */}
      {isTerminalMode ? (
        /* Terminal Output Mode */
        <div className="p-6 text-zinc-300 overflow-hidden relative text-xs md:text-sm leading-relaxed min-h-[260px] bg-black/40">
          <div className="space-y-3 font-mono">
            <div className="text-zinc-400 flex items-center gap-2">
              <span className="text-emerald-400 font-bold">&gt;</span>
              <span>analyst.analyze()</span>
            </div>

            {terminalStep >= 1 && (
              <div className="text-zinc-300 flex items-center gap-2">
                <span className="text-blue-400">[1/3]</span>
                <span>⚡ Fetching financial &amp; analytics datasets...</span>
                <span className="text-emerald-400 text-xs font-bold">OK</span>
              </div>
            )}

            {terminalStep >= 2 && (
              <div className="text-zinc-300 flex items-center gap-2">
                <span className="text-yellow-400">[2/3]</span>
                <span>📊 Building interactive dashboards &amp; financial models...</span>
                <span className="text-emerald-400 text-xs font-bold">OK</span>
              </div>
            )}

            {terminalStep >= 3 && (
              <div className="text-zinc-300 flex items-center gap-2">
                <span className="text-purple-400">[3/3]</span>
                <span>💡 Generating actionable business insights...</span>
                <span className="text-emerald-400 text-xs font-bold">DONE!</span>
              </div>
            )}

            {terminalStep >= 4 && (
              <div className="mt-4 pt-3 border-t border-white/10 text-emerald-400 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Status: 200 OK — Arifin is ready to collaborate with you! ☕</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Code Editor Mode */
        <div className="p-6 text-gray-300 overflow-hidden relative text-xs md:text-sm leading-relaxed">
          <div className="space-y-1">
            <div>
              <span className="text-gray-400">const</span>{" "}
              <span className="text-white">analyst</span>{" "}
              <span className="text-gray-500">=</span>{" "}
              <span className="text-gray-400">{"{"}</span>
            </div>
            <div className="pl-4">
              <span className="text-gray-300">name</span>:{" "}
              <span className="text-gray-100">'Muhammad Arifin Fadhil Nugroho'</span>,
            </div>
            <div className="pl-4">
              <span className="text-gray-300">education</span>:{" "}
              <span className="text-gray-100">
                {`'${t("devWindow.education")}'`}
              </span>
              ,
            </div>
            <div className="pl-4">
              <span className="text-gray-300">role</span>:{" "}
              <span className="text-gray-100">{`'${t("devWindow.role")}'`}</span>,
            </div>
            <div className="pl-4">
              <span className="text-gray-300">skills</span>:{" "}
              <span className="text-gray-400">{"["}</span>
              {t.raw("devWindow.skills").map((skill, index, arr) => (
                <span key={skill}>
                  <span className="text-gray-100">{`'${skill}'`}</span>
                  {index < arr.length - 1 ? <span className="text-gray-400">, </span> : ""}
                </span>
              ))}
              <span className="text-gray-400">{"]"}</span>,
            </div>
            <div className="pl-4">
              <span className="text-gray-300">passion</span>:{" "}
              <span className="text-gray-100">
                <Typewriter
                  words={[
                    `'${t("devWindow.passion1")}'`,
                    `'${t("devWindow.passion2")}'`,
                    `'${t("devWindow.passion3")}'`,
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <div>
              <span className="text-gray-400">{"}"}</span>;
            </div>
            <div className="mt-4 text-gray-500">
              <span className="text-gray-400">if</span> (
              <span className="text-white">data</span>.
              <span className="text-gray-400">hasInsights</span>) {"{"}
            </div>
            <div className="pl-4">
              <span className="text-white">analyst</span>.
              <span className="text-gray-400">analyze</span>();
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-16 lg:pb-0 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: { staggerChildren: 0.06, delayChildren: 0.05 },
            },
          }}
          className="text-center lg:text-left lg:col-span-7"
        >
          <motion.div
            variants={revealVariants}
            transition={getRevealTransition()}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">
              {t("available")}
            </span>
          </motion.div>

          <motion.h1
            variants={revealVariants}
            transition={getRevealTransition()}
            className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6 leading-tight"
          >
            {t.rich("title", {
              accent: (chunks) =>
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 ">
                  {chunks}
                </span>,
            })}
          </motion.h1>

          <motion.p
            variants={revealVariants}
            transition={getRevealTransition()}
            className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0"
          >
            {t("desc")}
          </motion.p>

          <motion.div
            variants={revealVariants}
            transition={getRevealTransition()}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", "#projects");
                }
              }}
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0, ease: [0.16, 1, 0.3, 1] }}
                className="h-12 px-7 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group/work"
              >
                <span>{t("viewWork")}</span>
                <ArrowUpRight className="w-4 h-4 text-black group-hover/work:translate-x-0.5 group-hover/work:-translate-y-0.5 transition-transform" />
              </motion.button>
            </Link>

            <motion.a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-300 shimmer-btn-dark cursor-pointer group/cv"
            >
              <FileText className="w-4 h-4 text-zinc-400 group-hover/cv:text-white transition-colors" />
              <span>{t("resume")}</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Code Window */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={revealVariants}
          transition={getRevealTransition(0.1)}
          className="relative flex justify-center items-center perspective-1000 lg:col-span-5"
        >
          {/* Glow Effect behind window */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/5 to-zinc-800/10 blur-md transform scale-110 rounded-full pointer-events-none" />

          <Tilt className="relative z-10 w-full max-w-lg">
            <CodeWindow t={t} />

            {/* Floating Icons */}
            <div className="absolute -top-6 -right-2 md:-right-10 z-20">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-2 md:p-3 bg-[#21a366]/5 rounded-xl border border-[#21a366]/20 shadow-xl group cursor-pointer hover:border-[#21a366]/40 hover:bg-[#21a366]/10 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <ExcelIcon className="w-6 h-6 md:w-6 md:h-6 text-[#21a366] transition-transform duration-300 group-hover:scale-110" />
              </motion.div>
            </div>
            <div className="absolute -bottom-3 -left-2 md:-bottom-6 md:-left-5 z-20">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="p-2 md:p-3 bg-[#f29f05]/5 rounded-xl border border-[#f29f05]/20 shadow-xl group cursor-pointer hover:border-[#f29f05]/40 hover:bg-[#f29f05]/10 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <PowerBIIcon className="w-6 h-6 md:w-6 md:h-6 text-[#f29f05] transition-transform duration-300 group-hover:scale-110" />
              </motion.div>
            </div>

            {/* Orbiting Icons */}
            {/* <OrbitIcon Icon={SiTypescript} color="text-blue-500" delay={0} radius={180} />
                <OrbitIcon Icon={SiTailwindcss} color="text-cyan-400" delay={5} radius={220} />
                <OrbitIcon Icon={SiNodedotjs} color="text-green-500" delay={10} radius={260} /> */}
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}
