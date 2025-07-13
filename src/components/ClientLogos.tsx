import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  'TechFlow', 'InnovateCorp', 'DigitalEdge', 'NextGen', 'CreativeStudio',
  'MarketPro', 'BrandForce', 'GrowthLab', 'VisualSync', 'DataDriven',
  'SocialBoost', 'ContentKing', 'StrategyHub', 'MediaMasters', 'TrendSetters'
];

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#050C38] via-[#6700A3]/20 to-[#050C38] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Trusted by Leading Brands
          </h3>
          <p className="text-gray-300">
            Join hundreds of companies that trust us with their digital presence
          </p>
        </motion.div>

        {/* Infinite Scroll Animation */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -100 * clientLogos.length] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-8 min-w-max"
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 w-48 h-24 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/20 hover:border-[#FF5A57]/50 transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-white font-semibold text-lg group-hover:text-[#FCCBF0] transition-colors">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050C38] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050C38] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};