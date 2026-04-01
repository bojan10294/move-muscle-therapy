"use client";

import { motion } from "framer-motion";

interface Props {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`section-scroll-mt ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
