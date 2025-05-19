"use client"

import { useEffect, useRef } from "react"

export function TorchEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let mouseX = 0
    let mouseY = 0
    let isMouseMoving = false
    let mouseTimeout: NodeJS.Timeout

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    updateCanvasSize()
    window.addEventListener("resize", updateCanvasSize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true

      clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => {
        isMouseMoving = false
      }, 100)
    }

    window.addEventListener("mousemove", handleMouseMove)

    const drawTorchEffect = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (isMouseMoving) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 300)

        gradient.addColorStop(0, "rgba(255, 147, 41, 0.4)")
        gradient.addColorStop(0.2, "rgba(255, 125, 0, 0.2)")
        gradient.addColorStop(0.4, "rgba(255, 94, 0, 0.1)")
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Add flickering effect
        if (Math.random() > 0.7) {
          const flickerGradient = ctx.createRadialGradient(mouseX, mouseY, 5, mouseX, mouseY, 100 + Math.random() * 50)

          flickerGradient.addColorStop(0, "rgba(255, 200, 100, 0.5)")
          flickerGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

          ctx.fillStyle = flickerGradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        }
      }

      requestAnimationFrame(drawTorchEffect)
    }

    drawTorchEffect()

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      window.removeEventListener("mousemove", handleMouseMove)
      clearTimeout(mouseTimeout)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10 opacity-70" />
}
