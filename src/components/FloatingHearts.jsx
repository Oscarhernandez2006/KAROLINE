import { useMemo } from 'react'

// Genera elementos flotantes (corazones por defecto) con posiciones y animaciones aleatorias.
function FloatingHearts({ count = 18, symbols = ['❤', '💗'] }) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 22,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 10,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      opacity: 0.4 + Math.random() * 0.5,
    }))
  }, [count, symbols])

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  )
}

export default FloatingHearts
