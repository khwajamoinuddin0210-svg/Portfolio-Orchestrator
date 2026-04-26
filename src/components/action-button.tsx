import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ActionButtonProps = {
  href: string;
  label: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
};

export function ActionButton({
  href,
  label,
  icon: Icon,
  variant = "secondary"
}: ActionButtonProps) {
  const opensNewPage = href.startsWith("http");

  return (
    <a
      href={href}
      target={opensNewPage ? "_blank" : undefined}
      rel={opensNewPage ? "noreferrer" : undefined}
      className={cn(
        "focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-5 text-sm font-medium transition",
        variant === "primary"
          ? "border-signal/35 bg-signal/14 text-white shadow-glow hover:bg-signal/20"
          : "border-white/14 bg-white/6 text-white/78 hover:border-signal/35 hover:bg-signal/14 hover:text-white"
      )}
    >
      <Icon aria-hidden="true" className="h-4 w-4 transition group-hover:text-signal" />
      {label}
    </a>
  );
}
