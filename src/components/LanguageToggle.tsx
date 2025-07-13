import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const languages = [
  { 
    code: 'en', 
    name: 'English',
    flag: 'https://flagcdn.com/w40/gb.png',
    flagAlt: 'UK Flag'
  },
  { 
    code: 'fr', 
    name: 'Français',
    flag: 'https://flagcdn.com/w40/fr.png',
    flagAlt: 'French Flag'
  },
  { 
    code: 'ar', 
    name: 'العربية',
    flag: 'https://flagcdn.com/w40/tn.png',
    flagAlt: 'Tunisian Flag'
  }
];

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center space-x-3">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code as any)}
          whileHover={{ 
            scale: 1.15,
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
          className={`relative transition-all duration-300 rounded-lg overflow-hidden ${
            language === lang.code 
              ? 'ring-2 ring-[#FF5A57] ring-offset-2 ring-offset-[#050C38] shadow-lg shadow-[#FF5A57]/25' 
              : 'opacity-70 hover:opacity-100'
          }`}
          title={lang.name}
        >
          <div className="w-8 h-6 relative">
            <img 
              src={lang.flag} 
              alt={lang.flagAlt}
              className="w-full h-full object-cover rounded-sm"
              loading="lazy"
            />
            {language === lang.code && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#FF5A57] to-[#E02F75] rounded-full"
              />
            )}
          </div>
          
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FF5A57]/20 to-[#E02F75]/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-sm"
            whileHover={{ opacity: 1 }}
          />
        </motion.button>
      ))}
    </div>
  );
};