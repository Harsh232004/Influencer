import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import BrandsSection from './components/BrandsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Our Work' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setFormStatus('Thank you for your message! We will get back to you soon.');
      setFormState({ name: '', email: '', message: '' });
    } else {
      setFormStatus('Please fill out all fields.');
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-200 via-pink-100 to-yellow-100 transition-all duration-1000" />
      {/* Main Content with shadow */}
      <div className="relative z-10 bg-white/80 shadow-2xl rounded-2xl mx-auto max-w-7xl my-8 transition-all duration-700">
        <Header navLinks={navLinks} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <HeroSection />
          <StatsSection />
          <ServicesSection />
          <WorkSection />
          <BrandsSection />
          <AboutSection />
          <ContactSection 
            formState={formState}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            formStatus={formStatus}
          />
        </main>
        <Footer navLinks={navLinks} />
      </div>
    </div>
  );
}

export default App;