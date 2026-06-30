"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { useTranslations, useLocale } from "next-intl";
import { SiReact as ReactIcon, SiNextdotjs as NextjsIcon } from "react-icons/si";
import { socials } from "@/data/socials";

// --- 3D Tilt Component ---
const Tilt = ({ children, className }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left - width / 2;
    const mouseYVal = e.clientY - rect.top - height / 2;
    x.set(mouseXVal / 10);
    y.set(mouseYVal / 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(mouseY, [ -100, 100 ], [ 15, -15 ]);
  const rotateY = useTransform(mouseX, [ -100, 100 ], [ -15, 15 ]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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

// --- Code Window with Typing Effect ---
const CodeWindow = ({ t }) => {
  return (
    <div className="w-full bg-[#0d1117]/95 rounded-xl border border-gray-800 shadow-2xl font-mono text-sm relative z-0 backdrop-blur-sm overflow-hidden transform-gpu">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-gray-500 font-medium">analyst.js</div>
        <div className="w-10" />
      </div>

      {/* Code Content */}
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
            <span className="text-gray-100">'Muhammad Arifin Fadhil Nughroho'</span>,
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
    </div>
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
      <div className="max-w-7xl mx-auto w-full px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:col-span-7"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
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

          <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight mb-6 leading-tight">
            {t.rich("title", {
              gradient: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600">{chunks}</span>,
              br: (chunks) => <br />
            })}
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg mb-10 mx-auto lg:mx-0">
            {t("desc")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link href="#projects">
              <Button className="h-12 px-8 rounded-full bg-white text-black hover:bg-gray-200 transition-colors font-medium">
                {t("viewWork")}
              </Button>
            </Link>
            <a
              href={socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 transition-all duration-200 shimmer-btn-dark"
            >
              {t("resume")}
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Code Window */}
        <div className="relative flex justify-center items-center perspective-1000 lg:col-span-5" >
          {/* Glow Effect behind window */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/5 to-zinc-800/10 blur-3xl transform scale-110 rounded-full" />

          <Tilt className="relative z-10 w-full max-w-lg">
            <CodeWindow t={t} />

            {/* Floating Icons */}
            <div className="absolute -top-6 -right-2 md:-top-10 md:-right-10 z-20">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="p-2 md:p-3 bg-[#1a1a1a] rounded-xl border border-white/10 shadow-xl"
              >
                <ReactIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-300" />
              </motion.div>
            </div>
            <div className="absolute -bottom-3 -left-2 md:-bottom-5 md:-left-5 z-20">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="p-2 md:p-3 bg-[#1a1a2e] rounded-xl border border-white/10 shadow-xl"
              >
                <NextjsIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </motion.div>
            </div>

            {/* Orbiting Icons */}
            {/* <OrbitIcon Icon={SiTypescript} color="text-blue-500" delay={0} radius={180} />
                <OrbitIcon Icon={SiTailwindcss} color="text-cyan-400" delay={5} radius={220} />
                <OrbitIcon Icon={SiNodedotjs} color="text-green-500" delay={10} radius={260} /> */}
          </Tilt>
        </div>
      </div>
      </section>
  );
}
