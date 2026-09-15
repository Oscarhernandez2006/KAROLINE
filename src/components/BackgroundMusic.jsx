import { useEffect, useRef, useState } from 'react'

// Reproduce "Castillo" de fondo: intenta autoplay y, si el navegador lo bloquea,
// arranca en la primera interacción del usuario.
function BackgroundMusic() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = 0.5

    const tryPlay = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }

    tryPlay()

    const handleFirstInteraction = () => {
      if (!isPlaying) tryPlay()
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }

    window.addEventListener('click', handleFirstInteraction)
    window.addEventListener('touchstart', handleFirstInteraction)
    window.addEventListener('keydown', handleFirstInteraction)

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleMusic = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true))
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/music/castillo.mp3" loop />
      <button
        type="button"
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
      >
        {isPlaying ? '🎵' : '🔇'}
      </button>
    </>
  )
}

export default BackgroundMusic
