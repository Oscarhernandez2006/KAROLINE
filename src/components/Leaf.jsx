// Hoja dibujada con CSS (elipse tallada con una vena central) para el ramo de girasoles.
function Leaf({ size = 60, className = '', style = {} }) {
  return (
    <div className={`leaf ${className}`} style={{ width: size, height: size * 1.6, ...style }}>
      <div className="leaf__vein" />
    </div>
  )
}

export default Leaf
