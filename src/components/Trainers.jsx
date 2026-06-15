import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

const trainers = [
  {
    name: 'John Smith',
    role: 'Head Trainer',
    specialty: 'Strength & Conditioning',
    experience: '10+ Years',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=80',
    social: { instagram: '#', twitter: '#', facebook: '#' }
  },
  {
    name: 'Sarah Johnson',
    role: 'Yoga Instructor',
    specialty: 'Yoga & Pilates',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&q=80',
    social: { instagram: '#', twitter: '#', facebook: '#' }
  },
  {
    name: 'Mike Brown',
    role: 'Personal Trainer',
    specialty: 'Power Lifting',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    social: { instagram: '#', twitter: '#', facebook: '#' }
  },
  {
    name: 'Emma Davis',
    role: 'Cardio Specialist',
    specialty: 'HIIT & Spin',
    experience: '6+ Years',
    image: 'https://images.unsplash.com/photo-1609899464726-209befb3f5d1?w=600&q=80',
    social: { instagram: '#', twitter: '#', facebook: '#' }
  },
  {
    name: 'Alex Turner',
    role: 'CrossFit Coach',
    specialty: 'CrossFit Training',
    experience: '9+ Years',
    image: 'https://images.unsplash.com/photo-1534438327276-14e9cbc3d9a9?w=600&q=80',
    social: { instagram: '#', twitter: '#', facebook: '#' }
  },
  {
    name: 'Lisa Chen',
    role: 'Nutrition Coach',
    specialty: 'Diet & Nutrition',
    experience: '7+ Years',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    social: { instagram: '#', twitter: '#', facebook: '#' }
  }
]

const Trainers = () => {
  return (
    <section id="trainers" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            MEET OUR TRAINERS
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Expert professionals dedicated to helping you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a href={trainer.social.instagram} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300">
                    <FaInstagram className="text-white text-lg" />
                  </a>
                  <a href={trainer.social.twitter} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300">
                    <FaTwitter className="text-white text-lg" />
                  </a>
                  <a href={trainer.social.facebook} className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-300">
                    <FaFacebook className="text-white text-lg" />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-oswald font-semibold">{trainer.name}</h3>
                <p className="text-primary font-poppins font-medium text-sm mt-1">{trainer.role}</p>
                <p className="text-gray-400 font-poppins text-sm mt-2">{trainer.specialty}</p>
                <p className="text-gray-500 font-poppins text-xs mt-2">{trainer.experience} Experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
