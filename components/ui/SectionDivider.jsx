"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const SectionDivider = ({ className }) => {
  return (
    // 1. Mengubah max-w-6xl & px-6 menjadi w-full agar mepet ujung layar
    <div className={cn("w-full my-4 md:my-8 relative z-10", className)}>
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative flex items-center justify-center"
      >
        {/* 2. Menyesuaikan warna gradien agar terlihat di Light & Dark Mode */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-400/30 to-transparent" />
      </motion.div>
    </div>
  );
};


export default SectionDivider;
