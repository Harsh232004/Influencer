import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/soneetmedia_logo.png';

const Header = ({ navLinks, isMenuOpen, setIsMenuOpen }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-width">
          <div className="flex items-center justify-between py-6 px-8">
            
            {/* Logo Section - MAXIMIZED */}
            <motion.div
              onClick={scrollToTop}
              className="flex items-center gap-4 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src={logoImage} 
                alt="Soneet Media Logo" 
                className="w-14 h-14 object-contain"
              />
              <span className="font-professional font-black text-2xl gradient-text tracking-tight">
                SONEET MEDIA
              </span>
            </motion.div>

            {/* Desktop Navigation - MAXIMIZED */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href.substring(1)}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="relative px-6 py-3 text-gray-800 font-professional font-bold text-lg cursor-pointer transition-colors hover:text-indigo-600"
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.label}
                  {hoveredLink === index && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                      layoutId="navbar-underline"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button - MAXIMIZED */}
            <motion.button
              className="hidden lg:block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-professional font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Quote
            </motion.button>

            {/* Mobile Menu Button - MAXIMIZED */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - MAXIMIZED */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-96 bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <img src={logoImage} alt="Logo" className="w-12 h-12" />
                    <span className="font-professional font-black text-xl gradient-text">
                      SONEET MEDIA
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-3 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="space-y-6">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href.substring(1)}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="block py-4 px-6 text-gray-800 font-professional font-bold text-lg rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  <button
                    className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-professional font-bold text-lg rounded-xl shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get a Quote
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
