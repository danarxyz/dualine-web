'use client'
import { Space_Grotesk } from 'next/font/google'
import { motion} from "framer-motion"
import { AuroraBackgroundDemo } from "./HeroComponents/AuroraBg"
import { TypingAnimationDemo } from "./HeroComponents/Type"
import { HeroVideoDialogDemo } from "./HeroComponents/HeroVideo"
import { ParticlesDemo } from "./HeroComponents/Particles"
import { RainbowButtonDemo } from "./HeroComponents/AnimatedButton"
import  GlobeDemo  from "./AboutUs/Globe"
import { AnimatedTestimonialsDemo } from "./AboutUs/AnimatedTestimonial"
import { StatsCard } from "@/components/ui/stats-card"
import {TimelineItem} from "@/components/ui/timeline-item"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function Main() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <ParticlesDemo />
        <AuroraBackgroundDemo />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="relative flex flex-col items-center min-h-screen max-w-7xl pt-40 mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-6xl lg:text-8xl font-bold tracking-tight max-w-7xl mx-auto mb-8 leading-tight"
          >
            <span className="inline-block bg-gradient-to-br from-white via-gray-300 to-gray-700 text-transparent bg-clip-text animate-gradient py-2">
              Dualine is here to
              <br />
              <div className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl max-w-[1000px] mx-auto px-2">
                <TypingAnimationDemo />
              </div>
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Dualine is committed to providing seamless, reliable, and efficient logistics services, connecting businesses and individuals to every corner of the world with unparalleled speed and care.
          </motion.p>

          <motion.div variants={itemVariants}>
            <RainbowButtonDemo/>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="relative max-w-4xl w-full mx-auto mt-16"
          >
            <HeroVideoDialogDemo />
          </motion.div>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.section className={`relative min-h-screen pt-20  ${spaceGrotesk.variable}`}>
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-indigo-500/5 to-pink-500/5" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div 
          className="absolute inset-0 backdrop-blur-[100px]" 
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(24, 24, 27, 0) 0%, rgba(24, 24, 27, 0.8) 100%)'
          }}
        />
        
        {/* Particles Background */}
        <div className="absolute inset-0 z-0">
          <ParticlesDemo
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center mb-20">
            <motion.span 
              className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-purple-500/20 font-['Cabinet_Grotesk']"
            >
              Our Journey
            </motion.span>
            <motion.h2 
              className="font-['Cabinet_Grotesk'] text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight"
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
                  About
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </span>{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Dualine
                </span>
                <motion.span 
                  className="absolute -inset-1 block bg-purple-500/20 rounded-lg -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </span>
            </motion.h2>
            <motion.p 
              className="relative font-space text-gray-400 max-w-2xl mx-auto text-lg font-light group"
            >
              <span className="relative inline-block">
                Pioneering logistics solutions since 
                <span className="relative inline-block px-2">
                  <span className="relative z-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-medium">2015</span>
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-[6px] bg-purple-500/20 -z-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </span>
                , transforming how businesses 
                <span className="relative inline-block group">
                  connect globally
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </span>
            </motion.p>
          </div>

          {/* Timeline Section */}
          <div className="relative mb-32">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent" />
            <div className="space-y-20">
              <TimelineItem 
                year="2015"
                title="Foundation"
                description="Started with a vision to revolutionize logistics"
                position="left"
                icon="truck"
              />
              <TimelineItem 
                year="2018"
                title="Global Expansion"
                description="Extended operations to 25+ countries"
                position="right"
                icon="globe"
              />
              <TimelineItem 
                year="2020"
                title="Digital Transformation"
                description="Launched AI-powered tracking system"
                position="left"
                icon="robot"
              />
              <TimelineItem 
                year="2023"
                title="Sustainability Focus"
                description="Achieved carbon neutral operations"
                position="right"
                icon="leaf"
              />
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 lg:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="relative p-[1px] rounded-xl group hover:scale-105 transition-transform duration-300"
              style={{
                background: "linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))"
              }}
            >
              <div className="relative p-6 rounded-xl bg-black/20 backdrop-blur-sm">
                <StatsCard value={50} suffix="+" label="Countries" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="relative p-[1px] rounded-xl group hover:scale-105 transition-transform duration-300"
              style={{
                background: "linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))"
              }}
            >
              <div className="relative p-6 rounded-xl bg-black/20 backdrop-blur-sm">
                <StatsCard value={10000} suffix="+" label="Clients" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="relative p-[1px] rounded-xl group hover:scale-105 transition-transform duration-300"
              style={{
                background: "linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))"
              }}
            >
              <div className="relative p-6 rounded-xl bg-black/20 backdrop-blur-sm">
                <StatsCard value={24} suffix="/7" label="Support" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              className="relative p-[1px] rounded-xl group hover:scale-105 transition-transform duration-300"
              style={{
                background: "linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))"
              }}
            >
              <div className="relative p-6 rounded-xl bg-black/20 backdrop-blur-sm">
                <StatsCard value={99} suffix="%" label="Success" />
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="flex lg:flex-row flex-col lg:items-center lg:gap-20">
            {/* Globe - Hidden on small screens */}
            <div className="hidden lg:block lg:w-1/2 relative z-10">
              <div className="relative p-[1px] group">
                <div className="p-8">
                  <GlobeDemo />
                </div>
              </div>
            </div>
            
            {/* Testimonials - Full width on small screens */}
            <div className="w-full lg:w-1/2 relative z-10">
              <div className="relative p-[1px] group">
                <div className="p-8 rounded-3xl">
                  <AnimatedTestimonialsDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      
    </>
  )
}
