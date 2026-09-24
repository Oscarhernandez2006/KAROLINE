import { useState } from 'react'
import FloatingHearts from './components/FloatingHearts'
import Envelope from './components/Envelope'
import LoveLetter from './components/LoveLetter'
import PolaroidGallery from './components/PolaroidGallery'
import BackgroundMusic from './components/BackgroundMusic'
import YellowFlowersPage from './components/YellowFlowersPage'
import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [showYellowPage, setShowYellowPage] = useState(false)

  if (showYellowPage) {
    return <YellowFlowersPage onBack={() => setShowYellowPage(false)} />
  }

  return (
    <div className="app">
      <FloatingHearts />
      <BackgroundMusic />

      <div className="scene">
        <div className="frame">
          <PolaroidGallery />
          <Envelope isOpen={isOpen} onOpen={() => setIsOpen(true)} />
          {isOpen && <LoveLetter />}
          {isOpen && (
            <button
              type="button"
              className="yellow-flowers-button"
              onClick={() => setShowYellowPage(true)}
            >
              Tus flores amarillas 🌻
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
