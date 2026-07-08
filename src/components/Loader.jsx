import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
          }}
        >
          {/* Monogram reveal */}
          <motion.div className="loader__mark-wrap">
            <motion.div
              className="loader__mark"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              SM
            </motion.div>

            <motion.div
              className="loader__name"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Sanjay M
            </motion.div>
          </motion.div>

          {/* Progress line */}
          <motion.div className="loader__bar-wrap">
            <motion.div
              className="loader__bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>

          {/* Wipe overlay — slides up to exit */}
          <motion.div
            className="loader__wipe"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{
              scaleY: 1,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            }}
            style={{ transformOrigin: 'bottom' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
