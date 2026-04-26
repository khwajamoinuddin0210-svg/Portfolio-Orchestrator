"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "portfolio-theme";

function getStoredTheme(): "dark" | "light" {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.localStorage.getItem(storageKey) === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(getStoredTheme());
    });

    function handleStorage(event: StorageEvent) {
      if (event.key === storageKey) {
        setTheme(getStoredTheme());
      }
    }

    window.addEventListener("storage", handleStorage);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";

    window.localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  const isLight = theme === "light";
  const Icon = isLight ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring fixed right-4 top-4 z-50 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-black/45 px-4 text-sm font-medium text-white/78 shadow-panel backdrop-blur-2xl transition hover:bg-white/10 hover:text-white md:right-6 md:top-6"
      aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
    >
      <Icon aria-hidden="true" className="h-4 w-4 text-signal" />
      <span>{isLight ? "Dark" : "Light"}</span>
    </button>
  );
}
