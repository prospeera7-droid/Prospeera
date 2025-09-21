"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export function RotatingSphere() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden [perspective:1000px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative w-64 h-64 md:w-96 md:h-96 transition-transform duration-1000 ease-out",
          isHovered ? "scale-105" : ""
        )}
        style={{
          transformStyle: 'preserve-3d',
          animation: 'sphere-rotate 20s linear infinite',
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: 'radial-gradient(circle at 30% 30%, hsl(var(--secondary-foreground)) 0%, hsl(var(--primary)) 80%)',
          }}
        />
      </div>
      <style jsx>{`
        @keyframes sphere-rotate {
          0% {
            transform: rotateY(0deg) rotateX(5deg);
          }
          100% {
            transform: rotateY(360deg) rotateX(5deg);
          }
        }
      `}</style>
    </div>
  );
}
