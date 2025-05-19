"use client"

import { useEffect, useState } from "react"

export function MedievalCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        a, button, input, textarea, [role="button"] {
          cursor: none;
        }
      `}</style>

      <div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference
            ${isClicking ? "bg-amber-400 h-5 w-5" : "bg-white h-3 w-3"}`}
          style={{
            transition: "height 0.2s, width 0.2s, background 0.2s",
          }}
        ></div>

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 border border-amber-500 rounded-full"
          style={{
            height: isClicking ? "30px" : "40px",
            width: isClicking ? "30px" : "40px",
            transition: "height 0.3s, width 0.3s, opacity 0.3s",
            opacity: 0.5,
          }}
        ></div>
      </div>
    </>
  )
}
