import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, CheckCircle, Calendar, Clock, ArrowRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Booking: React.FC = () => {
  const { t, language } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleBookCall = () => {
    // Replace with your actual Google Form URL
    window.open('https://forms.google.com/your-form-id', '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-[#050C38] to-[#6700A3]/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#FCCBF0]/10 to-[#FF5A57]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#E02F75]/10 to-[#6700A3]/10 rounded-full blur-3xl"
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
              {t('booking.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('booking.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  {t('booking.transformTitle')}
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {t('booking.transformDescription')}
                </p>
              </motion.div>

              <motion.button
                onClick={handleBookCall}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-[#FF5A57] to-[#E02F75] text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-[#FF5A57]/25 flex items-center justify-center gap-3"
              >
                <span className="relative z-10">{t('booking.cta')}</span>
                <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#E02F75] to-[#6700A3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated background elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex items-center justify-center lg:justify-start space-x-4 text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-[#FCCBF0]" />
                <span>{t('booking.freeConsultation')}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Benefits & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Process Steps */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <ArrowRight className="w-6 h-6 text-[#FCCBF0] mr-3" />
                <h3 className="text-xl font-bold text-white">{t('booking.processTitle')}</h3>
              </div>
              
              <div className="space-y-4">
                {t('booking.processSteps').map((item: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    className="flex items-start p-4 rounded-xl bg-gradient-to-r from-[#FF5A57]/10 to-[#E02F75]/10 border border-[#FF5A57]/20"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FF5A57] to-[#E02F75] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">{t('booking.expectationsTitle')}</h3>
              <div className="space-y-4">
                {t('booking.expectations').map((item: string, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-5 h-5 text-[#FCCBF0] mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};