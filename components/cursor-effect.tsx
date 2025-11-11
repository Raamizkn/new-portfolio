"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"
import { useCursor } from "@/hooks/use-cursor"

export default function CursorEffect() {
  const { isCursorEnabled } = useCursor()
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const cursorX = useSpring(0, { damping: 30, stiffness: 200 })
  const cursorY = useSpring(0, { damping: 30, stiffness: 200 })

  const trailX = useSpring(0, { damping: 50, stiffness: 100 })
  const trailY = useSpring(0, { damping: 50, stiffness: 100 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true)
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      trailX.set(e.clientX)
      trailY.set(e.clientY)

      const target = e.target as HTMLElement
      const isClickable = target.closest(
        'button, a, input, textarea, [role="button"]'
      )
      setIsPointer(!!isClickable)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    if (isCursorEnabled) {
      window.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseleave", handleMouseLeave)

      const style = document.createElement("style")
      style.innerHTML = `
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `
      document.head.appendChild(style)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseleave", handleMouseLeave)
        document.head.removeChild(style)
      }
    }
  }, [isCursorEnabled, cursorX, cursorY, trailX, trailY])

  const opacity = isCursorEnabled && isVisible ? 1 : 0

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: opacity,
        }}
      >
        <motion.div
          className="rounded-full bg-black dark:bg-white"
          style={{
            filter:
              "drop-shadow(0 0 8px rgba(134, 104, 237, 0.5)) dark:drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))",
          }}
          animate={{
            width: isPointer ? 16 : 10,
            height: isPointer ? 16 : 10,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: opacity,
        }}
      >
        <motion.div
          className="rounded-full"
          style={{
            backgroundColor: "#8668ED",
          }}
          animate={{
            width: isPointer ? 16 : 30,
            height: isPointer ? 16 : 30,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: opacity,
        }}
      >
        <motion.div
          className="rounded-full border-2 border-black dark:border-white"
          animate={{
            width: isPointer ? 36 : 28,
            height: isPointer ? 36 : 28,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  )
}

