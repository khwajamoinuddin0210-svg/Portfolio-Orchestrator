"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/config/profile";
import { cn } from "@/lib/utils";

export function FloatingDock() {
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    let animationFrame = 0;

    function updateActiveSection() {
      const activationLine = window.innerHeight * 0.58;
      const activeSection = sections
        .filter((section) => {
        const bounds = section.getBoundingClientRect();

          return bounds.top <= activationLine && bounds.bottom > 96;
        })
        .at(-1);

      setActiveHref(activeSection ? `#${activeSection.id}` : "");
    }

    function scheduleUpdate() {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      animationFrame = window.requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <motion.nav
      aria-label="Primary navigation"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-full border border-white/12 bg-black/45 px-2 py-2 shadow-panel backdrop-blur-2xl md:bottom-6"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ul className="grid grid-cols-5 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeHref === item.href;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "focus-ring group flex min-h-12 items-center justify-center gap-2 rounded-full px-2 text-sm transition hover:bg-white/10 hover:text-white md:px-4",
                  isActive
                    ? "bg-signal/14 text-white shadow-[inset_0_0_0_1px_rgba(158,230,255,0.22)]"
                    : "text-white/62"
                )}
                title={item.label}
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "h-4 w-4 transition group-hover:text-signal",
                    isActive ? "text-signal" : ""
                  )}
                />
                <span className="hidden sm:inline">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
