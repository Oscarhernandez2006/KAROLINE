import { createPortal } from 'react-dom'
import Fireworks from './Fireworks'

// Modal a pantalla completa con fuegos artificiales al presionar "Te amo".
function LoveModal({ onClose }) {
  return createPortal(
    <div className="love-modal" onClick={onClose}>
      <Fireworks count={7} />

      <div className="love-modal__content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="love-modal__close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>
        <p className="love-modal__text">
          Te empecé amando con 0 millones, y el día de hoy llevamos 10 millones de quererte.
          El "quererte" me quedó pequeño, y ahora... te estoy amando.
        </p>
        <div className="love-modal__hearts" aria-hidden="true">💗</div>
      </div>
    </div>,
    document.body,
  )
}

export default LoveModal
