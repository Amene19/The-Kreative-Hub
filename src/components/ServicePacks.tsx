import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Zap, Crown, Settings } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const ServicePacks: React.FC = () => {
  const { t, language } = useTranslation();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const packs = t('servicePacks.packs');

  const packIcons = [Zap, Star, Crown];
  const packColors = [
    'from-[#FF5A57] to-[#E02F75]',
    'from-[#E02F75] to-[#6700A3]',
    'from-[#FCCBF0] to-[#FF5A57]'
  ];

  return (
    <section id="service-packs" className="py-20 bg-gradient-to-b from-[#050C38] to-[#6700A3]/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#FCCBF0]/10 to-[#FF5A57]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-[#E02F75]/10 to-[#6700A3]/10 rounded-full blur-3xl"
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
              {t('servicePacks.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {t('servicePacks.subtitle')}
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
              <div className="flex">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    billingCycle === 'monthly'
                      ? 'bg-gradient-to-r from-[#FF5A57] to-[#E02F75] text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    billingCycle === 'yearly'
                      ? 'bg-gradient-to-r from-[#FF5A57] to-[#E02F75] text-white shadow-lg'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="ml-2 text-xs bg-[#FCCBF0] text-[#050C38] px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Service Packs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packs.map((pack: any, index: number) => {
            const Icon = packIcons[index];
            const isPopular = index === 1;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative ${isPopular ? 'md:-mt-4' : ''}`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] text-[#050C38] px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-300 h-full ${
                  isPopular 
                    ? 'border-[#FF5A57]/50 shadow-xl shadow-[#FF5A57]/20' 
                    : 'border-white/20 group-hover:border-[#FF5A57]/30'
                }`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-r ${packColors[index]} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Pack Name */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-[#FCCBF0] transition-colors">
                    {pack.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] bg-clip-text text-transparent">
                      {billingCycle === 'monthly' ? pack.monthlyPrice : pack.yearlyPrice}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {billingCycle === 'monthly' ? 'per month' : 'per year'}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {pack.features.map((feature: string, featureIndex: number) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                        className="flex items-center"
                      >
                        <Check className="w-5 h-5 text-[#FCCBF0] mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://forms.google.com/your-form-id', '_blank')}
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#FF5A57] to-[#E02F75] text-white hover:from-[#E02F75] hover:to-[#6700A3] shadow-lg hover:shadow-xl'
                        : 'border-2 border-[#FF5A57]/50 text-[#FF5A57] hover:bg-[#FF5A57] hover:text-white'
                    }`}
                  >
                    {pack.cta}
                  </motion.button>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF5A57]/5 to-[#E02F75]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Pack Option */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-[#FCCBF0]/50 transition-all duration-300 text-center"
          >
            {/* Custom Icon */}
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-gradient-to-r from-[#6700A3] to-[#E02F75] rounded-2xl flex items-center justify-center mb-6 mx-auto"
            >
              <Settings className="w-10 h-10 text-white" />
            </motion.div>

            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#FCCBF0] transition-colors">
              🎨 {t('servicePacks.customPack.title')}
            </h3>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t('servicePacks.customPack.description')}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://forms.google.com/your-form-id', '_blank')}
              className="bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] text-[#050C38] px-8 py-4 rounded-2xl font-bold text-lg hover:from-[#FF5A57] hover:to-[#E02F75] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('servicePacks.customPack.cta')}
            </motion.button>

            {/* Animated background elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-r from-[#FCCBF0]/20 to-[#FF5A57]/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-16 h-16 bg-gradient-to-r from-[#E02F75]/20 to-[#6700A3]/20 rounded-full blur-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};