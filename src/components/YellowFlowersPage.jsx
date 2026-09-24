import { useState } from 'react'
import FloatingHearts from './FloatingHearts'
import Fireworks from './Fireworks'

const YELLOW_PALETTES = [
  ['#ffd60a', '#fff3b0'],
  ['#ffb703', '#ffe08a'],
  ['#fff275', '#fffbe0'],
  ['#f4a300', '#ffd77a'],
]

const SUNFLOWERS = [0, 1, 2, 3, 4]

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
              {SUNFLOWERS.map((i) => (
                <span key={i} style={{ '--i': i }}>
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
