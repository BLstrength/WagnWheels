import { useState, useEffect, useCallback } from 'react'

const IMAGES = [
  '/gallery/IMG_7597.jpeg',
  '/gallery/IMG_7601.jpeg',
  '/gallery/IMG_7607.jpeg',
  '/gallery/IMG_7612.jpeg',
]

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent(i => (i + 1) % IMAGES.length)
  }, [])

  const prev = () => {
    setCurrent(i => (i - 1 + IMAGES.length) % IMAGES.length)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <div
      className="carousel-track"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className={`carousel-slide ${i === current ? 'active' : ''}`}
        >
          <img src={src} alt={`Groomed pet ${i + 1}`} />
        </div>
      ))}

      <button className="carousel-btn carousel-btn-prev" onClick={prev} aria-label="Previous">
        &#8249;
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={next} aria-label="Next">
        &#8250;
      </button>

      <div className="carousel-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
