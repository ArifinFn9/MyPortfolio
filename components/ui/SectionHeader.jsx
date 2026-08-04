"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className={cn(
        "mb-10 md:mb-12",
        isCentered ? "text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-600 pb-2 mb-4">
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
