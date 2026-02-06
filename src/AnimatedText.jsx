import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * AnimatedText component - Guided Reading Mode
 * Shows one sentence at a time, user taps to advance
 * Calls onComplete when all sentences are shown
 */
function AnimatedText({ paragraphs, onComplete, isEmotionalScene = false }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAnimatingIn, setIsAnimatingIn] = useState(true)

  // Filter out empty strings but keep track for proper indexing
  const sentences = paragraphs.filter(p => {
    const text = typeof p === 'string' ? p : (p?.text ?? '')
    return text.trim().length > 0
  })

  const totalSentences = sentences.length
  const isLastSentence = currentIndex >= totalSentences - 1

  // Advance to next sentence
  const advanceSentence = useCallback(() => {
    if (isTransitioning) return

    // If currently animating in, complete the animation
    if (isAnimatingIn) {
      setIsAnimatingIn(false)
      return
    }

    // If not the last sentence, advance
    if (!isLastSentence) {
      setIsTransitioning(true)
      
      // Brief delay for fade out
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1)
        setIsAnimatingIn(true)
        setIsTransitioning(false)
      }, 120) // Quick fade out
    }
    // Don't do anything on last sentence tap - choices already shown
  }, [isTransitioning, isAnimatingIn, isLastSentence])

  // Call onComplete when last sentence finishes animating
  useEffect(() => {
    if (isLastSentence && !isAnimatingIn && !isTransitioning && onComplete) {
      // Small delay to let the reader see the last sentence
      const timer = setTimeout(() => {
        onComplete()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isLastSentence, isAnimatingIn, isTransitioning, onComplete])

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        advanceSentence()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [advanceSentence])

  // Get current sentence
  const currentSentence = sentences[currentIndex]
  const text = typeof currentSentence === 'string' ? currentSentence : (currentSentence?.text ?? '')
  const hasEmphasis = typeof currentSentence === 'object' && currentSentence?.emphasis

  // Animation timings - slightly slower for emotional scenes
  const fadeInDuration = isEmotionalScene ? 0.27 : 0.22
  const fadeOutDuration = 0.12

  const sentenceVariants = {
    initial: { 
      opacity: 0, 
      y: 15
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: fadeInDuration,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: fadeOutDuration,
        ease: 'easeIn'
      }
    }
  }

  const indicatorVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 0.6, 
      y: 0,
      transition: {
        delay: fadeInDuration + 0.1,
        duration: 0.3
      }
    }
  }

  return (
    <div 
      className="guided-reading-container"
      onClick={advanceSentence}
      role="button"
      tabIndex={0}
      aria-label="Tap or press space to continue"
    >
      <div className="scene-text guided-reading-text">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            variants={sentenceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`${isEmotionalScene ? 'emotional-text' : ''} ${hasEmphasis ? 'emphasized-text' : ''}`}
          >
            {text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress counter */}
      <motion.div 
        className="sentence-progress"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {currentIndex + 1} / {totalSentences}
      </motion.div>

      {/* Tap to continue indicator - hide when transitioning or on last sentence */}
      {!isLastSentence && !isTransitioning && (
        <motion.div 
          className="tap-indicator"
          variants={indicatorVariants}
          initial="hidden"
          animate={!isAnimatingIn ? "visible" : "hidden"}
        >
          <span className="tap-text">Tap to continue</span>
          <span className="tap-arrow">›</span>
        </motion.div>
      )}
    </div>
  )
}

export default AnimatedText
