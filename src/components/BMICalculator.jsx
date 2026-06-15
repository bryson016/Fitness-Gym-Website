import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWeight, FaRulerVertical, FaCalculator } from 'react-icons/fa'

const BMICalculator = () => {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100
      const bmiValue = weight / (heightInMeters * heightInMeters)
      setBmi(bmiValue.toFixed(1))

      if (bmiValue < 18.5) {
        setCategory('Underweight')
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory('Normal')
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory('Overweight')
      } else {
        setCategory('Obese')
      }
    }
  }

  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight': return 'text-yellow-400'
      case 'Normal': return 'text-green-400'
      case 'Overweight': return 'text-orange-400'
      case 'Obese': return 'text-red-400'
      default: return 'text-white'
    }
  }

  return (
    <section id="bmi" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Health Tools
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            BMI CALCULATOR
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Check your Body Mass Index to understand your body composition better.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Height Input */}
              <div>
                <label className="block text-white font-poppins font-medium mb-3">
                  Height (cm)
                </label>
                <div className="relative">
<FaRulerVertical className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder="Enter height"
                    className="w-full pl-12 pr-4 py-4 bg-dark border border-gray-700 rounded-xl text-white font-poppins focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Weight Input */}
              <div>
                <label className="block text-white font-poppins font-medium mb-3">
                  Weight (kg)
                </label>
                <div className="relative">
                  <FaWeight className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Enter weight"
                    className="w-full pl-12 pr-4 py-4 bg-dark border border-gray-700 rounded-xl text-white font-poppins focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateBMI}
              className="w-full btn-gradient py-4 rounded-xl font-poppins font-semibold text-white flex items-center justify-center gap-2"
            >
              <FaCalculator />
              Calculate BMI
            </button>

            {/* Results */}
            {bmi && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 text-center"
              >
                <div className="mb-4">
                  <span className="text-gray-400 font-poppins">Your BMI is</span>
                  <div className="text-6xl font-oswald font-bold text-gradient mt-2">{bmi}</div>
                </div>
                <div className={`inline-block px-6 py-2 rounded-full ${getCategoryColor()} bg-current/10`}>
                  <span className={`font-oswald font-semibold ${getCategoryColor()}`}>
                    {category}
                  </span>
                </div>

                {/* BMI Scale */}
                <div className="mt-8">
                  <div className="relative h-4 rounded-full overflow-hidden bg-gray-700">
                    <div className="absolute left-0 w-1/4 h-full bg-yellow-400"></div>
                    <div className="absolute left-1/4 w-1/4 h-full bg-green-400"></div>
                    <div className="absolute left-1/2 w-1/4 h-full bg-orange-400"></div>
                    <div className="absolute left-3/4 w-1/4 h-full bg-red-400"></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-400 font-poppins">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
