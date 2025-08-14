'use client'
import { useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import '../styles/SplashScreen.css'

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(onComplete, 500)
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="splash-container">
      <AnimatePresence mode="wait">
        <motion.div
          key="namaste-hindi"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            scale: { duration: 0.6 }
          }}
          className="splash-content"
        >
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="namaste-text"
          >
            नमस्ते
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="underline"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
