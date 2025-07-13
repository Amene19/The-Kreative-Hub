import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ServicePacks } from './components/ServicePacks';
import { WhyUs } from './components/WhyUs';
import { ClientLogos } from './components/ClientLogos';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Set initial language direction
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'ar') {
      document.documentElement.dir = 'rtl';
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050C38] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ServicePacks />
      <WhyUs />
      <ClientLogos />
      <Testimonials />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;