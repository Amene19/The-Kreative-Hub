import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Hero: React.FC = () => {
  const { t, language } = useTranslation();

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-[#050C38]">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #6700A3 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #E02F75 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, #FF5A57 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, #6700A3 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 opacity-20"
        />
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 80% 80%, #FCCBF0 0%, transparent 50%)',
              'radial-gradient(circle at 20% 20%, #6700A3 0%, transparent 50%)',
              'radial-gradient(circle at 60% 60%, #E02F75 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, #FCCBF0 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute inset-0 opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className={`${language === 'ar' ? 'text-right' : 'text-left'}`}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-[#FCCBF0] via-[#FF5A57] to-[#E02F75] bg-clip-text text-transparent">
                  {t('hero.headline')}
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t('hero.subheadline')}
              </motion.p>

              <motion.div 
                className={`flex flex-col sm:flex-row gap-4 ${language === 'ar' ? 'sm:justify-end' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={() => window.open('https://forms.google.com/your-form-id', '_blank')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#FF5A57] to-[#E02F75] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">{t('hero.cta')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E02F75] to-[#6700A3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-2 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  <Play className="w-5 h-5" />
                  <span>{t('hero.demoButton')}</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] rounded-full opacity-60 blur-xl"
              />
              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-[#E02F75] to-[#6700A3] rounded-full opacity-40 blur-xl"
              />
              
              {/* Main Hero Graphic */}
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  {/* Dashboard Mockup */}
                  <div className="bg-gradient-to-r from-[#FF5A57]/20 to-[#E02F75]/20 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-[#FF5A57] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#FCCBF0] rounded-full"></div>
                        <div className="w-3 h-3 bg-[#E02F75] rounded-full"></div>
                      </div>
                      <div className="text-white text-sm">{t('hero.analyticsDashboard')}</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-white">
                        <span className="text-sm">{t('hero.engagementRate')}</span>
                        <span className="text-[#FCCBF0] font-bold">+300%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 2, delay: 1 }}
                        />
                      </div>
                      <div className="flex justify-between text-white">
                        <span className="text-sm">{t('hero.roi')}</span>
                        <span className="text-[#FCCBF0] font-bold">+245%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#FF5A57] to-[#E02F75] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '70%' }}
                          transition={{ duration: 2, delay: 1.5 }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Media Icons */}
                  <div className="grid grid-cols-3 gap-4">
                    {['📱', '📊', '🎯'].map((icon, index) => (
                      <motion.div
                        key={index}
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.5 
                        }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center text-2xl border border-white/20"
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};