import { useRef, useState } from 'react'

const SWIPE_THRESHOLD = 50

// Modal que muestra la foto en grande; al deslizar a los lados se voltea y muestra un texto.
function PhotoModal({ src, type, text, onClose }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const startX = useRef(null)

  const handlePointerDown = (e) => {
    startX.current = e.clientX ?? e.touches?.[0]?.clientX
  }

  const handlePointerUp = (e) => {
    if (startX.current === null) return
    const endX = e.clientX ?? e.changedTouches?.[0]?.clientX
    const diff = endX - startX.current
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      setIsFlipped((prev) => !prev)
    }
    startX.current = null
  }

  return (
    <div className="photo-modal" onClick={onClose}>
      <div className="photo-modal__content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="photo-modal__close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        <div
          className="photo-modal__card"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchEnd={handlePointerUp}
        >
          <div className={`photo-modal__card-inner ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="photo-modal__face photo-modal__face--front">
              <div className="photo-modal__media">
                {type === 'video' ? (
                  <video src={src} controls autoPlay playsInline />
                ) : (
                  <img src={src} alt="" draggable="false" />
                )}
              </div>
            </div>
            <div className="photo-modal__face photo-modal__face--back">
              <p className="photo-modal__text">{text || 'X'}</p>
            </div>
          </div>
        </div>

        <p className="photo-modal__hint">Desliza la foto para ver más ↔</p>
      </div>
    </div>
  )
}

export default PhotoModal
