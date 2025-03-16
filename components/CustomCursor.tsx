"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.innerWidth <= 768) {
      return
    }

    setHidden(false)

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onLinkHoverStart = () => {
      setLinkHovered(true)
    }

    const onLinkHoverEnd = () => {
      setLinkHovered(false)
    }

    addEventListeners()

    // Add hover listeners to all links and buttons
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", onLinkHoverStart)
      link.addEventListener("mouseleave", onLinkHoverEnd)
    })

    return () => {
      removeEventListeners()
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onLinkHoverStart)
        link.removeEventListener("mouseleave", onLinkHoverEnd)
      })
    }
  }, [])

  // Hide the default cursor
  useEffect(() => {
    if (!hidden && window.innerWidth > 768) {
      document.body.style.cursor = "none"
    } else {
      document.body.style.cursor = "auto"
    }

    return () => {
      document.body.style.cursor = "auto"
    }
  }, [hidden])

  if (hidden) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/30 z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary z-[9999] pointer-events-none"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: clicked ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1500,
          damping: 50,
        }}
      />
    </>
  )
}

