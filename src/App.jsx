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
  const [loaderDone, setLoaderDone] = useState(false)

  useEffect(() => {
    if (!loaderDone) return

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
    return () => lenis.destroy()
  }, [loaderDone])

  return (
    <>
      <Cursor />
      <Loader onComplete={() => setLoaderDone(true)} />

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
