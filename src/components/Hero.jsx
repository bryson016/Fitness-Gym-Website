import React from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/60 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e9cbc3d9a9?w=1920&q=80"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary font-poppins font-medium text-sm mb-6">
            Transform Your Body ⚡
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-bold mb-6"
        >
          BUILD YOUR <span className="text-gradient">PERFECT</span> BODY
          <br />
          <span className="text-white">WITH EXPERT TRAINING</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-300 font-poppins max-w-2xl mx-auto mb-10"
        >
          Join FitZone and discover the best version of yourself. 
          State-of-the-art equipment, expert trainers, and a motivating community await you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="btn-gradient px-8 py-4 rounded-full font-poppins font-semibold text-white flex items-center gap-2"
          >
            Get Started
            <FaArrowRight className="text-sm" />
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full font-poppins font-semibold text-white border-2 border-white/30 hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            <FaPlay className="text-sm" />
            Learn More
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '10K+', label: 'Members' },
            { number: '50+', label: 'Expert Trainers' },
            { number: '100+', label: 'Classes Weekly' },
            { number: '98%', label: 'Satisfaction Rate' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-oswald font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-poppins text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
