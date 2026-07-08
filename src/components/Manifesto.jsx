import { motion } from 'framer-motion'
import { useScrollReveal, revealVariants } from '../hooks/useAnimations'
import './Manifesto.css'

export default function Manifesto() {
  const { ref, controls } = useScrollReveal(0.15)

  return (
    <section className="manifesto section" ref={ref}>
      <div className="container">
        <motion.div 
          className="manifesto__inner"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 className="manifesto__text" variants={revealVariants.fadeUp}>
            "I am relentlessly pushing boundaries to achieve my vision.<br/>
            And even when I reach those milestones, the learning won't stop.<br/>
            I am not here to just participate—I am here to <em>master the craft.</em>"
          </motion.h2>
        </motion.div>
      </div>
    </section>
  )
}
