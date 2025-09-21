"use client"

import { cn } from "@/lib/utils"
import { motion, useAnimate } from "framer-motion"
import { useEffect, useState, useCallback, forwardRef, cloneElement, isValidElement } from "react"
import { Button, ButtonProps } from "@/components/ui/button"

interface Btn03Props extends ButtonProps {
  particleCount?: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
}

const Btn03 = forwardRef<HTMLButtonElement, Btn03Props>(
  ({ children, className, particleCount = 20, asChild = false, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [particles, setParticles] = useState<Particle[]>([]);
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * 200 - 100,
        y: Math.random() * 100 - 50,
      }));
      setParticles(newParticles);
    }, [particleCount]);

    const handleInteractionStart = useCallback(() => {
      setIsHovered(true);
      animate("div", { x: 0, y: 0 }, { type: "spring", stiffness: 50, damping: 10 });
    }, [animate]);

    const handleInteractionEnd = useCallback(() => {
      setIsHovered(false);
      animate("div", (i) => ({ x: particles[i]?.x, y: particles[i]?.y }), {
        type: "spring",
        stiffness: 100,
        damping: 15,
      });
    }, [animate, particles]);
    
    const Particles = () => (
      <>
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: particle.x, y: particle.y }}
            className={cn(
              "absolute w-1.5 h-1.5 rounded-full",
              "bg-primary-foreground/50",
              "transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-40"
            )}
          />
        ))}
      </>
    );

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        ref: scope,
        className: cn(
            "relative touch-none overflow-hidden",
            children.props.className
        ),
        onMouseEnter: handleInteractionStart,
        onMouseLeave: handleInteractionEnd,
        onTouchStart: handleInteractionStart,
        onTouchEnd: handleInteractionEnd,
        ...props,
        children: (
          <>
            <Particles />
            <span className="relative z-10 w-full flex items-center justify-center gap-2">
                {children.props.children}
            </span>
          </>
        )
      } as any);
    }

    return (
      <Button
        ref={scope as React.Ref<any>}
        className={cn(
          "relative touch-none overflow-hidden",
          className
        )}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        {...props}
      >
        <Particles />
        <span className="relative z-10 w-full flex items-center justify-center gap-2">
            {children}
        </span>
      </Button>
    );
  }
);
Btn03.displayName = "Btn03";

export default Btn03;
