"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

/** Shares the hovered skill category with the 3D background so it can highlight that cluster. */
interface NeuralContextType {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const NeuralContext = createContext<NeuralContextType | undefined>(undefined);

export function NeuralProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  return <NeuralContext.Provider value={{ activeCategory, setActiveCategory }}>{children}</NeuralContext.Provider>;
}

export function useNeural() {
  const context = useContext(NeuralContext);
  if (!context) {
    throw new Error("useNeural must be used within a NeuralProvider");
  }
  return context;
}
