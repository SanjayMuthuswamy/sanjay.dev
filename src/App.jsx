import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { Analytics } from "@vercel/analytics/react"
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

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref');

    if (ref && !sessionStorage.getItem('tracked_ref')) {
      fetch('https://discord.com/api/webhooks/1525171769151848532/OAoHzWWEtr970GxOmQIhrmhNp-KbklQn4b80T3Vsj999-pUt8imRd1XvyRWQarUhCjE8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `🚨 **Someone just opened your portfolio!**\nSource: \`${ref}\``,
        }),
      }).catch(err => console.error("Tracking failed"));

      sessionStorage.setItem('tracked_ref', 'true');
    }
  }, []);

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
      <Analytics />
    </>
  )
}
