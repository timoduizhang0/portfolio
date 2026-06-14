import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  icon?: ReactNode
}

export function Button({ children, variant = 'primary', size = 'md', href, onClick, icon }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300'

  const variants = {
    primary: 'bg-primary text-dark hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-95',
    outline: 'border border-primary/50 text-primary hover:bg-primary/10 active:scale-95',
    ghost: 'text-muted hover:text-white hover:bg-dark-200/50',
  }

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      {children}
    </Component>
  )
}
