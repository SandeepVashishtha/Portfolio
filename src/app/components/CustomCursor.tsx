// 'use client'

// import { useEffect, useState, useRef, useCallback } from 'react'

// import { motion } from 'framer-motion'

// interface TrailPoint {
//   x: number
//   y: number
//   timestamp: number
//   id: number
// }

// const colorPalettes = [
//   { name: 'Orange Fire', colors: ['#ff4500', '#ff6b35', '#ff8c42'] },
//   { name: 'Electric Blue', colors: ['#0066ff', '#4da6ff', '#80bfff'] },
//   { name: 'Neon Purple', colors: ['#8a2be2', '#a855f7', '#c084fc'] },
//   { name: 'Lime Green', colors: ['#32cd32', '#66ff66', '#99ff99'] },
//   { name: 'Hot Pink', colors: ['#ff1493', '#ff69b4', '#ffb6c1'] },
//   { name: 'Cyan Electric', colors: ['#00ffff', '#66ffff', '#99ffff'] }
// ]

// export const CustomCursor = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isVisible, setIsVisible] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)
//   const [trail, setTrail] = useState<TrailPoint[]>([])
//   const [currentPalette, setCurrentPalette] = useState(colorPalettes[0])
//   const trailRef = useRef<TrailPoint[]>([])
//   const animationRef = useRef<number>()
//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   const paletteIndexRef = useRef(0)
//   const lastColorChangeRef = useRef(Date.now())

//   const updateTrail = useCallback(() => {
//     const currentTime = Date.now()
//     const maxAge = 1200 // Reduced to 1.2 seconds for faster disappear

//     // Smooth color palette transition every 3 seconds
//     if (currentTime - lastColorChangeRef.current > 3000) {
//       paletteIndexRef.current =
//         (paletteIndexRef.current + 1) % colorPalettes.length
//       setCurrentPalette(colorPalettes[paletteIndexRef.current])
//       lastColorChangeRef.current = currentTime
//     }

//     // Smooth removal of old points
//     trailRef.current = trailRef.current.filter(
//       (point) => currentTime - point.timestamp < maxAge
//     )

//     setTrail([...trailRef.current])

//     // Continue animation
//     animationRef.current = requestAnimationFrame(updateTrail)
//   }, [])

//   useEffect(() => {
//     animationRef.current = requestAnimationFrame(updateTrail)
//     return () => {
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current)
//       }
//     }
//   }, [updateTrail])

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     // Set canvas size
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight

//     const drawTrail = () => {
//       // Complete clear for sharper disappearing
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       if (trail.length < 3) return

//       const currentTime = Date.now()
//       const maxAge = 1200

//       // Simplified color transition - no interpolation for smoother performance
//       const currentColors = currentPalette.colors

//       // Create ultra-smooth path with fewer points for better performance
//       const smoothedTrail = trail.filter((_, index) => index % 2 === 0) // Use every other point

//       if (smoothedTrail.length < 2) return

//       ctx.beginPath()
//       ctx.moveTo(smoothedTrail[0].x, smoothedTrail[0].y)

//       // Use simple quadratic curves for better performance
//       for (let i = 1; i < smoothedTrail.length - 1; i++) {
//         const current = smoothedTrail[i]
//         const next = smoothedTrail[i + 1]
//         if (!current || !next) continue

//         const midX = (current.x + next.x) / 2
//         const midY = (current.y + next.y) / 2
//         ctx.quadraticCurveTo(current.x, current.y, midX, midY)
//       }

//       // Add the last point
//       const lastPoint = smoothedTrail[smoothedTrail.length - 1]
//       if (lastPoint) {
//         ctx.lineTo(lastPoint.x, lastPoint.y)
//       }

//       // Create simple gradient with fast fade
//       const startPoint = smoothedTrail[0]
//       const endPoint = smoothedTrail[smoothedTrail.length - 1]

