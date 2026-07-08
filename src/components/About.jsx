import { motion } from 'framer-motion'
import { useScrollReveal, revealVariants } from '../hooks/useAnimations'
import './About.css'

const TOOLS = [
  'Python', 'Java', 'TypeScript', 'React.js', 'FastAPI',
  'LangChain', 'TensorFlow', 'Keras', 'Hugging Face',
  'PostgreSQL', 'MySQL', 'FAISS', 'Docker',
  'SQL', 'GitHub', 'Postman',
]

export default function About() {
  const { ref, controls } = useScrollReveal(0.1)

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about__grid"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.div className="about__left" variants={revealVariants.fadeUp}>
            <span className="text-label about__label">About</span>
            <h2 className="heading-xl about__heading">
              Engineer by discipline,<br />
              <em>builder</em> by instinct.
            </h2>
          </motion.div>

          <motion.div className="about__right" variants={revealVariants.fadeUp}>
            <div className="about__bio">
              <p className="text-body">
                I'm an AI & Data Science undergraduate at Bannari Amman Institute
                of Technology, driven by a singular focus: building AI-powered systems
                that don't just work — they <strong>think, retrieve, and reason</strong> at
                production scale.
              </p>
              <p className="text-body">
                My work spans the full depth of the modern AI stack — from engineering
                RAG pipelines with hybrid retrieval and cross-encoder reranking, to training
                CNN+LSTM deep learning models for real-time deepfake detection, to architecting
                agentic AI platforms that autonomously gather and synthesize competitive intelligence.
              </p>
              <p className="text-body">
                I'm also an open-source contributor to Hugging Face's PEFT library,
                an Oracle Cloud AI Certified Associate, and a hackathon finalist who
                ships code that's built to last — not just to demo.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="about__tools"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.span className="text-label" variants={revealVariants.fadeUp}>
            Tools & Technologies
          </motion.span>
          <motion.div className="about__tools-grid" variants={revealVariants.staggerFast}>
            {TOOLS.map((tool) => (
              <motion.span
                key={tool}
                className="about__tool-tag"
                variants={revealVariants.fadeUp}
                whileHover={{ y: -3, backgroundColor: 'var(--bg-dark)', color: 'var(--text-inverse)' }}
                transition={{ duration: 0.2 }}
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
