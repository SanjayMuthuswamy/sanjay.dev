import { useState, useEffect } from 'react'
import './LiveBadge.css'

export default function LiveBadge() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Asia/Kolkata',
        })
      )
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="live-badge" aria-label="Local time in Coimbatore, India">
      <span className="live-badge__dot" />
      <span className="live-badge__text">
        Coimbatore, IN &nbsp;·&nbsp; {time} IST
      </span>
    </div>
  )
}