//       if (startPoint && endPoint) {
//         const gradient = ctx.createLinearGradient(
//           startPoint.x,
//           startPoint.y,
//           endPoint.x,
//           endPoint.y
//         )

//         // Fast fade with exponential curve
//         const startAge = currentTime - startPoint.timestamp
//         const endAge = currentTime - endPoint.timestamp
//         const startOpacity = Math.max(0, Math.pow(1 - startAge / maxAge, 2)) // Exponential fade
//         const endOpacity = Math.max(0, Math.pow(1 - endAge / maxAge, 2))

//         // Simpler gradient with current colors
//         gradient.addColorStop(
//           0,
//           `${currentColors[0]}${Math.floor(startOpacity * 255)
//             .toString(16)
//             .padStart(2, '0')}`
//         )
//         gradient.addColorStop(
//           0.6,
//           `${currentColors[1]}${Math.floor(startOpacity * 0.7 * 255)
//             .toString(16)
//             .padStart(2, '0')}`
//         )
//         gradient.addColorStop(
//           1,
//           `${currentColors[2]}${Math.floor(endOpacity * 0.3 * 255)
//             .toString(16)
//             .padStart(2, '0')}`
//         )

//         // Draw main trail
//         ctx.strokeStyle = gradient
//         ctx.lineWidth = 4
//         ctx.lineCap = 'round'
//         ctx.lineJoin = 'round'
//         ctx.stroke()

//         // Reduced glow layers for better performance
//         for (let glowPass = 0; glowPass < 3; glowPass++) {
//           ctx.beginPath()
//           ctx.moveTo(smoothedTrail[0]?.x || 0, smoothedTrail[0]?.y || 0)

//           for (let i = 1; i < smoothedTrail.length - 1; i++) {
//             const current = smoothedTrail[i]
//             const next = smoothedTrail[i + 1]
//             if (!current || !next) continue

//             const midX = (current.x + next.x) / 2
//             const midY = (current.y + next.y) / 2
//             ctx.quadraticCurveTo(current.x, current.y, midX, midY)
//           }

//           if (lastPoint) {
//             ctx.lineTo(lastPoint.x, lastPoint.y)
//           }

//           // Simple glow gradient
//           const glowGradient = ctx.createLinearGradient(
//             startPoint.x,
//             startPoint.y,
//             endPoint.x,
//             endPoint.y
//           )

//           const glowIntensity = Math.max(0.02, 0.4 - glowPass * 0.12)
//           const glowAlpha = Math.floor(glowIntensity * startOpacity * 255)
//             .toString(16)
//             .padStart(2, '0')

//           glowGradient.addColorStop(0, `${currentColors[0]}${glowAlpha}`)
//           glowGradient.addColorStop(1, `${currentColors[2]}00`)

//           ctx.strokeStyle = glowGradient
//           ctx.lineWidth = 4 + (glowPass + 1) * 3
//           ctx.stroke()
//         }

//         // Bright core
//         ctx.beginPath()
//         ctx.moveTo(smoothedTrail[0]?.x || 0, smoothedTrail[0]?.y || 0)

//         for (let i = 1; i < smoothedTrail.length - 1; i++) {
//           const current = smoothedTrail[i]
//           const next = smoothedTrail[i + 1]
//           if (!current || !next) continue

//           const midX = (current.x + next.x) / 2
//           const midY = (current.y + next.y) / 2
//           ctx.quadraticCurveTo(current.x, current.y, midX, midY)
//         }

//         if (lastPoint) {
//           ctx.lineTo(lastPoint.x, lastPoint.y)
//         }

//         const coreGradient = ctx.createLinearGradient(
//           startPoint.x,
//           startPoint.y,
//           endPoint.x,
//           endPoint.y
//         )
//         coreGradient.addColorStop(
//           0,
//           `#ffffff${Math.floor(startOpacity * 140)
//             .toString(16)
//             .padStart(2, '0')}`
//         )
//         coreGradient.addColorStop(1, `${currentColors[0]}00`)

