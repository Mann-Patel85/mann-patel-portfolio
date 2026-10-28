"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { NeuralProvider } from "@/context/NeuralContext";
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { MLPlayground } from "@/components/sections/MLPlayground";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/ui/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ResumeModal } from "@/components/ui/ResumeModal";

// Dynamically import Three.js 3D canvas for optimal SSR & performance
const SpaceScene = dynamic(
  () => import("@/components/canvas/Scene").then((mod) => mod.SpaceScene),
  { ssr: false }
);

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <NeuralProvider>
      {/* 3D Galactic / Neural Background Canvas */}
      <SpaceScene />

      {/* Smooth Magnetic Glowing Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphic Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Single Page Portfolio Content */}
      <main className="relative z-10 flex flex-col min-h-screen">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <SkillsMatrix />
        <ProjectsGrid />
        <MLPlayground />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* System Footer */}
      <Footer />

      {/* Interactive Resume Drawer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </NeuralProvider>
  );
}
