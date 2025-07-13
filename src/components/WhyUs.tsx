import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Palette, BarChart, Award } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const icons = [Palette, BarChart, Award];

export const WhyUs: React.FC = () => {
  const { t, language } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const whyUsItems = t('whyUs.items');

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#050C38] to-[#6700A3]/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#FCCBF0]/10 to-[#FF5A57]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#E02F75]/10 to-[#6700A3]/10 rounded-full blur-3xl"
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
              {t('whyUs.title')}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyUsItems.map((item: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group text-center"
              >
                <div className="relative">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#FF5A57] via-[#E02F75] to-[#6700A3] rounded-2xl flex items-center justify-center relative overflow-hidden group-hover:from-[#FCCBF0] group-hover:via-[#FF5A57] group-hover:to-[#E02F75] transition-all duration-500"
                  >
                    <Icon className="w-12 h-12 text-white relative z-10" />
                    {/* Animated background */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FCCBF0] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] rounded-full opacity-60 blur-sm"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-[#E02F75] to-[#6700A3] rounded-full opacity-40 blur-sm"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {t('whyUs.stats').map((stat: any, index: number) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#FF5A57]/30 transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 1 }}
                className="text-3xl font-bold bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};