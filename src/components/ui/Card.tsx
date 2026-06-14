import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={`
        relative rounded-xl bg-dark-100/80 backdrop-blur-sm
        border border-dark-300/50 overflow-hidden
        ${hover ? 'cursor-pointer' : ''}
        ${glow ? 'glow' : 'hover:border-primary/20'}
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}
