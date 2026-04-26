import { SectionHeading } from "@/components/section-heading";
import { about } from "@/config/profile";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="about"
          title={about.title}
          description={about.description}
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <article className="glass-panel rounded-2xl p-6 md:p-8">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={index === 0 ? "text-lg leading-8 text-white/76" : "mt-6 text-base leading-8 text-white/62"}
              >
                {paragraph}
              </p>
            ))}
          </article>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {about.stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <p className="font-mono text-sm text-signal">{item.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
