import { motion } from 'framer-motion'

/**
 * AnimatedText component
 * Reveals text paragraphs sequentially with fade and slide animations
 * Calls onComplete when all paragraphs are done animating
 */
function AnimatedText({ paragraphs, onComplete, isEmotionalScene = false }) {
  const baseDelay = isEmotionalScene ? 0.5 : 0.3
  const delayBetween = isEmotionalScene ? 0.6 : 0.4

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

  // Notify parent when animation completes
  if (onComplete) {
    setTimeout(() => {
      onComplete()
    }, totalAnimationTime)
  }

  return (
    <motion.div
      className="scene-text"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {paragraphs.map((paragraph, index) => (
        <motion.p 
          key={index} 
          variants={paragraphVariants}
          className={isEmotionalScene ? 'emotional-text' : ''}
        >
          {paragraph}
        </motion.p>
      ))}
    </motion.div>
  )
}

export default AnimatedText
