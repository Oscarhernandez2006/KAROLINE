import { useState } from 'react'
import { letterContent } from '../data/letterContent'
import LoveModal from './LoveModal'

// Carta con el mensaje, animaciones de entrada y un botón final con corazones.
function LoveLetter() {
  const [burst, setBurst] = useState(false)
  const [showLoveModal, setShowLoveModal] = useState(false)

  const handleLoveClick = () => {
    setBurst(false)
    // reinicia la animación forzando un reflow
    requestAnimationFrame(() => setBurst(true))
    setShowLoveModal(true)
  }

  return (
    <div className="letter-card">
      <h1 className="letter-title">{letterContent.title}</h1>
      <p className="letter-greeting">{letterContent.greeting}</p>

      {letterContent.paragraphs.map((paragraph, index) => (
        <p
          key={paragraph}
          className="letter-paragraph"
          style={{ animationDelay: `${0.3 + index * 0.4}s` }}
        >
          {paragraph}
        </p>
      ))}

      <h2
        className="letter-reasons-title"
        style={{ animationDelay: `${0.3 + letterContent.paragraphs.length * 0.4}s` }}
      >
        {letterContent.reasonsTitle}
      </h2>

      <ul className="letter-reasons">
        {letterContent.reasons.map((reason, index) => (
          <li
            key={reason}
            className="letter-reason"
            style={{
              animationDelay: `${0.6 + letterContent.paragraphs.length * 0.4 + index * 0.25}s`,
            }}
          >
            <span className="letter-reason__heart">💖</span>
            {reason}
          </li>
        ))}
      </ul>

      <div className="letter-signature">
        <p>{letterContent.signatureText}</p>
        <p className="letter-signature__name">{letterContent.signatureName}</p>
      </div>

      <div className="love-button-wrapper">
        <button type="button" className="love-button" onClick={handleLoveClick}>
          Te amo 💕
        </button>
        {burst && (
          <div className="heart-burst" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <span
                key={i}
                className="heart-burst__piece"
                style={{ '--angle': `${(360 / 12) * i}deg` }}
              >
                ❤
              </span>
            ))}
          </div>
        )}
      </div>

      {showLoveModal && <LoveModal onClose={() => setShowLoveModal(false)} />}
    </div>
  )
}

export default LoveLetter
