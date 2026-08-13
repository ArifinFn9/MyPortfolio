// Centralized Animation Config for Pure Magic UI / Vercel Blur Fade Motion
export const MOTION_CONFIG = {
  blurAmount: "12px",
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1], // Exact Magic UI Deceleration Curve
  viewportAmount: 0.2,
  viewportMargin: "0px 0px -40px 0px",
};

export const revealVariants = {
  initial: {
    opacity: 0,
    y: 12,
    filter: "blur(12px)",
  },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export const containerStaggerVariants = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const revealViewport = {
  once: true,
  amount: MOTION_CONFIG.viewportAmount,
  margin: MOTION_CONFIG.viewportMargin,
};

export const getRevealTransition = (delay = 0, overrideDuration = null) => ({
  duration: overrideDuration ?? MOTION_CONFIG.duration,
  delay,
  ease: MOTION_CONFIG.ease,
});
