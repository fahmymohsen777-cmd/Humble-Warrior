"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface InfiniteMarqueeProps {
  items: string[];
  className?: string;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
}

export function InfiniteMarquee({ items, className, direction = "left", speed = "normal" }: InfiniteMarqueeProps) {
  const directionClass = direction === "left" ? "marquee-left" : "marquee-right";
  
  // Duplicate array multiple times to ensure the container is filled
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={cn("relative flex overflow-hidden marquee-container w-full group", className)}>
      <div 
        className={cn(
          "flex whitespace-nowrap marquee-track items-center py-4", 
          directionClass,
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {repeatedItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="mx-6 text-sm md:text-base font-medium tracking-widest uppercase opacity-70">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-current opacity-30" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
