"use client";

import { useState } from "react";
import { BarChart3, ChevronDown, ExternalLink, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { modelWatch } from "@/config/profile";
import { cn } from "@/lib/utils";

export function ModelWatch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed inset-x-4 top-20 z-50 mx-auto max-w-md md:top-4"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        className="focus-ring group flex min-h-11 w-full items-center justify-between gap-3 rounded-full border border-white/12 bg-black/45 px-4 text-left shadow-panel backdrop-blur-2xl transition hover:border-signal/35 hover:bg-white/10"
      >
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-signal/25 bg-signal/10 text-signal">
            <Trophy aria-hidden="true" className="h-4 w-4" />
          </span>
          <span className="min-w-0">
            <span className="block font-mono text-[11px] uppercase text-signal">
              {modelWatch.label}
            </span>
            <span className="block truncate text-sm font-semibold text-white">
              {modelWatch.model}
            </span>
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 shrink-0 text-white/58 transition group-hover:text-signal",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>

      {isOpen ? (
        <div className="mt-3 overflow-hidden rounded-2xl border border-white/12 bg-black/70 p-4 shadow-panel backdrop-blur-2xl">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-pulse">{modelWatch.category}</p>
              <h2 className="mt-1 text-lg font-semibold text-white">{modelWatch.model}</h2>
              <p className="mt-1 text-xs text-white/52">{modelWatch.updated}</p>
            </div>
            <BarChart3 aria-hidden="true" className="mt-1 h-5 w-5 text-signal" />
          </div>
          <div className="grid gap-2">
            {modelWatch.benchmarks.map((benchmark) => (
              <div
                key={benchmark.label}
                className="rounded-xl border border-white/10 bg-white/[0.055] p-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium text-white">{benchmark.label}</p>
                  <p className="shrink-0 font-mono text-xs text-signal">{benchmark.value}</p>
                </div>
                <p className="mt-1 text-xs text-white/54">{benchmark.source}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-5 text-white/58">{modelWatch.note}</p>
          <a
            href={modelWatch.sourceHref}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-medium text-signal hover:text-white"
          >
            View source leaderboard
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      ) : null}
    </motion.div>
  );
}
