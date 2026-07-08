import { motion } from 'framer-motion'
import { useScrollReveal, revealVariants } from '../hooks/useAnimations'
import {
  Terminal, Coffee, FileCode2, Code2, Zap, Link2,
  BrainCircuit, Layers, Smile, Database, Search,
  Box, GitBranch, Mail
} from 'lucide-react'
import './About.css'

const TOOLS = [
  { name: 'Python', icon: Terminal },
  { name: 'Java', icon: Coffee },
  { name: 'TypeScript', icon: FileCode2 },
  { name: 'React.js', icon: Code2 },
  { name: 'FastAPI', icon: Zap },
  { name: 'LangChain', icon: Link2 },
  { name: 'TensorFlow', icon: BrainCircuit },
  { name: 'Keras', icon: Layers },
  { name: 'Hugging Face', icon: Smile },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'FAISS', icon: Search },
  { name: 'Docker', icon: Box },
  { name: 'SQL', icon: Database },
  { name: 'GitHub', icon: GitBranch },
  { name: 'Postman', icon: Mail },
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
            <p className="about__tagline">
              Still growing. The learning never stops.
            </p>
          </motion.div>

          <motion.div className="about__right" variants={revealVariants.fadeUp}>
            <div className="about__bio">
              <p className="text-body">
                I'm an AI & Data Science undergraduate at Bannari Amman Institute
                of Technology, driven by a singular focus: building robust, intelligent systems
                that solve complex problems with elegance and efficiency.
              </p>
              <p className="text-body">
                My approach bridges the gap between theoretical data science and practical
                software engineering. I specialize in developing production-grade AI solutions,
                from designing advanced RAG architectures to managing relational databases
                like MySQL for seamless data integration. I believe in writing code that is
                clean, scalable, and built for the long term.
              </p>
              <p className="text-body">
                Beyond my core engineering work, I'm an open-source contributor to Hugging Face's
                PEFT library, an Oracle Cloud AI Certified Associate, and an Oracle Certified
                Java SE 17 Developer. I am passionate about continuous learning and deeply
                committed to pushing the boundaries of what technology can achieve.
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
                key={tool.name}
                className="about__tool-tag group"
                variants={revealVariants.fadeUp}
                whileHover={{ y: -3, backgroundColor: 'var(--bg-dark)', color: 'var(--text-inverse)' }}
                transition={{ duration: 0.2 }}
              >
                <tool.icon className="about__tool-icon" strokeWidth={1.5} />
                {tool.name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
