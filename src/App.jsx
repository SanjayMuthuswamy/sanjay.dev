import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Standards from './components/Standards'
import OpenSource from './components/OpenSource'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Loader from './components/Loader'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Loader disappears after 1.8s (animation completes)
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Don't start Lenis until page is done loading
    if (isLoading) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [isLoading])

  return (
    <>
      {/* Custom physics cursor — desktop only */}
      <Cursor />

      {/* Entry loading sequence */}
      <Loader isVisible={isLoading} />

      {/* Main content */}
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Standards />
        <OpenSource />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
