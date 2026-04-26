"use client";

import { FormEvent } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { actionLinks, profile } from "@/config/profile";
import { ActionButton } from "@/components/action-button";

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const query = String(formData.get("query") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio query from ${name || "visitor"}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", "Query:", query].join("\n")
    );

    window.location.href = `mailto:${profile.links.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="px-5 pb-32 pt-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel grid gap-8 rounded-3xl p-6 md:grid-cols-[1fr_0.74fr] md:p-10">
          <div>
            <p className="font-mono text-sm text-pulse">contact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
              Let&apos;s connect around AI workflows, tools, and useful experiments.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/66">
              Open to thoughtful conversations, useful experiments, and practical
              ways to make AI workflows easier to use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {actionLinks.map((link) => (
                <ActionButton
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={link.icon}
                />
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/72">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="focus-ring min-h-12 w-full rounded-xl border border-white/12 bg-white/[0.06] px-4 text-white placeholder:text-white/36"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/72">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="focus-ring min-h-12 w-full rounded-xl border border-white/12 bg-white/[0.06] px-4 text-white placeholder:text-white/36"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="query" className="mb-2 block text-sm font-medium text-white/72">
                  Query
                </label>
                <textarea
                  id="query"
                  name="query"
                  required
                  rows={5}
                  className="focus-ring w-full resize-none rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white placeholder:text-white/36"
                  placeholder="Tell me what you want to discuss"
                />
              </div>
              <button
                type="submit"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-signal/35 bg-signal/14 px-5 text-sm font-medium text-white shadow-glow transition hover:bg-signal/20"
              >
                <Send aria-hidden="true" className="h-4 w-4" />
                Send query
              </button>
            </form>
            <address className="mt-6 border-t border-white/10 pt-5 not-italic">
              <div className="mb-5 flex items-center gap-3 text-white">
                <div className="rounded-full border border-signal/20 bg-signal/10 p-3 text-signal">
                  <Mail aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-white/52">Preferred contact</p>
                  <a className="focus-ring mt-1 inline-flex items-center gap-2 text-white hover:text-signal" href={`mailto:${profile.links.email}`}>
                    {profile.links.email}
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
