import { AboutSection } from "@/components/about-section";
import { AiStackSection } from "@/components/ai-stack-section";
import { AnimatedBackground } from "@/components/animated-background";
import { ContactSection } from "@/components/contact-section";
import { FloatingDock } from "@/components/floating-dock";
import { HeroSection } from "@/components/hero-section";
import { ModelWatch } from "@/components/model-watch";
import { NewsSection } from "@/components/news-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteHeader } from "@/components/site-header";
import { ThemeToggle } from "@/components/theme-toggle";
import { WorkflowPhilosophy } from "@/components/workflow-philosophy";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <AnimatedBackground />
      <FloatingDock />
      <SiteHeader />
      <ModelWatch />
      <ThemeToggle />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <AiStackSection />
        <WorkflowPhilosophy />
        <ProjectsSection />
        <NewsSection />
        <ContactSection />
      </div>
    </main>
  );
}
