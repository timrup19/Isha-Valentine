import { useMemo } from 'react'
import './FloatingHearts.css'

// Pre-generate random values for hearts outside component
const generateHearts = () => 
  Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${15 + Math.random() * 10}s`,
    size: Math.random() * 0.5 + 0.3 // 0.3 to 0.8
  }))

/**
 * FloatingHearts component
 * Creates subtle ambient floating hearts in the background
 */
function FloatingHearts() {
  // Create an array of heart elements with different positions and animations
  // Using useMemo to ensure stable values across re-renders
  const hearts = useMemo(() => generateHearts(), [])

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.animationDelay,
            animationDuration: heart.animationDuration,
            fontSize: `${heart.size}rem`
          }}
        >
          ♥
        </div>
      ))}
    </div>
  )
}

export default FloatingHearts
