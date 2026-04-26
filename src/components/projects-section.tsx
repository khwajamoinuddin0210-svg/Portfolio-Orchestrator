import { ArrowUpRight, Boxes } from "lucide-react";
import { projects } from "@/config/profile";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="projects"
          title="Projects coming soon."
          description="This area is ready for real project cards when you are ready to publish them."
        />
        {projects.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.href ? (
                  <a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring mt-6 inline-flex items-center gap-2 text-sm text-signal"
                  >
                    View project
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <div className="glass-panel mx-auto flex max-w-3xl flex-col items-center rounded-2xl p-8 text-center">
            <div className="mb-5 rounded-2xl border border-white/10 bg-white/6 p-4 text-signal">
              <Boxes aria-hidden="true" className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-semibold text-white">A clean launchpad for future work.</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/62">
              No invented case studies, no filler. This space is reserved for real work
              as it becomes ready to share.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
