import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export const Footer: React.FC = () => {
  const { t, language } = useTranslation();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.about'), href: '#why-us' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.contact'), href: '#booking' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#050C38] to-[#000000] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#6700A3] to-[#E02F75] rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-[#FF5A57] to-[#FCCBF0] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FCCBF0] to-[#FF5A57] bg-clip-text text-transparent">
                {t('footer.companyName')}
              </h3>
              <p className="text-gray-300 mt-2 leading-relaxed">
                {t('footer.companyDescription')}
              </p>
            </motion.div>

            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300 hover:text-[#FCCBF0] transition-colors"
              >
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <a href={`mailto:${t('footer.contact')}`} className="hover:underline">
                  {t('footer.contact')}
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300 hover:text-[#FCCBF0] transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>{t('footer.phone')}</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-gray-300 hover:text-[#FCCBF0] transition-colors"
              >
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>{t('footer.location')}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            <h4 className="text-xl font-bold text-white mb-6">{t('footer.quickLinks')}</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-[#FCCBF0] transition-all duration-300 hover:underline"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            <h4 className="text-xl font-bold text-white mb-6">{t('footer.servicesTitle')}</h4>
            <div className="space-y-3">
              {t('footer.servicesList').map((service: string, index: number) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="text-gray-300 hover:text-[#FCCBF0] transition-colors cursor-pointer"
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={language === 'ar' ? 'text-right' : 'text-left'}
          >
            <h4 className="text-xl font-bold text-white mb-6">{t('footer.stayConnected')}</h4>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gradient-to-r from-[#FF5A57] to-[#E02F75] rounded-lg flex items-center justify-center text-white hover:from-[#E02F75] hover:to-[#6700A3] transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">
                {t('footer.newsletterText')}
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="flex-1 bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF5A57] transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#FF5A57] to-[#E02F75] px-4 py-2 rounded-r-lg text-white font-medium hover:from-[#E02F75] hover:to-[#6700A3] transition-all duration-300"
                >
                  {t('footer.newsletterButton')}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </div>
            <div className="flex space-x-6 text-sm">
              <motion.a
                whileHover={{ color: '#FCCBF0' }}
                href="#"
                className="text-gray-400 hover:text-[#FCCBF0] transition-colors"
              >
                {t('footer.links.privacy')}
              </motion.a>
              <motion.a
                whileHover={{ color: '#FCCBF0' }}
                href="#"
                className="text-gray-400 hover:text-[#FCCBF0] transition-colors"
              >
                {t('footer.links.terms')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};