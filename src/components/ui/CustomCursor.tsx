"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Decorative glow that follows the pointer on fine-pointer devices. The native cursor stays visible. */
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useSpring(cursorX, { damping: 35, stiffness: 200, mass: 0.8 });
  const trailY = useSpring(cursorY, { damping: 35, stiffness: 200, mass: 0.8 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      const target = e.target as HTMLElement | null;
      setIsHovered(!!target?.closest("a, button, input, textarea, [role='button']"));
    };
    const onLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      <motion.div
        className="absolute rounded-full border"
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? "rgba(0, 245, 255, 0.7)" : "rgba(139, 92, 246, 0.35)",
          backgroundColor: isHovered ? "rgba(0, 245, 255, 0.10)" : "rgba(139, 92, 246, 0.04)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
    </div>
  );
}
