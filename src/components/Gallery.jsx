import React from 'react'
import { motion } from 'framer-motion'
import { FaSearchPlus } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'

const galleryImages = [
  'https://images.unsplash.com/photo-1534438327276-14e9cbc3d9a9?w=800&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
  'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=800&q=80',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
  'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80',
  'https://images.unsplash.com/photo-1517963879433-6ad2f056b1ac?w=800&q=80',
  'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=800&q=80',
  'https://images.unsplash.com/photo-1609899464726-209befb3f5d1?w=800&q=80',
  'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=80'
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-poppins font-medium text-sm uppercase tracking-wider">
            Our Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl font-oswald font-bold mt-2 mb-4">
            FITZONE GALLERY
          </h2>
          <p className="text-gray-400 font-poppins max-w-2xl mx-auto">
            Take a visual tour of our state-of-the-art facilities and vibrant community.
          </p>
        </motion.div>

        <Swiper
          modules={[FreeMode, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="pb-12"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <FaSearchPlus className="text-white" />
                  </div>
                </div>
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Gallery
