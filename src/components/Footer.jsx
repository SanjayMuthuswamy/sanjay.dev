import { motion } from 'framer-motion'
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <span className="footer__copy">
            © {new Date().getFullYear()} Sanjay M
          </span>
          <span className="footer__sep">·</span>
          <span className="footer__note">Crafted with intention</span>
        </div>

        <motion.button
          className="footer__top-btn"
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Top ↑
        </motion.button>
      </div>
    </footer>
  )
}
