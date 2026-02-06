import { useEffect } from 'react'
import { motion } from 'framer-motion'

/**
 * AnimatedText component
 * Reveals text paragraphs sequentially with fade and slide animations
 * Calls onComplete when all paragraphs are done animating
 */
function AnimatedText({ paragraphs, onComplete, isEmotionalScene = false }) {
  // Delay between lines: 350ms for playful scenes, 550ms for emotional scenes
  const delayBetween = isEmotionalScene ? 0.55 : 0.35

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delayBetween,
        delayChildren: 0.2
      }
    }
  }

  const paragraphVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  // Calculate total animation time
  const totalAnimationTime = (paragraphs.length * delayBetween + 1.5) * 1000

  // Notify parent when animation completes using useEffect
  useEffect(() => {
    if (onComplete) {
      const timer = setTimeout(() => {
        onComplete()
      }, totalAnimationTime)
      
      return () => clearTimeout(timer)
    }
  }, [onComplete, totalAnimationTime])

  return (
    <motion.div
      className="scene-text"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {paragraphs.map((paragraph, index) => {
        // Handle both string and object formats for paragraphs
        const text = typeof paragraph === 'string' ? paragraph : (paragraph?.text ?? '')
        const hasEmphasis = typeof paragraph === 'object' && paragraph?.emphasis
        
        return (
          <motion.p 
            key={index} 
            variants={paragraphVariants}
            className={`${isEmotionalScene ? 'emotional-text' : ''} ${hasEmphasis ? 'emphasized-text' : ''}`}
          >
            {text}
          </motion.p>
        )
      })}
    </motion.div>
  )
}

export default AnimatedText
