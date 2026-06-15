import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    if (!formData.plan) newErrors.plan = 'Please select a plan'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          plan: '',
          message: ''
        })
      }, 3000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card rounded-2xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="text-primary text-6xl mx-auto mb-4" />
                  <h3 className="text-2xl font-oswald font-bold mb-2">Thank You!</h3>
                  <p className="text-gray-400 font-poppins">We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-white font-poppins font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 bg-dark border rounded-xl text-white font-poppins focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500' : 'border-gray-700 focus:border-primary'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white font-poppins font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 bg-dark border rounded-xl text-white font-poppins focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-700 focus:border-primary'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-white font-poppins font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-dark border border-gray-700 rounded-xl text-white font-poppins focus:border-primary focus:outline-none transition-colors"
                        placeholder="+1 234 567 890"
                      />
                    </div>

                    {/* Plan */}
                    <div>
                      <label className="block text-white font-poppins font-medium mb-2">
                        Interested Plan *
                      </label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className={`w-full px-4 py-4 bg-dark border rounded-xl text-white font-poppins focus:outline-none transition-colors ${
                          errors.plan ? 'border-red-500' : 'border-gray-700 focus:border-primary'
                        }`}
                      >
                        <option value="">Select a plan</option>
                        <option value="basic">Basic - $29/month</option>
                        <option value="pro">Pro - $59/month</option>
                        <option value="elite">Elite - $99/month</option>
                      </select>
                      {errors.plan && <p className="text-red-500 text-sm mt-1">{errors.plan}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-4 bg-dark border rounded-xl text-white font-poppins focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-700 focus:border-primary'
                      }`}
                      placeholder="Tell us about your fitness goals..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gradient py-4 rounded-xl font-poppins font-semibold text-white"
                  >
                    Send Message
                  </button>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card rounded-2xl p-8">
              <h3 className="text-xl font-oswald font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-oswald font-semibold mb-1">Location</h4>
                    <p className="text-gray-400 font-poppins text-sm">
                      123 Fitness Street,健康区<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-oswald font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400 font-poppins text-sm">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-oswald font-semibold mb-1">Email</h4>
                    <p className="text-gray-400 font-poppins text-sm">
                      info@fitzone.com<br />
                      support@fitzone.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <h4 className="font-oswald font-semibold mb-1">Hours</h4>
                    <p className="text-gray-400 font-poppins text-sm">
                      Mon - Fri: 5:00 AM - 11:00 PM<br />
                      Sat - Sun: 7:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="card rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Map"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-poppins font-medium hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
