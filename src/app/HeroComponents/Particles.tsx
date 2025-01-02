"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";

export function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <div className="absolute flex h-[1000px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={40}
        color={color}
        refresh
      />
    </div>
  );
}
