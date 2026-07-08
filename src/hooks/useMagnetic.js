import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function useMagnetic(magneticStrength = 0.5) {
  const ref = useRef(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for smooth movement and snap-back
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = element.getBoundingClientRect()
      
      const centerX = left + width / 2
      const centerY = top + height / 2

      const distanceX = clientX - centerX
      const distanceY = clientY - centerY

      x.set(distanceX * magneticStrength)
      y.set(distanceY * magneticStrength)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [x, y, magneticStrength])

  return { ref, x: springX, y: springY }
}
