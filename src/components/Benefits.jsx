import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaShieldAlt, FaClock, FaMedal, FaUsers, FaHeart } from 'react-icons/fa'

const benefits = [
  {
    icon: <FaTrophy />,
    title: 'Championship Quality',
    description: 'Industry-leading equipment and facilities meet professional standards.',
    stat: '100%'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Secure Environment',
    description: '24/7 security and monitored premises for your peace of mind.',
    stat: '24/7'
  },
  {
    icon: <FaClock />,
    title: 'Flexible Hours',
    description: 'Train whenever it suits you with extended operating hours.',
    stat: '18hr'
  },
  {
    icon: <FaMedal />,
    title: 'Certified Excellence',
    description: 'Award-winning trainers with international certifications.',
    stat: '50+'
  },
  {
    icon: <FaUsers />,
    title: 'Community Events',
    description: 'Regular competitions, challenges, and social gatherings.',
    stat: '200+'
  },
  {
    icon: <FaHeart />,
    title: 'Health First',
    description: 'Comprehensive health monitoring and wellness programs.',
    stat: '98%'
  }
]

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            MEMBERSHIP BENEFITS
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Experience the advantages of being part of the FitZone family.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card rounded-2xl p-8 text-center group hover:border-primary transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <div className="text-4xl font-oswald font-bold text-primary mb-2">{benefit.stat}</div>
              <h3 className="text-xl font-oswald font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 font-poppins text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-gradient px-10 py-4 rounded-full font-poppins font-semibold text-white inline-flex items-center gap-2">
            Join FitZone Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
