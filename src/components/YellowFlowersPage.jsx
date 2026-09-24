import { useState } from 'react'
import FloatingHearts from './FloatingHearts'
import Fireworks from './Fireworks'

const YELLOW_PALETTES = [
  ['#ffd60a', '#fff3b0'],
  ['#ffb703', '#ffe08a'],
  ['#fff275', '#fffbe0'],
  ['#f4a300', '#ffd77a'],
]

// Cada girasol tiene su propia posición, tamaño y rotación para formar un ramo en abanico.
const SUNFLOWERS = [
  { dx: -92, bottom: 20, rot: -30, size: 68 },
  { dx: -62, bottom: 50, rot: -18, size: 80 },
  { dx: -28, bottom: 74, rot: -8, size: 90 },
  { dx: 0, bottom: 84, rot: 0, size: 100 },
  { dx: 28, bottom: 74, rot: 8, size: 90 },
  { dx: 62, bottom: 50, rot: 18, size: 80 },
  { dx: 92, bottom: 20, rot: 30, size: 68 },
]

const LEAVES = [
  { dx: -75, bottom: 5, rot: -35 },
  { dx: 75, bottom: 5, rot: 35 },
  { dx: -40, bottom: -5, rot: -15 },
  { dx: 40, bottom: -5, rot: 15 },
]

// Página sorpresa: caja que se acerca, se abre y revela un ramo de girasoles con una frase.
function YellowFlowersPage({ onBack }) {
  const [opened, setOpened] = useState(false)

  return (
    <div className="yellow-page">
      <button type="button" className="yellow-page__back" onClick={onBack}>
        ← Volver
      </button>

      <FloatingHearts count={16} symbols={['🌻', '🌼', '✨']} />
      <Fireworks count={6} palettes={YELLOW_PALETTES} />

      <div className="yellow-page__stage">
        {!opened && (
          <div className="gift-box" onAnimationEnd={() => setOpened(true)}>
            <div className="gift-box__base" />
            <div className="gift-box__ribbon-v" />
            <div className="gift-box__ribbon-h" />
            <div className="gift-box__lid" />
            <div className="gift-box__bow">🎀</div>
          </div>
        )}

        {opened && (
          <div className="sunflower-reveal">
            <div className="sunflower-bouquet" aria-hidden="true">
              <div className="bouquet-wrap" />
              <div className="bouquet-ribbon" />
              {LEAVES.map((leaf, i) => (
                <span
                  key={`leaf-${i}`}
                  className="bouquet-leaf"
                  style={{
                    left: `calc(50% + ${leaf.dx}px)`,
                    bottom: `${leaf.bottom}px`,
                    '--rot': `${leaf.rot}deg`,
                    animationDelay: `${0.15 + i * 0.08}s`,
                  }}
                >
                  🌿
                </span>
              ))}
              {SUNFLOWERS.map((flower, i) => (
                <span
                  key={`flower-${i}`}
                  className="bouquet-flower"
                  style={{
                    left: `calc(50% + ${flower.dx}px)`,
                    bottom: `${flower.bottom}px`,
                    fontSize: `${flower.size}px`,
                    '--rot': `${flower.rot}deg`,
                    animationDelay: `${0.3 + i * 0.1}s`,
                  }}
                >
                  🌻
                </span>
              ))}
            </div>
            <p className="yellow-page__phrase">
              ¿Pensaste que ibas a hacer de espectadora, mi cielo? No te las regalé en estos días
              porque recuerda que yo voy fuera de lo común... pero lo tenía en mi mente 24/7.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default YellowFlowersPage
