import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './Cursor.css'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const isHovering = useRef(false)
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  // Dot follows cursor instantly
  const dotX = useSpring(cursorX, { stiffness: 2000, damping: 80 })
  const dotY = useSpring(cursorY, { stiffness: 2000, damping: 80 })

  // Ring lags behind with physics
  const ringX = useSpring(cursorX, { stiffness: 120, damping: 20, mass: 0.5 })
  const ringY = useSpring(cursorY, { stiffness: 120, damping: 20, mass: 0.5 })

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const addHover = () => {
      isHovering.current = true
      dotRef.current?.classList.add('cursor-dot--hover')
      ringRef.current?.classList.add('cursor-ring--hover')
    }

    const removeHover = () => {
      isHovering.current = false
      dotRef.current?.classList.remove('cursor-dot--hover')
      ringRef.current?.classList.remove('cursor-ring--hover')
    }

    window.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll(
      'a, button, [data-cursor-hover]'
    )
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => {
      const all = document.querySelectorAll('a, button, [data-cursor-hover]')
      all.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', move)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Inner dot — snappy */}
      <motion.div
        ref={dotRef}
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
      />
      {/* Outer ring — laggy, physics-based */}
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
      />
    </>
  )
}
