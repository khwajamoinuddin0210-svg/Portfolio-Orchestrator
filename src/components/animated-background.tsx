"use client";

import { motion, useReducedMotion } from "framer-motion";

export function AnimatedBackground() {
  const reducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade opacity-75" />
      <div className="background-grid absolute inset-0" />
      <motion.div
        className="orbit-ring absolute left-1/2 top-[9%] h-[580px] w-[580px] -translate-x-1/2 rounded-full"
        animate={reducedMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-signal/70 shadow-[0_0_22px_rgba(158,230,255,0.48)]" />
        <div className="absolute bottom-10 left-24 h-1.5 w-1.5 rounded-full bg-pulse/70 shadow-[0_0_18px_rgba(188,248,210,0.42)]" />
      </motion.div>
      <motion.div
        className="orbit-ring absolute left-[52%] top-[18%] h-[360px] w-[360px] -translate-x-1/2 rounded-full opacity-70"
        animate={reducedMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute right-8 top-14 h-1.5 w-1.5 rounded-full bg-flare/70 shadow-[0_0_18px_rgba(247,183,255,0.42)]" />
      </motion.div>
      <div className="page-fade absolute inset-x-0 bottom-0 h-48" />
    </div>
  );
}
