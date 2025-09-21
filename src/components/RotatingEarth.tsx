"use client"

import { motion } from "framer-motion"

export default function RotatingEarth({ width = 400, height = 400 }) {
  return (
    <div style={{ width, height }}>
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          border: "2px solid hsl(var(--foreground))",
          position: "relative",
          overflow: "hidden",
          background: "hsl(var(--background))",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "150%",
            height: "150%",
            x: "-50%",
            y: "-50%",
            background: "repeating-conic-gradient(hsl(var(--foreground)) 0% 2.5%, transparent 2.5% 5%)",
          }}
          animate={{ rotate: -360 }}
           transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  )
}
