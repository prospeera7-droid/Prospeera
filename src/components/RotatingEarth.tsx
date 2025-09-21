"use client"

import { useEffect, useRef, useState } from "react"
import * as d3 from "d3"

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
}

export default function RotatingEarth({ width = 800, height = 600, className = "" }: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    if (typeof window === 'undefined' || !canvasRef.current) return

    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    const containerWidth = Math.min(width, window.innerWidth - 40)
    const containerHeight = Math.min(height, window.innerHeight - 100)
    const radius = Math.min(containerWidth, containerHeight) / 2.5

    const dpr = window.devicePixelRatio || 1
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`
    context.scale(dpr, dpr)

    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90)

    const path = d3.geoPath().projection(projection).context(context)

    let land: any;
    
    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "hsl(var(--background))";
      context.fillRect(0, 0, canvas.width, canvas.height);

      projection.rotate([Date.now() / 100, -15]);

      context.beginPath();
      path({type: "Sphere"});
      context.fillStyle = "hsl(var(--foreground))";
      context.fill();

      if (land) {
        context.beginPath();
        path(land);
        context.fillStyle = "hsl(var(--background))";
        context.fill();
      }

      const graticule = d3.geoGraticule10();
      context.beginPath();
      path(graticule);
      context.strokeStyle = "hsla(var(--foreground), 0.2)";
      context.stroke();
    }
    
    let frame: number;
    
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((world: any) => {
        land = topojson.feature(world, world.objects.countries);

        function animate() {
            render();
            frame = requestAnimationFrame(animate);
        }
        animate();
    });

    return () => {
        cancelAnimationFrame(frame);
    }

  }, [width, height]);


  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-auto rounded-2xl"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )
}

declare const topojson: any;