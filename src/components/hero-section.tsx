"use client";

import { motion } from "framer-motion";
import { actionLinks, profile } from "@/config/profile";
import { ActionButton } from "@/components/action-button";
import { StatusCard } from "@/components/status-card";

export function HeroSection() {
  return (
    <section id="top" className="mx-auto flex min-h-[88svh] w-full max-w-7xl scroll-mt-24 items-center px-5 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="grid w-full items-center gap-10 lg:grid-cols-[1.08fr_0.72fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 font-mono text-sm text-signal backdrop-blur">
            {profile.role}
          </p>
          <h1 className="text-balance max-w-5xl text-5xl font-semibold leading-[1.02] text-white md:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl font-mono text-xl leading-tight text-signal md:text-3xl">
            Data analyst exploring AI orchestration.
          </p>
          <p className="subcopy mt-6 max-w-2xl text-lg md:text-xl">
            {profile.tagline} I experiment with Claude, ChatGPT, Gemini,
            Perplexity, Google AI tools, and emerging agentic workflows.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {actionLinks.map((link) => (
              <ActionButton
                key={link.label}
                href={link.href}
                label={link.label}
                icon={link.icon}
              />
            ))}
          </div>
        </motion.div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] border border-white/8 opacity-60" />
          <StatusCard />
        </div>
      </div>
    </section>
  );
}
