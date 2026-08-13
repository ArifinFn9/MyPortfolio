"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { revealVariants, getRevealTransition, revealViewport } from "@/lib/motion";

export default function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
  children,
}) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={revealVariants.initial}
      whileInView={revealVariants.whileInView}
      transition={getRevealTransition()}
      viewport={revealViewport}
      className={cn(
        "mb-10 md:mb-12",
        isCentered ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-400 pb-2 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-gray-400 max-w-xl lg:max-w-3xl text-sm md:text-lg leading-relaxed",
            isCentered ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
