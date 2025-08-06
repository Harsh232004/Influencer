import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './Section/HeroSection';
import StatsSection from './Section/StatsSection';
import InfluencerSection from './Section/InfluencersSection';
import ServicesSection from './Section/ServicesSection';
import WorkSection from './Section/WorkSection';
import BrandsSection from './Section/BrandsSection';
import AboutSection from './Section/AboutSection';
import ContactSection from './Section/ContactSection';
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
    <div 
    className="relative min-h-screen overflow-x-hidden" 
    style={{ background: 'linear-gradient(135deg, #E6E6FA 0%, #FFDFD3 50%, #FFFACD 100%)' }} >
      {/* Header - Now sticky */}
      <Header
        navLinks={navLinks}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      {/* Add top padding to content so it doesn't hide behind fixed header */}
      <div className="pt-20">
        <HeroSection />
        <StatsSection />
        <BrandsSection />
        <ServicesSection />
        <InfluencerSection />
        <WorkSection />
        <AboutSection />
        <ContactSection
          formState={formState}
          formStatus={formStatus}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
