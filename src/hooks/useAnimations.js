import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

/**
 * Hook for scroll-triggered reveal animations.
 * Returns a ref to attach to the element and animation controls.
 */
export function useScrollReveal(threshold = 0.15, once = true) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: threshold, once })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return { ref, controls, isInView }
}

/**
 * Common animation variants used throughout the site.
 * Each variant is designed to feel natural and purposeful.
 */
export const revealVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  },

  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },

  staggerWords: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },

  wordReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  staggerFast: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  },

  clipReveal: {
    hidden: {
      clipPath: 'inset(100% 0% 0% 0%)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
}

/**
 * Counter animation helper — used for the Standards section
 */
export function useCounter(end, duration = 2, startOnView = true) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })
  const countRef = useRef(null)

  useEffect(() => {
    if (!startOnView || !isInView) return
    if (!countRef.current) return

    let startTime = null
    const startVal = 0

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 4) // easeOutQuart
      const current = Math.floor(startVal + (end - startVal) * eased)

      if (countRef.current) {
        countRef.current.textContent = current
      }

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else if (countRef.current) {
        countRef.current.textContent = end
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration, startOnView])

  return { ref, countRef }
}