//         ctx.strokeStyle = coreGradient
//         ctx.lineWidth = 2
//         ctx.stroke()
//       }
//     }

//     drawTrail()
//   }, [trail, currentPalette])

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       const newX = e.clientX
//       const newY = e.clientY

//       setMousePosition({ x: newX, y: newY })
//       setIsVisible(true)

//       // Add points with optimized sampling for performance
//       const currentTime = Date.now()
//       const lastPoint = trailRef.current[0]

//       // Optimized sampling - only add significant movement
//       if (
//         !lastPoint ||
//         Math.abs(newX - lastPoint.x) > 1 ||
//         Math.abs(newY - lastPoint.y) > 1 ||
//         currentTime - lastPoint.timestamp > 16
//       ) {
//         const newPoint: TrailPoint = {
//           x: newX,
//           y: newY,
//           timestamp: currentTime,
//           id: currentTime + Math.random()
//         }

//         trailRef.current.unshift(newPoint)

//         // Keep trail shorter for better performance and faster disappear
//         if (trailRef.current.length > 60) {
//           trailRef.current = trailRef.current.slice(0, 60)
//         }
//       }
//     }

//     const hideCursor = () => setIsVisible(false)
//     const showCursor = () => setIsVisible(true)

//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement
//       if (
//         target.tagName === 'A' ||
//         target.tagName === 'BUTTON' ||
//         target.classList.contains('cursor-pointer') ||
//         target.closest('a') ||
//         target.closest('button') ||
//         target.closest('[role="button"]')
//       ) {
//         setIsHovering(true)
//       } else {
//         setIsHovering(false)
//       }
//     }

//     const handleResize = () => {
//       const canvas = canvasRef.current
//       if (canvas) {
//         canvas.width = window.innerWidth
//         canvas.height = window.innerHeight
//       }
//     }

//     window.addEventListener('mousemove', updateMousePosition)
//     window.addEventListener('mouseleave', hideCursor)
//     window.addEventListener('mouseenter', showCursor)
//     window.addEventListener('mouseover', handleMouseOver)
//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('mousemove', updateMousePosition)
//       window.removeEventListener('mouseleave', hideCursor)
//       window.removeEventListener('mouseenter', showCursor)
//       window.removeEventListener('mouseover', handleMouseOver)
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   return (
//     <>
//       {/* Canvas for drawing the trail */}
//       <canvas
//         ref={canvasRef}
//         className="pointer-events-none fixed left-0 top-0 z-40"
//         style={{ width: '100vw', height: '100vh', mixBlendMode: 'screen' }}
//         aria-hidden="true"
//       />

//       {/* Main cursor - Dynamic colored dot with smooth transitions */}
//       <motion.div
//         className="pointer-events-none fixed z-50 rounded-full"
//         animate={{
//           x: mousePosition.x - (isHovering ? 6 : 3),
//           y: mousePosition.y - (isHovering ? 6 : 3),
//           width: isHovering ? 12 : 6,
//           height: isHovering ? 12 : 6,
//           opacity: isVisible ? 1 : 0
//         }}
//         style={{
//           background: `radial-gradient(circle, ${currentPalette.colors[0]} 0%, ${currentPalette.colors[1]} 50%, ${currentPalette.colors[2]} 100%)`,
//           boxShadow: `0 0 10px ${currentPalette.colors[0]}, 0 0 20px ${currentPalette.colors[1]}, 0 0 30px ${currentPalette.colors[2]}`,
//           filter: 'blur(0.5px)',
//           transition: 'background 1s ease-in-out, box-shadow 1s ease-in-out'
//         }}
//         transition={{
//           type: 'spring',
//           stiffness: 1500,
//           damping: 40,
//           mass: 0.1
//         }}
//       />
//     </>
//   )
// }
