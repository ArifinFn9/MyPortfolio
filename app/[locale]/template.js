"use client";

import { motion } from "framer-motion";
import { getRevealTransition } from "@/lib/motion";

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={getRevealTransition(0, 0.45)}
    >
      {children}
    </motion.div>
  );
}
