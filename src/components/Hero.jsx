import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMagnetic } from '../hooks/useMagnetic'
import './Hero.css'

const LINE_VARIANTS = {
  hidden: { y: '110%', rotateX: 40 },
  visible: (i) => ({
    y: '0%',
    rotateX: 0,
    transition: {
      duration: 1,
      delay: 0.6 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Magnetic button hooks
  const primaryMagnetic = useMagnetic(0.2)
  const secondaryMagnetic = useMagnetic(0.2)

  return (
    <section className="hero" ref={sectionRef} id="hero">
      {/* Decorative Elements */}
      <motion.div className="hero__ornament hero__ornament--top-right" style={{ y: parallaxY }}>
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
          <circle cx="140" cy="140" r="139" stroke="var(--border-light)" strokeWidth="1" />
          <circle cx="140" cy="140" r="100" stroke="var(--border-light)" strokeWidth="1" />
          <circle cx="140" cy="140" r="60" stroke="var(--border-medium)" strokeWidth="1" />
        </svg>
      </motion.div>

      <motion.div className="hero__content container" style={{ opacity }}>
        <motion.div
          className="hero__label"
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
        >
          <span className="text-label">AI & Data Science Engineer</span>
        </motion.div>

        <h1 className="hero__title heading-display">
          {['I build intelligent', 'systems that', 'think.'].map((line, i) => (
            <span className="hero__line-wrap" key={i}>
              <motion.span
                className="hero__line"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={LINE_VARIANTS}
              >
                {i === 2 ? (
                  <span className="hero__line-accent">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero__subtitle text-body"
          custom={1.3}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
        >
          Building AI-powered intelligence and decision-support systems
          using NLP, LLMs, and Retrieval-Augmented Generation — where every
          model serves a purpose and every pipeline is engineered to perform.
        </motion.p>

        <motion.div
          className="hero__actions"
          custom={1.6}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
        >
          <motion.a
            ref={primaryMagnetic.ref}
            href="#work"
            className="hero__btn hero__btn--primary"
            style={{ x: primaryMagnetic.x, y: primaryMagnetic.y }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View Selected Work
            <span className="hero__btn-arrow">→</span>
          </motion.a>
          
          <motion.a
            ref={secondaryMagnetic.ref}
            href="#about"
            className="hero__btn hero__btn--secondary"
            style={{ x: secondaryMagnetic.x, y: secondaryMagnetic.y }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            About Me
          </motion.a>
        </motion.div>

        <motion.div
          className="hero__scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          <motion.div
            className="hero__scroll-line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="text-label">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
