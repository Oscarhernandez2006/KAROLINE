import { useState } from 'react'
import FloatingHearts from './components/FloatingHearts'
import Envelope from './components/Envelope'
import LoveLetter from './components/LoveLetter'
import PolaroidGallery from './components/PolaroidGallery'
import BackgroundMusic from './components/BackgroundMusic'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="app">
      <FloatingHearts />
      <BackgroundMusic />

      <div className="scene">
        <div className="frame">
          <PolaroidGallery />
          <Envelope isOpen={isOpen} onOpen={() => setIsOpen(true)} />
          {isOpen && <LoveLetter />}
        </div>
      </div>
    </div>
  )
}

export default App
