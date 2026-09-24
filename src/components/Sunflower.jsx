const PETAL_COUNT = 16

// Girasol dibujado con CSS: pétalos radiales + centro con textura de semillas.
function Sunflower({ size = 100, className = '', style = {} }) {
  const petals = Array.from({ length: PETAL_COUNT }, (_, i) => (360 / PETAL_COUNT) * i)

  return (
    <div className={`sunflower ${className}`} style={{ width: size, height: size, ...style }}>
      {petals.map((angle, i) => (
        <span
          key={i}
          className="sunflower__petal"
          style={{ '--angle': `${angle}deg`, animationDelay: `${i * 0.02}s` }}
        />
      ))}
      <div className="sunflower__center">
        <div className="sunflower__seeds" />
        <div className="sunflower__shine" />
      </div>
    </div>
  )
}

export default Sunflower
