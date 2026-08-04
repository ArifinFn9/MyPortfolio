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
  hoverBorderColor = "hover:border-white/30",
  interactive = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "glass-mini-card rounded-xl p-3.5 border transition-all duration-200 overflow-hidden group/mini",
        bgColor,
        hoverBgColor,
        borderColor,
        hoverBorderColor,
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
