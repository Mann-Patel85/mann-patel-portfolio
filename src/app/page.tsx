"use client";

import { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { NeuralProvider } from "@/context/NeuralContext";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ResumeModal } from "@/components/ui/ResumeModal";

// The WebGL background is client-only and loaded after the content.
const SpaceScene = dynamic(() => import("@/components/canvas/Scene").then((mod) => mod.SpaceScene), {
  ssr: false,
});

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const openResume = useCallback(() => setIsResumeOpen(true), []);
  const closeResume = useCallback(() => setIsResumeOpen(false), []);

  return (
    <NeuralProvider>
      <SpaceScene />
      <CustomCursor />
      <Navbar onOpenResume={openResume} />

      <main className="relative z-10 flex flex-col min-h-screen">
        <Hero onOpenResume={openResume} />
        <AboutSection />
        <ProjectsGrid />
        <SkillsMatrix />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </NeuralProvider>
  );
}
