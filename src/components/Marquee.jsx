import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Marquee.css'

const MARQUEE_ITEMS = [
  'Python', '·', 'LangChain', '·', 'RAG', '·', 'LLMs', '·',
  'TensorFlow', '·', 'React.js', '·', 'FastAPI', '·', 'FAISS', '·',
  'NLP', '·', 'Transformers', '·', 'Hugging Face', '·', 'Java', '·',
  'PostgreSQL', '·', 'MySQL', '·', 'TypeScript', '·',
]

export default function Marquee() {
  const [duration, setDuration] = useState(30)

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDuration(12) // Much faster on mobile
    }
  }, [])

  // Duplicate for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="marquee" aria-hidden="true">
      <motion.div
        className="marquee__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duration,
            ease: 'linear',
          },
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={item === '·' ? 'marquee__dot' : 'marquee__item'}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
