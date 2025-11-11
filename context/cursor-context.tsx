"use client"

import {
  createContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from "react"

interface CursorContextType {
  isCursorEnabled: boolean
  setIsCursorEnabled: (isEnabled: boolean) => void
}

export const CursorContext = createContext<CursorContextType | undefined>(
  undefined
)

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isCursorEnabled, setIsCursorEnabled] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)")
    if (mediaQuery.matches) {
      setIsCursorEnabled(false)
    }
  }, [])

  const value = useMemo(
    () => ({ isCursorEnabled, setIsCursorEnabled }),
    [isCursorEnabled]
  )

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  )
}
