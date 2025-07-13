import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, TrendingUp, Camera, BarChart3, Globe } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const serviceIcons = [Smartphone, TrendingUp, Camera, BarChart3, Globe];

export const Services: React.FC = () => {
  const { t, language } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = t('services.items');

  return (
    <section id="services" className="py-20 bg-[#050C38] relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6700A3]/10 to-transparent" />
      
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
              {t('services.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full transition-all duration-300 group-hover:border-[#FF5A57]/50 group-hover:shadow-xl group-hover:shadow-[#FF5A57]/20">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-16 h-16 bg-gradient-to-r from-[#FF5A57] to-[#E02F75] rounded-xl flex items-center justify-center mb-6 group-hover:from-[#E02F75] group-hover:to-[#6700A3] transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FCCBF0] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A57]/5 to-[#E02F75]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://forms.google.com/your-form-id', '_blank')}
            className="bg-gradient-to-r from-[#FF5A57] to-[#E02F75] text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-[#E02F75] hover:to-[#6700A3] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('services.cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};