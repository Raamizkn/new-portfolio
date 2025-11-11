"use client"

import { CursorProvider } from "@/context/cursor-context"
import CursorEffect from "@/components/cursor-effect"
import { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CursorProvider>
      <CursorEffect />
      {children}
    </CursorProvider>
  )
}
