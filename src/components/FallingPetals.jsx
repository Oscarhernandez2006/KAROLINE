import { useMemo } from 'react'

// Pétalos cayendo suavemente con balanceo, para dar una atmósfera más cálida y romántica.
function FallingPetals({ count = 14, symbols = ['🌼', '🌸'] }) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 16 + Math.random() * 18,
      duration: 9 + Math.random() * 8,
      delay: Math.random() * 10,
      sway: 30 + Math.random() * 40,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      opacity: 0.5 + Math.random() * 0.4,
    }))
  }, [count, symbols])

  return (
    <div className="falling-petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="falling-petal"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            '--sway': `${p.sway}px`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  )
}

export default FallingPetals
