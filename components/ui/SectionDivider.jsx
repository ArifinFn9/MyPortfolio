"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const SectionDivider = ({ className }) => {
  return (
    <div className={cn("max-w-6xl mx-auto px-6 my-4 md:my-8 relative z-10", className)}>
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center"
      >
        {/* Faded Ambient Gradient Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
