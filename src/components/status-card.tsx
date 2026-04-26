"use client";

import { motion } from "framer-motion";
import { Activity, CircleDot } from "lucide-react";
import { currentExperiments } from "@/config/profile";

export function StatusCard() {
  return (
    <motion.aside
      className="glass-panel relative overflow-hidden rounded-2xl p-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/70 to-transparent" />
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-pulse">currently experimenting with</p>
          <h2 className="mt-2 text-lg font-semibold text-white">AI workflow lab</h2>
        </div>
        <div className="rounded-full border border-pulse/20 bg-pulse/10 p-3 text-pulse">
          <Activity aria-hidden="true" className="h-5 w-5" />
        </div>
      </div>
      <ul className="space-y-3">
        {currentExperiments.map((experiment) => (
          <li key={experiment} className="flex items-start gap-3 text-sm text-white/72">
            <CircleDot aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
            <span>{experiment}</span>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
