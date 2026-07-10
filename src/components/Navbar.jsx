import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Standards', href: '#standards' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="navbar__logo-mark">SM</span>
          <span className="navbar__logo-text">Sanjay M</span>
        </a>

        <ul className="navbar__links">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
            >
              <a
                href={link.href}
                className="navbar__link link-underline"
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="navbar__actions">
          <div className="navbar__socials">
            <button className="navbar__theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href="/Sanjay_Resume.pdf" target="_blank" rel="noreferrer" className="navbar__social-link">CV</a>
            <a href="https://www.linkedin.com/in/sanjaymuthuswamy/" target="_blank" rel="noreferrer" className="navbar__social-link">LI</a>
            <a href="https://github.com/SanjayMuthuswamy" target="_blank" rel="noreferrer" className="navbar__social-link">GH</a>
            <a href="https://www.kaggle.com/msthename" target="_blank" rel="noreferrer" className="navbar__social-link">KG</a>
          </div>
          <motion.a
            href="#contact"
            className="navbar__cta"
            onClick={(e) => handleClick(e, '#contact')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Talk
          </motion.a>
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - var(--nav-height))' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => handleClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <div className="navbar__mobile-socials">
              <button onClick={toggleTheme}>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <a href="/Sanjay_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
              <a href="https://www.linkedin.com/in/sanjaymuthuswamy/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/SanjayMuthuswamy" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.kaggle.com/msthename" target="_blank" rel="noreferrer">Kaggle</a>
            </div>
            <a href="#contact" className="navbar__cta navbar__cta--mobile" onClick={(e) => handleClick(e, '#contact')}>
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
