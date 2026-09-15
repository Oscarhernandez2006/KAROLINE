// Sobre animado: se abre al hacer clic y revela la carta.
function Envelope({ isOpen, onOpen }) {
  return (
    <button
      type="button"
      className={`envelope ${isOpen ? 'envelope--open' : ''}`}
      onClick={onOpen}
      aria-label="Abrir la carta"
      disabled={isOpen}
    >
      <div className="envelope__back" />
      <div className="envelope__letter-peek" />
      <div className="envelope__flap" />
      <div className="envelope__front-left" />
      <div className="envelope__front-right" />
      <div className="envelope__heart-seal">❤</div>
      {!isOpen && <span className="envelope__hint">Toca para abrir</span>}
    </button>
  )
}

export default Envelope
