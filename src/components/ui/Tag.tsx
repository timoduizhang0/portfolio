import { motion } from 'framer-motion'

interface TagProps {
  children: string
  variant?: 'default' | 'primary' | 'outline'
  size?: 'sm' | 'md'
}

export function Tag({ children, variant = 'default', size = 'sm' }: TagProps) {
  const baseStyles = 'inline-flex items-center font-mono rounded-full transition-all duration-300'

  const variants = {
    default: 'bg-dark-300/50 text-muted border border-dark-400/50',
    primary: 'bg-primary/10 text-primary border border-primary/30',
    outline: 'border border-primary/40 text-primary/80 hover:bg-primary/10',
  }

  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-1 text-sm',
  }

  return (
    <motion.span
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      {children}
    </motion.span>
  )
}
