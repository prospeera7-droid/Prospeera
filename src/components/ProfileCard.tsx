
"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MessageCircle, UserPlus, Circle } from "lucide-react"

export type ProfileProps = {
  imageUrl: string;
  imageHint: string;
  name: string;
  title: string;
  followers: string;
};

export function ProfileCard({ imageUrl, imageHint, name, title, followers }: ProfileProps) {
  return (
    <div className="relative max-w-sm w-full bg-background/20 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-border">
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-orange-400" />
        <div className="relative w-7 h-7">
            <Star className="w-7 h-7 text-primary-foreground fill-blue-500" />
            <Star className="w-4 h-4 text-primary-foreground fill-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 shadow-lg">
          <Image
            src={imageUrl}
            alt={name}
            width={112}
            height={112}
            data-ai-hint={imageHint}
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-muted-foreground">{title}</p>
        <p className="text-sm text-muted-foreground mt-1">{followers}</p>
      </div>

      <div className="flex justify-around mt-8 gap-4">
        <Button
          variant="outline"
          className="w-full h-12 rounded-full bg-background/60 backdrop-blur-sm border-border hover:bg-accent"
        >
          <UserPlus className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button
          variant="outline"
          className="w-full h-12 rounded-full bg-background/60 backdrop-blur-sm border-border hover:bg-accent"
        >
          <MessageCircle className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
    </div>
  )
}
