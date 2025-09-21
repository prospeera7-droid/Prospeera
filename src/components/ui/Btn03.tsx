"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimate } from "framer-motion"
import { Magnet } from "lucide-react"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface Btn03Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number
  attractRadius?: number
}

interface Particle {
  id: number
  x: number
  y: number
}

export default function Btn03({ children, className, particleCount = 20, attractRadius = 50, ...props }: Btn03Props) {
  const [isAttracting, setIsAttracting] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 100 - 50,
    }))
    setParticles(newParticles)
  }, [particleCount])

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true)
    await animate("div", {
      x: 0,
      y: 0,
    },
    {
      type: "spring",
      stiffness: 50,
      damping: 10,
    })
  }, [animate])

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false)
    await animate("div", (i) => ({
      x: particles[i]?.x,
      y: particles[i]?.y,
    }),
    {
      type: "spring",
      stiffness: 100,
      damping: 15,
    })
  }, [animate, particles])

  return (
    <Button
      ref={scope as React.Ref<HTMLButtonElement>}
      className={cn(
        "relative touch-none overflow-hidden",
        className,
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index]?.x, y: particles[index]?.y, opacity: 0.4 }}
          className={cn(
            "absolute w-1.5 h-1.5 rounded-full",
            "bg-primary-foreground/50",
            "transition-opacity duration-300",
            isAttracting ? "opacity-100" : "opacity-40",
          )}
        />
      ))}
      <span className="relative w-full flex items-center justify-center gap-2">
        {children}
      </span>
    </Button>
  )
}
