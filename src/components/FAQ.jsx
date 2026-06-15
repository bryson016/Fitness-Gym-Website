import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    question: 'What are your gym operating hours?',
    answer: 'Our gym is open 24/7 for Elite members, and from 5 AM to 11 PM for Basic and Pro members. We offer flexible hours to accommodate all schedules.'
  },
  {
    question: 'Do you offer free trial sessions?',
    answer: 'Yes! We offer a complimentary trial session for all new members. This includes a gym tour, equipment overview, and a consultation with one of our trainers.'
  },
  {
    question: 'What should I bring to my first workout?',
    answer: 'For your first workout, bring comfortable athletic clothing, athletic shoes, a water bottle, and a towel. We provide lockers and changing facilities on-site.'
  },
  {
    question: 'Do you offer personal training packages?',
    answer: 'Yes, we offer various personal training packages. Pro and Elite members include personal training sessions in their membership. Additional sessions can be purchased separately.'
  },
  {
    question: 'Can I cancel or freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 3 months per year for travel or medical reasons. Annual memberships can be canceled with 30 days notice.'
  },
  {
    question: 'Do you have group fitness classes?',
    answer: 'Absolutely! We offer over 100 group fitness classes weekly including HIIT, yoga, spin, boxing, Pilates, and more. All classes are included in Pro and Elite memberships.'
  },
  {
    question: 'Are your trainers certified?',
    answer: 'All our trainers hold nationally recognized certifications and have years of experience. Many also hold specialized certifications in nutrition and specific training methodologies.'
  },
  {
    question: 'What amenities do you offer?',
    answer: 'Our amenities include free parking, locker rooms, showers, sauna, steam room, smoothie bar, pro shop, and kids area. Elite members get access to all amenities.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-gray-400 font-poppins">
            Find answers to the most common questions about FitZone.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-oswald font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <span className="text-primary text-xl flex-shrink-0">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-400 font-poppins">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
