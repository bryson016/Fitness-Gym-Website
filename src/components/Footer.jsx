import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaDumbbell, FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin, FaArrowRight, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-dark pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <FaDumbbell className="text-primary text-3xl" />
              <span className="text-2xl font-oswald font-bold">
                FIT<span className="text-primary">ZONE</span>
              </span>
            </a>
            <p className="text-gray-400 font-poppins text-sm mb-6">
              Transform your body and mind with FitZone. Join our community and start your fitness journey today.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaYoutube />
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-oswald font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['About Us', 'Services', 'Classes', 'Trainers', 'Pricing', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 font-poppins text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-oswald font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span className="text-gray-400 font-poppins text-sm">
                  123 Fitness Street,健康区<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <span className="text-gray-400 font-poppins text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span className="text-gray-400 font-poppins text-sm">info@fitzone.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-oswald font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 font-poppins text-sm mb-4">
              Subscribe to our newsletter for fitness tips and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-secondary border border-gray-700 rounded-xl text-white font-poppins focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-gradient py-3 rounded-xl font-poppins font-semibold text-white flex items-center justify-center gap-2"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                <FaArrowRight className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 font-poppins text-sm">
              © 2024 FitZone. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 font-poppins text-sm hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 font-poppins text-sm hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 font-poppins text-sm hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
