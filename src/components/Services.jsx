import React from 'react'
import { motion } from 'framer-motion'
import { FaDumbbell, FaHeartbeat, FaSpa, FaRunning, FaUserMd, FaSpotify } from 'react-icons/fa'

const services = [
  {
    icon: <FaDumbbell />,
    title: 'Strength Training',
    description: 'Build muscle and increase power with our state-of-the-art equipment and expert guidance.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&q=80'
  },
  {
    icon: <FaHeartbeat />,
    title: 'Cardio Programs',
    description: 'Improve your heart health with our diverse cardio machines and HIIT sessions.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=400&q=80'
  },
  {
    icon: <FaSpa />,
    title: 'Yoga & Pilates',
    description: 'Find balance and flexibility through our comprehensive yoga and pilates classes.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80'
  },
  {
    icon: <FaRunning />,
    title: 'Personal Training',
    description: 'Work one-on-one with certified trainers to achieve your specific fitness goals.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80'
  },
  {
    icon: <FaUserMd />,
    title: 'Nutrition Coaching',
    description: 'Get personalized meal plans and nutrition advice to fuel your body properly.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80'
  },
  {
    icon: <FaSpotify />,
    title: 'Group Fitness',
    description: 'Join energetic group classes like spin, dance, and boot camp for maximum motivation.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            WHAT WE OFFER
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Comprehensive fitness solutions tailored to your unique goals and needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 text-primary text-3xl">
                  {service.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-oswald font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 font-poppins text-sm">{service.description}</p>
                <a href="#contact" className="inline-block mt-4 text-primary font-poppins font-medium text-sm hover:underline">
                  Learn More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
