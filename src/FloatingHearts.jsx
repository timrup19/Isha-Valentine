import { motion } from 'framer-motion'
import './FloatingHearts.css'

/**
 * FloatingHearts component
 * Creates subtle ambient floating hearts in the background
 */
function FloatingHearts() {
  // Create an array of heart elements with different positions and animations
  const hearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${15 + Math.random() * 10}s`,
    size: Math.random() * 0.5 + 0.3 // 0.3 to 0.8
  }))

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.animationDelay,
            animationDuration: heart.animationDuration,
            fontSize: `${heart.size}rem`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 2 }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingHearts
