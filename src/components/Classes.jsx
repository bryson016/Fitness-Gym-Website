import React from 'react'
import { motion } from 'framer-motion'
import { FaFire, FaChild, FaWeightHanging, FaBolt, FaClock, FaUsers } from 'react-icons/fa'

const classes = [
  {
    icon: <FaFire />,
    name: 'HIIT Training',
    instructor: 'John Smith',
    level: 'Advanced',
    duration: '45 min',
    capacity: '20 members',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: <FaChild />,
    name: 'Yoga Flow',
    instructor: 'Sarah Johnson',
    level: 'All Levels',
    duration: '60 min',
    capacity: '15 members',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: <FaWeightHanging />,
    name: 'Power Lifting',
    instructor: 'Mike Brown',
    level: 'Intermediate',
    duration: '60 min',
    capacity: '12 members',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: <FaBolt />,
    name: 'CrossFit',
    instructor: 'Alex Turner',
    level: 'Advanced',
    duration: '45 min',
    capacity: '18 members',
    image: 'https://images.unsplash.com/photo-1534438327276-14e9cbc3d9a9?w=600&q=80',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: <FaFire />,
    name: 'Spin Class',
    instructor: 'Emma Davis',
    level: 'All Levels',
    duration: '45 min',
    capacity: '25 members',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2f056b1ac?w=600&q=80',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: <FaChild />,
    name: 'Boxing',
    instructor: 'Chris Wilson',
    level: 'Intermediate',
    duration: '60 min',
    capacity: '16 members',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
    color: 'from-red-500 to-orange-500'
  }
]

const Classes = () => {
  return (
    <section id="classes" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Our Classes
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            FIND YOUR PERFECT CLASS
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            From high-intensity workouts to calming yoga sessions, we have it all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${cls.color} opacity-20 z-10`}></div>
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 bg-gradient-to-r ${cls.color} rounded-full text-white text-xs font-poppins font-medium`}>
                    {cls.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-oswald font-semibold">{cls.name}</h3>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${cls.color}`}>
                    <span className="text-white text-lg">{cls.icon}</span>
                  </div>
                </div>
<div className="flex items-center gap-4 text-sm text-gray-400 font-poppins mb-3">
                  <span className="flex items-center gap-1">
                    <FaUsers className="text-xs" />
                    {cls.instructor}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-400">
                    <FaClock className="text-xs" />
                    {cls.duration}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <FaUsers className="text-xs" />
                    {cls.capacity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-gradient px-8 py-4 rounded-full font-poppins font-semibold text-white inline-flex items-center gap-2">
            Book a Class
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Classes
