"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MiniCard = ({
  children,
  className,
  bgColor = "bg-white/5",
  hoverBgColor = "hover:bg-white/10",
  borderColor = "border-white/10",
  hoverBorderColor = "hover:border-[var(--card-hover-border,rgba(255,255,255,0.3))]",
  hover = true,
  interactive = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass-mini-card rounded-xl p-3.5 border transition-all [transition-duration:var(--mini-card-hover-duration,200ms)] overflow-hidden group/mini",
        bgColor,
        hoverBgColor,
        borderColor,
        hover && hoverBorderColor,
        interactive && "active:scale-[0.98] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default MiniCard;
