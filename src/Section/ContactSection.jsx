import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, User, Building, Briefcase } from 'lucide-react';

// A small helper component for the floating label inputs.
const FloatingLabelInput = ({ id, name, type, value, onChange, label, required = false }) => (
  <div className="relative">
    <input
      id={id}
      name={name}
      type={type}
      value={value || ''}
      onChange={onChange}
      className="block w-full px-4 py-3 text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer font-medium"
      placeholder=" " 
      required={required}
      style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}
    />
    <label
      htmlFor={id}
      className="absolute text-sm font-medium text-gray-600 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
      style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}
    >
      {label}
    </label>
  </div>
);

// TypewriterText component with elegant styling
const TypewriterText = ({ text, delay = 0, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTyping = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(startTyping);
      clearInterval(cursorInterval);
    };
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref}>
      {displayedText}
      <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </span>
  );
};

const ContactSection = ({ formState = {}, handleInputChange, handleSubmit, formStatus }) => {
  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #9333EA 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontFamily: '"Poppins", "Inter", system-ui, sans-serif',
    fontWeight: '900',
    letterSpacing: '-0.025em'
  };

  const roles = [
    { value: 'Brand', label: 'A Brand', icon: <Building size={20} /> },
    { value: 'Influencer', label: 'An Influencer', icon: <User size={20} /> },
    { value: 'Other', label: 'Something Else', icon: <Briefcase size={20} /> }
  ];

  return (
    <section id="contact" className="hero-animated-gradient py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          
          {/* --- Left Column: Enhanced Typography --- */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-tight min-h-[6rem]" style={gradientTextStyle}>
              <TypewriterText text="Let's Build Together." delay={800} speed={80} />
            </h2>
            <p className="mt-6 text-xl text-gray-700 leading-relaxed font-medium tracking-wide" 
               style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}>
              Have a project, a question, or just want to say hello? Our team is ready to help you make an impact. Fill out the form or reach out to us directly.
            </p>
            <div className="mt-12 space-y-6">
              <a href="mailto:hello@soneetmedia.com" className="flex items-center gap-4 text-gray-800 hover:text-purple-600 transition-all duration-300 group">
                <Mail size={24} className="text-purple-500 group-hover:scale-110 transition-transform"/>
                <span className="font-bold text-lg tracking-wide" style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}>
                  hello@soneetmedia.com
                </span>
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-4 text-gray-800 hover:text-purple-600 transition-all duration-300 group">
                <Phone size={24} className="text-purple-500 group-hover:scale-110 transition-transform"/>
                <span className="font-bold text-lg tracking-wide" style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}>
                  +91 (000) 000-0000
                </span>
              </a>
            </div>
          </motion.div>

          {/* --- Right Column: Enhanced Form Typography --- */}
          <motion.div 
            className="lg:col-span-3 bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-4xl font-black text-gray-800 text-center mb-10 tracking-tight" 
                style={{ 
                  fontFamily: '"Poppins", "Inter", system-ui, sans-serif',
                  textShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
              Contact Us
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block text-gray-800 font-bold text-lg mb-6 tracking-wide" 
                       style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}>
                  First, tell us who you are:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {roles.map(role => (
                    <button
                      type="button"
                      key={role.value}
                      onClick={() => handleInputChange({ target: { name: 'role', value: role.value }})}
                      className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 font-bold text-base transition-all duration-200 tracking-wide ${
                        formState.role === role.value
                          ? 'bg-purple-600 text-white border-purple-600 shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-purple-400 hover:bg-gray-50'
                      }`}
                      style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}
                    >
                      {role.icon}
                      {role.label}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingLabelInput id="name" name="name" type="text" value={formState.name} onChange={handleInputChange} label="Full Name" required />
                <FloatingLabelInput id="email" name="email" type="email" value={formState.email} onChange={handleInputChange} label="Email Address" required />
              </div>
              
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formState.message || ''}
                  onChange={handleInputChange}
                  rows="5"
                  className="block w-full px-4 py-3 text-base text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer font-medium"
                  placeholder=" "
                  style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm font-medium text-gray-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-8 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-2"
                  style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}
                >
                  Tell us about your project...
                </label>
              </div>

              <div>
                <button 
                  type="submit" 
                  className="w-full font-black text-white py-5 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-2xl text-lg tracking-wide"
                  style={{ 
                    fontFamily: '"Poppins", "Inter", system-ui, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  Send Message
                </button>
              </div>
              {formStatus && (
                <p className="text-center text-gray-700 font-medium text-lg" 
                   style={{ fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif' }}>
                  {formStatus}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
