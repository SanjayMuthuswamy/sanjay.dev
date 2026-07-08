import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Landmark, Rocket, HeartHandshake } from 'lucide-react'
import { useScrollReveal, revealVariants } from '../hooks/useAnimations'
import './Standards.css'

const STANDARDS = [
  {
    number: '0',
    suffix: '%',
    label: 'Hallucination Rate',
    description: 'My RAG pipelines are built for precision — source-grounded answers with hybrid retrieval and cross-encoder reranking. No fabricated outputs, ever.',
  },
  {
    number: '8.3',
    suffix: '/10',
    label: 'CGPA & Climbing',
    description: 'Consistent academic excellence at Bannari Amman Institute of Technology, balancing coursework with real-world engineering and open-source contribution.',
  },
  {
    number: '90.8',
    suffix: '%',
    label: 'nDCG@5 Retrieval Score',
    description: 'Benchmark-validated retrieval quality across AskMe\'s hybrid search architecture — combining FAISS vector search with BM25 and reranking.',
  },
  {
    number: '100',
    suffix: '%',
    label: 'End-to-End Ownership',
    description: 'From model training to API design to frontend polish — every project is fully architected and shipped by me, start to finish.',
  },
]

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    text: 'If the model can\'t cite its source, the answer doesn\'t ship.',
  },
  {
    icon: Landmark,
    text: 'Architecture decisions are permanent. Treat them that way.',
  },
  {
    icon: Rocket,
    text: 'Ship systems, not scripts. Production-grade or nothing.',
  },
  {
    icon: HeartHandshake,
    text: 'Open source isn\'t charity — it\'s how you sharpen the craft.',
  },
]

function AnimatedNumber({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once: true })
  const numRef = useRef(null)

  useEffect(() => {
    if (!isInView || !numRef.current) return

    const hasPrefix = value.startsWith('<') || value.startsWith('>')
    const prefix = hasPrefix ? value.charAt(0) + ' ' : ''
    const numericPart = hasPrefix ? parseFloat(value.slice(1).trim()) : parseFloat(value)

    if (isNaN(numericPart)) {
      numRef.current.textContent = value + suffix
      return
    }

    const isFloat = numericPart % 1 !== 0
    let startTime = null

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / 2000, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      const current = numericPart * eased

      if (numRef.current) {
        numRef.current.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix
      }

      if (progress < 1) requestAnimationFrame(animate)
      else if (numRef.current) numRef.current.textContent = prefix + (isFloat ? numericPart.toFixed(1) : numericPart) + suffix
    }

    requestAnimationFrame(animate)
  }, [isInView, value, suffix])

  return (
    <span className="standards__number" ref={ref}>
      <span ref={numRef}>0{suffix}</span>
    </span>
  )
}

export default function Standards() {
  const { ref, controls } = useScrollReveal(0.08)

  return (
    <section className="standards section" id="standards" ref={ref}>
      <div className="container">
        <motion.div
          className="standards__header"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.span className="text-label" variants={revealVariants.fadeUp}>
            Standards & Philosophy
          </motion.span>
          <motion.h2 className="heading-xl standards__title" variants={revealVariants.fadeUp}>
            The numbers that define<br />how I <em>operate.</em>
          </motion.h2>
        </motion.div>

        <motion.div
          className="standards__grid"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {STANDARDS.map((item, i) => (
            <motion.div
              key={i}
              className="standards__card"
              variants={revealVariants.fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatedNumber value={item.number} suffix={item.suffix} />
              <span className="standards__card-label">{item.label}</span>
              <p className="standards__card-desc">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="standards__principles"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.span className="text-label" variants={revealVariants.fadeUp}>
            Operating Principles
          </motion.span>
          <motion.ul className="standards__principles-list" variants={revealVariants.staggerContainer}>
            {PRINCIPLES.map((principle, i) => (
              <motion.li
                key={i}
                className="standards__principle group"
                variants={revealVariants.fadeUp}
              >
                <div className="standards__principle-icon-wrap">
                  <principle.icon className="standards__principle-icon" strokeWidth={1.5} />
                </div>
                <span className="standards__principle-text">{principle.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}
