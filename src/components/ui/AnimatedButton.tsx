"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimate } from "framer-motion"
import { Magnet } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface AnimatedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  particleCount?: number
}

interface Particle {
  id: number
  x: number
  y: number
}

export function AnimatedButton({ className, particleCount = 12, ...props }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 100 - 50,
    }))
    setParticles(newParticles)
  }, [particleCount])

  const handleInteractionStart = useCallback(() => {
    setIsHovered(true)
    animate("div", {
      x: 0,
      y: 0,
    },
    {
      type: "spring",
      stiffness: 50,
      damping: 10,
    })
  }, [animate])

  const handleInteractionEnd = useCallback(() => {
    setIsHovered(false)
    animate("div", (i) => ({
      x: particles[i].x,
      y: particles[i].y,
    }),
    {
      type: "spring",
      stiffness: 100,
      damping: 15,
    })
  }, [animate, particles])

  return (
    <div
      ref={scope}
      className={cn(
        "min-w-40 relative touch-none inline-flex items-center justify-center h-11 rounded-md px-8",
        "bg-primary text-primary-foreground",
        "hover:bg-primary/90",
        "transition-all duration-300 overflow-hidden",
        className,
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particle.x, y: particle.y }}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full",
            "bg-primary-foreground/50",
            "transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-40",
          )}
        />
      ))}
      <span className="relative w-full flex items-center justify-center gap-2">
        <Magnet className={cn("w-4 h-4 transition-transform duration-300", isHovered && "scale-110")} />
        Explore All Services
      </span>
    </div>
  )
}
