import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaDumbbell } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Classes', href: '#classes' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleActiveLink = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveLink(`#${section}`)
          }
        }
      }
    }
    window.addEventListener('scroll', handleActiveLink)
    return () => window.removeEventListener('scroll', handleActiveLink)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <FaDumbbell className="text-primary text-3xl" />
            <span className="text-2xl font-oswald font-bold">
              FIT<span className="text-primary">ZONE</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 font-poppins font-medium transition-all duration-300 relative group ${
                  activeLink === link.href ? 'text-primary' : 'text-white hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
                  activeLink === link.href ? 'w-full' : ''
                }`}></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="#contact" className="btn-gradient px-6 py-3 rounded-full font-poppins font-semibold text-white">
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-screen' : 'max-h-0'
      }`}>
        <div className="bg-dark/95 backdrop-blur-md px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`block px-4 py-3 font-poppins font-medium transition-all duration-300 ${
                activeLink === link.href ? 'text-primary bg-primary/10 rounded-lg' : 'text-white hover:text-primary hover:bg-primary/5 rounded-lg'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block btn-gradient px-6 py-3 rounded-full font-poppins font-semibold text-white text-center"
          >
            Join Now
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
