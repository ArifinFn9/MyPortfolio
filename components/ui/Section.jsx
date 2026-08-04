"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Section = ({ children, className, id, delay = 0 }) => {
  return (
    <section id={id} className={cn("relative w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
