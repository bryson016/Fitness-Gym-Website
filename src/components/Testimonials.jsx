import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const testimonials = [
  {
    name: 'James Anderson',
    role: 'Member since 2022',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    text: 'FitZone changed my life! The trainers are incredibly knowledgeable and supportive. I\'ve lost 30 pounds and gained much more confidence. The community here is amazing!'
  },
  {
    name: 'Maria Garcia',
    role: 'Member since 2021',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    text: 'Best gym I\'ve ever been to! The facilities are top-notch, and the variety of classes keeps me motivated. The yoga classes with Sarah are absolutely incredible.'
  },
  {
    name: 'David Chen',
    role: 'Member since 2023',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rating: 5,
    text: 'As a professional athlete, I need the best training environment. FitZone exceeds all my expectations with its equipment and expert trainers.'
  },
  {
    name: 'Emma Wilson',
    role: 'Member since 2022',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d84?w=200&q=80',
    rating: 5,
    text: 'The personal training here is exceptional. My trainer created a program tailored to my goals, and the results have been incredible. Highly recommend!'
  },
  {
    name: 'Michael Brown',
    role: 'Member since 2021',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
    rating: 5,
    text: 'I\'ve tried many gyms, but FitZone is different. The community feel, the equipment, the trainers - everything is top quality. Best investment I\'ve made!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            WHAT OUR MEMBERS SAY
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Real stories from real people who transformed their lives with FitZone.
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card rounded-2xl p-8 h-full"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <FaQuoteLeft className="text-primary/30 text-3xl mb-4" />
                <p className="text-gray-300 font-poppins mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-oswald font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 font-poppins text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
