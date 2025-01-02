'use client'
import { cn } from "@/lib/utils"
import React, { HTMLProps, ReactNode } from "react"

interface ServiceAuroraProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
}

export function ServiceAurora({ children, className, ...props }: ServiceAuroraProps) {
  return (
    <div
      className={cn("relative w-full h-full", className)}
      {...props}
    >
      {/* Sample Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#7928CA,#FF0080)] opacity-20 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#FF0080,#7928CA)] opacity-20 blur-3xl animate-[pulse_10s_infinite]" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black/80" />
      </div>
      
      {children}
    </div>
  )
}