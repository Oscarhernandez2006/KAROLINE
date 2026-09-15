// Tarjeta con estilo de fotografía instantánea (polaroid) vintage.
function Polaroid({ src, caption, rotate = 0, type = 'image', className = '', style, onClick }) {
  return (
    <div
      className={`polaroid ${className} ${onClick ? 'polaroid--clickable' : ''}`}
      style={{ '--rotate': `${rotate}deg`, ...style }}
      onClick={onClick}
    >
      <div className="polaroid__tape" />
      <div className="polaroid__photo">
        {src ? (
          type === 'video' ? (
            <video src={src} controls playsInline />
          ) : (
            <img src={src} alt={caption} />
          )
        ) : (
          <div className="polaroid__placeholder">
            <span>📷</span>
            <p>Agrega tu foto</p>
          </div>
        )}
      </div>
      {caption && <p className="polaroid__caption">{caption}</p>}
    </div>
  )
}

export default Polaroid
