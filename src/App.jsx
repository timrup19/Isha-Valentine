import { useState, useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import './App.css'
import { story, getSceneNumber, getTotalScenes } from './story'

function App() {
  const [currentSceneId, setCurrentSceneId] = useState('S1_START')
  const [fadeIn, setFadeIn] = useState(true)
  const visitedYesRef = useRef(false)

  const currentScene = story[currentSceneId]

  // Handle scene transitions with fade effect
  const handleChoice = (nextSceneId) => {
    setFadeIn(false)
    setTimeout(() => {
      setCurrentSceneId(nextSceneId)
      setFadeIn(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  // Trigger confetti on YES scene
  useEffect(() => {
    if (currentSceneId === 'S8_YES' && !visitedYesRef.current) {
      visitedYesRef.current = true
      
      // Confetti burst with hearts
      const duration = 3000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      const randomInRange = (min, max) => {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)
        
        // Left side
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#ff69b4', '#ff1493', '#ff85c1', '#ffb6c1']
        })
        
        // Right side
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#ff69b4', '#ff1493', '#ff85c1', '#ffb6c1']
        })
      }, 250)

      return () => clearInterval(interval)
    }

    // Reset visited flag when restarting
    if (currentSceneId === 'S1_START') {
      visitedYesRef.current = false
    }
  }, [currentSceneId])

  return (
    <div className="app">
      <div className={`scene-container ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        <div className="card">
          {currentScene.title && (
            <h1 className="scene-title">{currentScene.title}</h1>
          )}
          
          <div className="scene-text">
            {Array.isArray(currentScene.text)
              ? currentScene.text.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              : <p>{currentScene.text}</p>
            }
          </div>

          <div className="choices">
            {currentScene.choices.map((choice, index) => (
              <button
                key={index}
                className="choice-button"
                onClick={() => handleChoice(choice.next)}
                aria-label={choice.label}
              >
                {choice.label}
              </button>
            ))}
          </div>

          <div className="progress">
            Scene {getSceneNumber(currentSceneId)} of {getTotalScenes()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
