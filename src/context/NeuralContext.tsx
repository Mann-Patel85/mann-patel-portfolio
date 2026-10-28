"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface NeuralContextType {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  activeSkill: string | null;
  setActiveSkill: (skill: string | null) => void;
  isAudioEnabled: boolean;
  toggleAudio: () => void;
  isTerminalOpen: boolean;
  setIsTerminalOpen: (open: boolean) => void;
}

const NeuralContext = createContext<NeuralContextType | undefined>(undefined);

export function NeuralProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const toggleAudio = () => setIsAudioEnabled((prev) => !prev);

  return (
    <NeuralContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        activeSkill,
        setActiveSkill,
        isAudioEnabled,
        toggleAudio,
        isTerminalOpen,
        setIsTerminalOpen,
      }}
    >
      {children}
    </NeuralContext.Provider>
  );
}

export function useNeural() {
  const context = useContext(NeuralContext);
  if (!context) {
    throw new Error("useNeural must be used within a NeuralProvider");
  }
  return context;
}
