import React from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaTimes } from 'react-icons/fa'

const plans = [
  {
    name: 'Basic',
    price: '29',
    period: '/month',
    description: 'Perfect for beginners',
    features: [
      { name: 'Gym Access', included: true },
      { name: 'Basic Equipment', included: true },
      { name: 'Locker Room Access', included: true },
      { name: 'Free Parking', included: true },
      { name: 'Personal Training', included: false },
      { name: 'Group Classes', included: false },
      { name: 'Nutrition Plan', included: false },
      { name: 'Spa Access', included: false },
    ],
    popular: false
  },
  {
    name: 'Pro',
    price: '59',
    period: '/month',
    description: 'Most popular choice',
    features: [
      { name: 'Gym Access', included: true },
      { name: 'All Equipment', included: true },
      { name: 'Locker Room Access', included: true },
      { name: 'Free Parking', included: true },
      { name: 'Personal Training', included: '2 sessions/mo' },
      { name: 'Group Classes', included: true },
      { name: 'Nutrition Plan', included: false },
      { name: 'Spa Access', included: false },
    ],
    popular: true
  },
  {
    name: 'Elite',
    price: '99',
    period: '/month',
    description: 'Ultimate fitness experience',
    features: [
      { name: '24/7 Gym Access', included: true },
      { name: 'All Equipment', included: true },
      { name: 'Private Locker', included: true },
      { name: 'Free Parking', included: true },
      { name: 'Personal Training', included: '8 sessions/mo' },
      { name: 'All Group Classes', included: true },
      { name: 'Custom Nutrition Plan', included: true },
      { name: 'Spa & Sauna Access', included: true },
    ],
    popular: false
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            CHOOSE YOUR PLAN
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Flexible plans designed to fit your lifestyle and fitness goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative card rounded-2xl p-8 ${
                plan.popular ? 'border-primary lg:scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary px-4 py-1 rounded-full text-white text-sm font-poppins font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-oswald font-semibold mb-2">{plan.name}</h3>
                <p className="text-gray-400 font-poppins text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-8">
                <span className="text-5xl font-oswald font-bold">$</span>
                <span className="text-5xl font-oswald font-bold text-gradient">{plan.price}</span>
                <span className="text-gray-400 font-poppins">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-between">
                    <span className={`font-poppins text-sm ${
                      feature.included ? 'text-white' : 'text-gray-500'
                    }`}>
                      {feature.name}
                    </span>
                    {typeof feature.included === 'boolean' ? (
                      feature.included ? (
                        <FaCheck className="text-primary" />
                      ) : (
                        <FaTimes className="text-gray-600" />
                      )
                    ) : (
                      <span className="text-primary text-sm font-poppins">{feature.included}</span>
                    )}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`block w-full py-4 rounded-full font-poppins font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? 'btn-gradient text-white'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
