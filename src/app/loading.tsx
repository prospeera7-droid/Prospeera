"use client"

import RotatingEarth from "@/components/RotatingEarth"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background w-full flex justify-center items-center">
          <RotatingEarth width={700} height={500}/>
    </div>
  )
}
