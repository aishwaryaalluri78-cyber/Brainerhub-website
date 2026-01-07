'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Smartphone, Palette, Brain, Shield, Cog } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { FadeInUp, StaggerReveal } from '@/components/animations/ScrollReveal'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animation-presets'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web solutions using modern technologies like React, Next.js, and Node.js for scalable applications.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that enhance user engagement and drive business growth.',
  },
  {
    icon: Brain,
    title: 'AI/ML Development',
    description: 'Intelligent solutions powered by machine learning and artificial intelligence technologies.',
  },
  {
    icon: Shield,
    title: 'Blockchain Services',
    description: 'Secure, decentralized solutions using blockchain technology for enhanced security and transparency.',
  },
  {
    icon: Cog,
    title: 'DevOps',
    description: 'Streamlined development and deployment processes for faster, more reliable software delivery.',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-bg section-padding">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              variants={staggerItem}
            >
              Software Development{' '}
              <span className="text-gradient">Company</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              variants={staggerItem}
            >
              Create tech-advanced, future-proof, and scalable digital solutions with a leading 
              software development company in India.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-500 mb-10"
              variants={staggerItem}
            >
              Delivering software solutions to build intelligent enterprises with speed and agility.
            </motion.p>
            
            <motion.div variants={staggerItem}>
              <Button 
                size="xl" 
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="shadow-lg"
              >
                Tell Us About Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-gray-300 rounded-full opacity-20"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-20"
            animate={{
              x: [0, 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Software Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At BrainerHub Solutions we encourage your vision and turn it into reality with our 
              tailored software solutions. We offer wide range of top-notch software development 
              services that will promote your success and accelerate your business growth.
            </p>
          </FadeInUp>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom">
          <FadeInUp className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create innovative solutions that drive your business forward.
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </Button>
          </FadeInUp>
        </div>
      </section>
    </main>
  )
}
