import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState('enter') // 'enter' | 'exit'

  useEffect(() => {
    // Start exit after 1.6s
    const t = setTimeout(() => setPhase('exit'), 1600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase === 'enter' && (
        <motion.div
          className="loader"
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
          {/* Monogram */}
          <motion.div
            className="loader__mark"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            SM
          </motion.div>

          {/* Name */}
          <motion.div
            className="loader__name"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Sanjay M
          </motion.div>

          {/* Progress bar */}
          <motion.div className="loader__bar-wrap">
            <motion.div
              className="loader__bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
