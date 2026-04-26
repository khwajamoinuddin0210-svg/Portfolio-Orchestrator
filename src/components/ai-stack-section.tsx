"use client";

import { motion } from "framer-motion";
import { aiTools } from "@/config/profile";
import { SectionHeading } from "@/components/section-heading";

export function AiStackSection() {
  return (
    <section id="stack" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="ai stack"
          title="A living map of tools and workflows."
          description="The stack changes as the field changes, but the operating principle stays steady: test tools by what they help you do."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aiTools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <motion.article
                key={tool.name}
                className="group relative min-h-56 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:border-signal/40 hover:bg-white/[0.075]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.03, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-white/10 bg-black/24 p-3 text-signal transition group-hover:border-signal/30">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/58">
                    {tool.signal}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{tool.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/62">{tool.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
