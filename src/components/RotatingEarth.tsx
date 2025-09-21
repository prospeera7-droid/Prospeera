"use client"

import { useEffect, useRef } from "react"

interface RotatingEarthProps {
  width?: number
  height?: number
  className?: string
}

declare global {
  interface Window {
    d3: any;
    topojson: any;
  }
}

export default function RotatingEarth({ width = 800, height = 600, className = "" }: RotatingEarthProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    let frame: number;
    let cancelled = false;

    const checkScriptsAndRender = () => {
      if (cancelled) return;

      if (typeof window.d3 !== 'undefined' && typeof window.topojson !== 'undefined' && canvasRef.current) {
        const d3 = window.d3;
        const topojson = window.topojson;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        const containerWidth = Math.min(width, window.innerWidth - 40);
        const containerHeight = Math.min(height, window.innerHeight - 100);
        const radius = Math.min(containerWidth, containerHeight) / 2.5;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = containerWidth * dpr;
        canvas.height = containerHeight * dpr;
        canvas.style.width = `${containerWidth}px`;
        canvas.style.height = `${containerHeight}px`;
        context.scale(dpr, dpr);

        const projection = d3
          .geoOrthographic()
          .scale(radius)
          .translate([containerWidth / 2, containerHeight / 2])
          .clipAngle(90);

        const path = d3.geoPath().projection(projection).context(context);

        let land: any;
        
        const render = () => {
          if (!context) return;
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
        
        d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json").then((world: any) => {
            if (topojson) {
              land = topojson.feature(world, world.objects.countries);

              const animate = () => {
                  render();
                  if (!cancelled) {
                    frame = requestAnimationFrame(animate);
                  }
              }
              animate();
            }
        });
      } else {
        // If scripts are not ready, check again shortly.
        frame = requestAnimationFrame(checkScriptsAndRender);
      }
    };

    checkScriptsAndRender();

    return () => {
      cancelled = true;
      if (frame) {
        cancelAnimationFrame(frame);
      }
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
