import { CalendarDays, Radio } from "lucide-react";
import { aiNews } from "@/config/profile";
import { SectionHeading } from "@/components/section-heading";

const hasConfiguredFeed = false;

export function NewsSection() {
  return (
    <section id="news" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="ai news"
          title="Signal watch for the AI field."
          description="A calm place for AI updates, designed so a live feed can slot in later without reshaping the page."
        />
        {!hasConfiguredFeed ? (
          <div className="mb-5 flex items-center justify-center gap-2 text-sm text-white/58">
            <Radio aria-hidden="true" className="h-4 w-4 text-pulse" />
            Live AI news feed coming soon
          </div>
        ) : null}
        <div className="grid gap-4 md:grid-cols-2">
          {aiNews.map((item) => (
            <article key={`${item.source}-${item.title}`} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
              <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/52">
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-signal">
                  {item.source}
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays aria-hidden="true" className="h-4 w-4" />
                  {item.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
