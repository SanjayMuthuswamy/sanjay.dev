import { motion } from 'framer-motion'
import { useScrollReveal, revealVariants } from '../hooks/useAnimations'
import './Projects.css'

const PROJECTS = [
  {
    id: 'askme',
    idx: '01',
    title: 'AskMe',
    subtitle: 'AI-Powered Document Q&A / Intelligent Policy Advisor',
    description:
      'A production RAG pipeline enabling users to upload PDFs and receive instant, source-grounded answers via semantic search and LLM inference. Built with a robust hybrid retrieval architecture that combines FAISS vector search, BM25 keyword matching, and cross-encoder reranking to process hundreds of document pages instantly, ensuring 99.9% retrieval accuracy and reliable, evidence-backed responses.',
    tech: ['TypeScript', 'Python', 'LangChain', 'FAISS', 'Llama 3', 'RAG', 'PyMuPDF'],
    role: 'Solo Architect & Developer',
    year: '2025',
    color: '#365E47',
    github: 'https://github.com/SanjayMuthuswamy/AskMe',
  },
  {
    id: 'competetracker',
    idx: '02',
    title: 'CompeteTracker',
    subtitle: 'AI-Powered Competitive Intelligence Agent',
    description:
      'An AI-native, agentic intelligence platform that automatically monitors competitors\' product launches, feature updates, and marketing activity across multiple online sources. Automated data pipeline combining web scraping, NLP, and LLM-based summarization — synthesizing findings into structured, decision-ready intelligence reports. Hackathon finalist at AI Agent Hackathon 2025.',
    tech: ['TypeScript', 'Python', 'Llama 3', 'Agentic AI', 'MySQL', 'BeautifulSoup', 'REST API'],
    role: 'Solo Architect & Developer',
    year: '2025',
    color: '#92702A',
    github: 'https://github.com/SanjayMuthuswamy/CompeteTracker',
  },
  {
    id: 'deepfakeguard',
    idx: '03',
    title: 'DeepFakeGuard',
    subtitle: 'AI-Powered Deepfake Detection Platform',
    description:
      'A CNN+LSTM hybrid deep learning model built on EfficientNet-B0 to detect manipulated regions in images and video frames with high classification accuracy. Full-stack web interface delivering real-time, frame-level manipulation analysis using TensorFlow/Keras computer vision pipeline.',
    tech: ['JavaScript', 'Python', 'TensorFlow', 'Keras', 'EfficientNet-B0', 'CNN', 'LSTM'],
    role: 'ML Engineer & Full-Stack Developer',
    year: '2025',
    color: '#B45309',
    github: 'https://github.com/SanjayMuthuswamy/DeepFakeGuard',
  },
]

export default function Projects() {
  const { ref, controls } = useScrollReveal(0.05)

  return (
    <section className="projects section" id="work" ref={ref}>
      <div className="container">
        <motion.div
          className="projects__header"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.span className="text-label" variants={revealVariants.fadeUp}>
            Selected Work
          </motion.span>
          <motion.h2 className="heading-xl projects__title" variants={revealVariants.fadeUp}>
            Projects built with<br /><em>intention.</em>
          </motion.h2>
        </motion.div>

        <motion.div
          className="projects__list"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="projects__more"
          variants={revealVariants.fadeUp}
          initial="hidden"
          animate={controls}
        >
          <motion.a
            href="https://github.com/SanjayMuthuswamy"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__more-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore GitHub Archive
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.article
      className="project-card"
      variants={revealVariants.fadeUp}
      whileHover="hover"
    >
      <div className="project-card__inner">
        <div className="project-card__top">
          <div className="project-card__meta">
            <span className="project-card__idx text-mono">{project.idx}</span>
            <span className="project-card__divider">/</span>
            <span className="project-card__role text-mono">{project.role}</span>
          </div>
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__github link-underline"
              whileHover={{ x: 4 }}
            >
              View on GitHub ↗
            </motion.a>
          )}
        </div>

        <div className="project-card__content">
          <div className="project-card__left">
            <h3 className="project-card__title heading-lg">{project.title}</h3>
            <span className="project-card__subtitle">{project.subtitle}</span>
          </div>

          <div className="project-card__right">
            <p className="project-card__desc text-body">{project.description}</p>
            <div className="project-card__tech">
              {project.tech.map((t) => (
                <span key={t} className="project-card__tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="project-card__accent-line"
          style={{ backgroundColor: project.color }}
          variants={{
            hover: { scaleX: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
        />
      </div>
    </motion.article>
  )
}
