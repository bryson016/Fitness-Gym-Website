import React from 'react'
import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

const blogs = [
  {
    title: '10 Tips for Building Muscle Fast',
    excerpt: 'Discover the proven strategies that professional bodybuilders use to maximize muscle growth in minimal time.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80',
    date: 'Dec 15, 2024',
    author: 'John Smith',
    category: 'Training'
  },
  {
    title: 'Nutrition Guide for Optimal Performance',
    excerpt: 'Learn how to fuel your body properly for maximum energy and recovery throughout your fitness journey.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    date: 'Dec 10, 2024',
    author: 'Lisa Chen',
    category: 'Nutrition'
  },
  {
    title: 'The Benefits of Morning Workouts',
    excerpt: 'Why exercising in the morning can transform your fitness results and boost your overall health.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=600&q=80',
    date: 'Dec 5, 2024',
    author: 'Sarah Johnson',
    category: 'Lifestyle'
  },
  {
    title: 'How to Prevent Workout Injuries',
    excerpt: 'Essential tips and techniques to keep you safe and injury-free during your training sessions.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
    date: 'Nov 28, 2024',
    author: 'Mike Brown',
    category: 'Health'
  },
  {
    title: 'HIIT vs Traditional Cardio',
    excerpt: 'Comparing the effectiveness of high-intensity interval training versus steady-state cardio for fat loss.',
    image: 'https://images.unsplash.com/photo-1517963879433-6ad2f056b1ac?w=600&q=80',
    date: 'Nov 20, 2024',
    author: 'Emma Davis',
    category: 'Training'
  },
  {
    title: 'Building a Sustainable Fitness Routine',
    excerpt: 'How to create a workout plan that you can maintain for life, not just for January.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    date: 'Nov 15, 2024',
    author: 'Alex Turner',
    category: 'Lifestyle'
  }
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Latest Articles
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            FITZONE BLOG
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Expert advice, tips, and insights to help you achieve your fitness goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-primary rounded-full text-white text-xs font-poppins font-medium">
                    {blog.category}
                  </span>
                </div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-oswald font-semibold mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 font-poppins text-sm mb-4">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaCalendar className="text-xs" />
                      {blog.date}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-primary">
                    <FaUser className="text-xs" />
                    {blog.author}
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
          <a href="#" className="btn-gradient px-8 py-4 rounded-full font-poppins font-semibold text-white inline-flex items-center gap-2">
            View All Posts
            <FaArrowRight className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
