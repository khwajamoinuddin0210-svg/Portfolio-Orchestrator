"use client";

import { motion } from "framer-motion";
import { principles } from "@/config/profile";
import { SectionHeading } from "@/components/section-heading";

export function WorkflowPhilosophy() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="philosophy"
          title="Explore. Orchestrate. Build."
          description="A simple loop for turning AI curiosity into something more durable."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              className="rounded-2xl border border-white/10 bg-black/22 p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="mb-7 flex h-10 w-10 items-center justify-center rounded-full border border-signal/24 bg-signal/10 font-mono text-sm text-signal">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-white">{principle.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/64">{principle.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
