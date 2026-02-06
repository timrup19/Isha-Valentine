import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import './App.css'
import { story, getSceneNumber, getTotalScenes } from './story'
import AnimatedText from './AnimatedText'
import FloatingHearts from './FloatingHearts'

function App() {
  const [currentSceneId, setCurrentSceneId] = useState('S1_START')
  const [animationKey, setAnimationKey] = useState(0)
  const [textAnimationComplete, setTextAnimationComplete] = useState(false)
  const visitedYesRef = useRef(false)

  const currentScene = story[currentSceneId]
  
  // Determine if this is an emotional scene that needs special treatment
  const emotionalScenes = ['S3_SOFT_TURN', 'S6_SINCERE_PAUSE', 'S7_QUESTION']
  const isEmotionalScene = emotionalScenes.includes(currentSceneId)
  
  // Classify scene types for mood shifts
  const getSceneType = (sceneId) => {
    if (sceneId === 'S8_YES') return 'celebration'
    if (sceneId === 'S7_QUESTION') return 'question'
    if (emotionalScenes.includes(sceneId)) return 'emotional'
    return 'playful'
  }
  
  const sceneType = getSceneType(currentSceneId)

  // Handle scene transitions with animation
  const handleChoice = (nextSceneId) => {
    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'auto' })
    
    // Change scene after a brief delay
    setTimeout(() => {
      setCurrentSceneId(nextSceneId)
      setTextAnimationComplete(false)
      setAnimationKey(prev => prev + 1)
    }, 300)
  }

  // Enhanced confetti on YES scene
  useEffect(() => {
    if (currentSceneId === 'S8_YES' && !visitedYesRef.current) {
      visitedYesRef.current = true
      
      // Multiple confetti bursts for celebration
      const duration = 4000
      const animationEnd = Date.now() + duration
      const defaults = { 
        startVelocity: 35, 
        spread: 360, 
        ticks: 80, 
        zIndex: 1000,
        scalar: 1.2
      }

      const randomInRange = (min, max) => {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 60 * (timeLeft / duration)
        
        // Center burst
        confetti({
          ...defaults,
          particleCount: particleCount * 1.5,
          origin: { x: 0.5, y: 0.5 },
          colors: ['#ff69b4', '#ff1493', '#ff85c1', '#ffb6c1', '#ffc0cb']
        })
        
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
      }, 200)

      return () => clearInterval(interval)
    }

    // Reset visited flag when restarting
    if (currentSceneId === 'S1_START') {
      visitedYesRef.current = false
    }
  }, [currentSceneId])

  // Scene animation variants
  const sceneVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: currentSceneId === 'S8_YES' ? 0.8 : 0.6,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  }

  // Button animation variants
  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  // Convert text to array if it's a string
  const textParagraphs = Array.isArray(currentScene.text) 
    ? currentScene.text 
    : [currentScene.text]

  return (
    <div className={`app scene-type-${sceneType}`}>
      <FloatingHearts />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSceneId}
          className={`scene-container ${isEmotionalScene ? 'emotional-scene' : ''}`}
          variants={sceneVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className={`card ${currentSceneId === 'S8_YES' ? 'celebration-card' : ''}`}>
            {currentScene.title && (
              <motion.h1 
                className="scene-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {currentScene.title}
              </motion.h1>
            )}
            
            <AnimatedText 
              key={animationKey}
              paragraphs={textParagraphs}
              onComplete={() => setTextAnimationComplete(true)}
              isEmotionalScene={isEmotionalScene}
            />

            <motion.div 
              className="choices"
              variants={buttonContainerVariants}
              initial="hidden"
              animate={textAnimationComplete ? "visible" : "hidden"}
            >
              {currentScene.choices.map((choice, index) => (
                <motion.button
                  key={index}
                  className="choice-button"
                  variants={buttonVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleChoice(choice.next)}
                  aria-label={choice.label}
                  disabled={!textAnimationComplete}
                >
                  {choice.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Progress indicator with dots */}
            <motion.div 
              className="progress-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {Array.from({ length: getTotalScenes() }).map((_, index) => {
                const sceneNum = getSceneNumber(currentSceneId)
                const isActive = index + 1 === sceneNum
                const isPast = index + 1 < sceneNum
                return (
                  <span 
                    key={index} 
                    className={`progress-dot ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                    aria-label={`Scene ${index + 1}${isActive ? ' (current)' : ''}`}
                  />
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
