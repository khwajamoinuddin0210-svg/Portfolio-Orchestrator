"use client";

import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <motion.header
      className="fixed left-4 top-4 z-50 md:left-6 md:top-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <a
        href="#top"
        className="focus-ring inline-flex min-h-11 items-center rounded-full border border-white/12 bg-black/45 px-5 font-mono text-sm font-bold tracking-[0.08em] text-white shadow-panel backdrop-blur-2xl transition hover:border-signal/35 hover:bg-white/10 hover:text-signal"
        aria-label="Go to top of portfolio"
      >
        Moinuddin
      </a>
    </motion.header>
  );
}
