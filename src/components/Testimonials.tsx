import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Testimonials: React.FC = () => {
  const { t, language } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = t('testimonials.items');

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#6700A3]/20 to-[#050C38] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#E02F75] to-[#6700A3] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={`text-center mb-16 ${language === 'ar' ? 'text-right' : 'text-left'}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FCCBF0] via-[#FF5A57] to-[#E02F75] bg-clip-text text-transparent">
              {t('testimonials.title')}
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-gradient-to-r from-[#FF5A57] to-[#E02F75] rounded-full flex items-center justify-center text-white hover:from-[#E02F75] hover:to-[#6700A3] transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-gradient-to-r from-[#FF5A57] to-[#E02F75] rounded-full flex items-center justify-center text-white hover:from-[#E02F75] hover:to-[#6700A3] transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] rounded-full flex items-center justify-center opacity-20"
              >
                <Quote className="w-8 h-8 text-white" />
              </motion.div>

              <div className="relative z-10">
                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex justify-center mb-6"
                >
                  {[...Array(testimonials[currentIndex]?.rating || 5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.4 }}
                    >
                      <Star className="w-6 h-6 text-[#FCCBF0] fill-current mx-1" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Testimonial Content */}
                <motion.blockquote
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`text-xl md:text-2xl text-white leading-relaxed mb-8 font-medium ${
                    language === 'ar' ? 'text-right' : 'text-center'
                  }`}
                >
                  "{testimonials[currentIndex]?.content}"
                </motion.blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-[#FCCBF0] font-bold text-lg mb-1">
                    {testimonials[currentIndex]?.name}
                  </div>
                  <div className="text-gray-300">
                    {testimonials[currentIndex]?.company}
                  </div>
                </motion.div>
              </div>

              {/* Decorative Background Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-[#FF5A57]/10 to-[#E02F75]/10 rounded-full blur-xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-r from-[#6700A3]/10 to-[#FCCBF0]/10 rounded-full blur-xl"
              />
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center mt-8 space-x-3"
          >
            {testimonials.map((_: any, index: number) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#FF5A57] to-[#E02F75] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};