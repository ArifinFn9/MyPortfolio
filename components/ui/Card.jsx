"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Card = ({
  children,
  className,
  glow = true,
  hover = true,
  hoverBorderColor,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } } : undefined}
      className={cn(
        "glass-card backdrop-blur-[var(--card-blur)] rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 shadow-lg border border-[var(--card-border)] hover:border-[var(--card-hover-border,rgba(255,255,255,0.3))]",
        hover && "hover:shadow-xl hover:shadow-black/40",
        hoverBorderColor,
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default Card;
