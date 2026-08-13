import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { revealVariants, getRevealTransition, revealViewport } from "@/lib/motion";

export const Card = memo(({
  children,
  className,
  glow = false,
  hover = false,
  hoverBorderColor,
  initial,
  whileInView,
  transition,
  viewport,
  reveal = false,
  ...props
}) => {
  // If reveal prop is true, or if initial/whileInView props are provided, use them.
  // Otherwise, render cleanly without double-nested motion loops.
  const motionProps = reveal
    ? {
        initial: initial ?? revealVariants.initial,
        whileInView: whileInView ?? revealVariants.whileInView,
        transition: transition ?? getRevealTransition(),
        viewport: viewport ?? revealViewport,
      }
    : {
        ...(initial && { initial }),
        ...(whileInView && { whileInView }),
        ...(transition && { transition }),
        ...(viewport && { viewport }),
      };

  return (
    <motion.div
      {...motionProps}
      className={cn(
        "glass-card rounded-2xl p-6 relative overflow-hidden group transition-all [transition-duration:var(--card-hover-duration,200ms)] shadow-md border border-[var(--card-border)]",
        hover && "hover:border-[var(--card-hover-border,rgba(255,255,255,0.3))]",
        hoverBorderColor,
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
});

export default Card;
