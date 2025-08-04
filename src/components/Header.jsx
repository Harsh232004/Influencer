import React, { useState } from 'react';
// We will keep the advanced animations you liked
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll'; 
import { Menu, X } from 'lucide-react';

const Header = ({ navLinks, isMenuOpen, setIsMenuOpen }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <>
      {/* 1. This is the new "frosted glass" background for the header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav 
          className="container mx-auto px-6 py-3 flex justify-between items-center"
          onMouseLeave={() => setHoveredLink(null)} 
        >
          {/* 2. Logo color changed to match your branding */}
          <a href="#" className="text-2xl font-bold text-indigo-700">SONEET MEDIA</a>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href.substring(1)}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="relative px-4 py-2 rounded-full text-gray-500 hover:text-indigo-700 transition-colors duration-300 font-semibold cursor-pointer"
                onMouseEnter={() => setHoveredLink(link.label)}
              >
                {/* The animated sliding pill, now with a suitable color */}
                {hoveredLink === link.label && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-indigo-100"
                    style={{ zIndex: -1 }}
                    layoutId="hover-pill"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          {/* 3. "Get a Quote" button styled to match your screenshot */}
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            offset={-70}
            className="hidden md:inline-block bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold py-2.5 px-7 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 transform cursor-pointer"
          >
            Get a Quote
          </Link>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Toggle menu" className="text-gray-700">
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      {/* The mobile menu now also has a frosted glass background for consistency */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur-xl md:hidden"
          >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <span className="text-2xl font-bold text-indigo-700">SONEET</span>
              <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X size={28} className="text-gray-700" />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href.substring(1)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-800 text-3xl font-semibold hover:text-indigo-600"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
