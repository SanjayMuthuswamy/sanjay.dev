import { motion } from 'framer-motion'
import { GitPullRequestDraft, ExternalLink } from 'lucide-react'
import { useScrollReveal, revealVariants } from '../hooks/useAnimations'
import './OpenSource.css'

export default function OpenSource() {
  const { ref, controls } = useScrollReveal(0.1)

  return (
    <section className="opensource section" id="opensource" ref={ref}>
      <div className="container">
        <motion.div
          className="opensource__header"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.span className="text-label" variants={revealVariants.fadeUp}>
            Open Source
          </motion.span>
          <motion.h2 className="heading-xl opensource__title" variants={revealVariants.fadeUp}>
            Contributing to the<br /><em>ecosystem.</em>
          </motion.h2>
        </motion.div>

        <motion.div
          className="opensource__card"
          variants={revealVariants.fadeUp}
          initial="hidden"
          animate={controls}
        >
          <div className="opensource__card-inner">
            <div className="opensource__card-header">
              <div className="opensource__card-brand">
                <span className="opensource__brand-emoji">🤗</span>
                <h3 className="heading-md">Hugging Face — PEFT</h3>
              </div>
              <a 
                href="https://github.com/huggingface/peft" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opensource__card-link"
              >
                View Repository <ExternalLink size={16} />
              </a>
            </div>

            <div className="opensource__card-content">
              <div className="opensource__pr-badge">
                <GitPullRequestDraft size={16} />
                <span>Merged Contribution</span>
              </div>
              
              <ul className="opensource__impact-list">
                <li>
                  <p className="text-body">
                    <strong>Improved official documentation for VeRA</strong> in the Parameter-Efficient Fine-Tuning (PEFT) library, clarifying core concepts to make them significantly easier for developers to understand and adopt.
                  </p>
                </li>
                <li>
                  <p className="text-body">
                    <strong>Participated in the end-to-end open-source review process</strong>, addressing maintainer feedback and successfully merging changes directly into the Hugging Face ecosystem.
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Decorative background glow */}
            <div className="opensource__glow" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
