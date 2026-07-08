import { motion } from 'framer-motion'
import { useScrollReveal, revealVariants } from '../hooks/useAnimations'
import './Contact.css'

const SOCIALS = [
  { label: 'Resume', href: '/Sanjay_Resume.pdf' },
  { label: 'GitHub', href: 'https://github.com/SanjayMuthuswamy' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sanjaymuthuswamy/' },
  { label: 'LeetCode', href: 'https://leetcode.com/SanjayM_' },
]

export default function Contact() {
  const { ref, controls } = useScrollReveal(0.15)

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__content"
          variants={revealVariants.staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.span className="text-label" variants={revealVariants.fadeUp}>
            Get in Touch
          </motion.span>

          <motion.h2 className="contact__heading heading-display" variants={revealVariants.fadeUp}>
            Let's build something<br />
            <em>intelligent</em> together.
          </motion.h2>

          <motion.p className="contact__text text-body" variants={revealVariants.fadeUp}>
            Whether it's an AI system that needs architecting, a RAG pipeline
            that needs precision, or an idea that needs its first model —
            I'm always ready for meaningful, challenging work.
          </motion.p>

          <motion.a
            href="mailto:sanjay.muthuswamy1@gmail.com"
            className="contact__email"
            variants={revealVariants.fadeUp}
            whileHover={{ x: 8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            sanjay.muthuswamy1@gmail.com
            <span className="contact__email-arrow">↗</span>
          </motion.a>

          <motion.div className="contact__socials" variants={revealVariants.staggerFast}>
            {SOCIALS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link link-underline"
                variants={revealVariants.fadeUp}
              >
                {social.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
