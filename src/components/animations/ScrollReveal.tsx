'use client'

import React from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer, staggerItem } from '@/lib/animation-presets'

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'stagger'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

const animationVariants = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  stagger: staggerContainer,
}

export function ScrollReveal({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  className,
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { 
    amount: threshold,
    once: triggerOnce,
    margin: '-50px 0px'
  })

  const variants = animationVariants[animation]

  // Custom animation with delay and duration
  const customVariants = React.useMemo(() => {
    if (animation === 'stagger') {
      return {
        ...variants,
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as any)?.transition,
            delayChildren: delay,
          }
        }
      }
    }

    return {
      ...variants,
      visible: {
        ...variants.visible,
        transition: {
          ...(variants.visible as any)?.transition,
          duration,
          delay,
        }
      }
    }
  }, [variants, delay, duration, animation])

  if (animation === 'stagger') {
    return (
      <motion.div
        ref={ref}
        variants={customVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div key={index} variants={staggerItem}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Convenience components for common animations
export function FadeInUp({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="fadeInUp" {...props}>{children}</ScrollReveal>
}

export function FadeInLeft({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="fadeInLeft" {...props}>{children}</ScrollReveal>
}

export function FadeInRight({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="fadeInRight" {...props}>{children}</ScrollReveal>
}

export function ScaleIn({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="scaleIn" {...props}>{children}</ScrollReveal>
}

export function StaggerReveal({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="stagger" {...props}>{children}</ScrollReveal>
}
