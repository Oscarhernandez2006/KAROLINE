import { useMemo } from 'react'

const DEFAULT_PALETTES = [
  ['#ff6b9d', '#ff9ecf'],
  ['#ffd166', '#fff3b0'],
  ['#7ee8fa', '#c1f7ff'],
  ['#a78bfa', '#e0d4ff'],
  ['#ff5e5e', '#ffb3b3'],
  ['#6bffb8', '#c9ffe4'],
]
const PARTICLES_PER_FIREWORK = 34

function createFirework(id, palettes) {
  const palette = palettes[Math.floor(Math.random() * palettes.length)]
  const duration = 2.6 + Math.random() * 1.4
  const particles = Array.from({ length: PARTICLES_PER_FIREWORK }, (_, i) => {
    const angle = (360 / PARTICLES_PER_FIREWORK) * i + (Math.random() * 10 - 5)
    const distance = 70 + Math.random() * 70
    const rad = (angle * Math.PI) / 180
    return {
      dx: `${Math.cos(rad) * distance}px`,
      dy: `${Math.sin(rad) * distance}px`,
      size: `${2 + Math.random() * 3}px`,
      color: palette[Math.floor(Math.random() * palette.length)],
    }
  })

  return {
    id,
    left: `${12 + Math.random() * 76}%`,
    top: `${15 + Math.random() * 45}%`,
    duration: `${duration}s`,
    delay: `${-Math.random() * duration}s`,
    color: palette[0],
    particles,
  }
}

// Capa de fuegos artificiales reutilizable (cohete + destello + partículas con gravedad).
function Fireworks({ count = 7, palettes = DEFAULT_PALETTES }) {
  const fireworks = useMemo(
    () => Array.from({ length: count }, (_, i) => createFirework(i, palettes)),
    [count, palettes],
  )

  return (
    <div className="fireworks-layer" aria-hidden="true">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="firework"
          style={{
            left: firework.left,
            top: firework.top,
            '--duration': firework.duration,
            animationDelay: firework.delay,
          }}
        >
          <span
            className="firework__rocket"
            style={{
              background: firework.color,
              boxShadow: `0 8px 12px 1px ${firework.color}`,
              animationDelay: firework.delay,
            }}
          />
          <span
            className="firework__flash"
            style={{
              background: firework.color,
              boxShadow: `0 0 30px 10px ${firework.color}`,
              animationDelay: firework.delay,
            }}
          />
          {firework.particles.map((particle, i) => (
            <span
              key={i}
              className="firework__particle"
              style={{
                '--dx': particle.dx,
                '--dy': particle.dy,
                width: particle.size,
                height: particle.size,
                background: particle.color,
                boxShadow: `0 0 6px 1px ${particle.color}`,
                animationDelay: firework.delay,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Fireworks
