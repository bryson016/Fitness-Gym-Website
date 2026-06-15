import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaHeart, FaClock } from 'react-icons/fa'

const features = [
  {
    icon: <FaAward />,
    title: 'Expert Trainers',
    description: 'Certified professionals with years of experience in fitness and nutrition.'
  },
  {
    icon: <FaUsers />,
    title: 'Community',
    description: 'Join a supportive community of like-minded fitness enthusiasts.'
  },
  {
    icon: <FaHeart />,
    title: 'Health Focus',
    description: 'We prioritize your overall health and wellbeing, not just aesthetics.'
  },
  {
    icon: <FaClock />,
    title: '24/7 Access',
    description: 'Train anytime with our round-the-clock facility access.'
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="About FitZone"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-2xl z-20 hidden sm:block">
                <div className="text-4xl font-oswald font-bold text-white">10+</div>
                <div className="text-white/80 font-poppins text-sm">Years Experience</div>
              </div>
            </div>
            <div className="absolute top-1/4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl z-0"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-6">
              TRANSFORM YOUR FITNESS JOURNEY
            </h2>
            <p className="text-gray-400 font-poppins mb-8 leading-relaxed">
              At FitZone, we believe that everyone deserves to feel strong, confident, and healthy. 
              Our state-of-the-art facility offers everything you need to achieve your fitness goals, 
              from expert personal training to innovative classes and premium equipment.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 rounded-xl"
                >
                  <div className="text-primary text-2xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-oswald font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 font-poppins text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
