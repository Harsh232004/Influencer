import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ navLinks, isMenuOpen, setIsMenuOpen }) => (
  <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-indigo-600">SONEET MEDIA</a>
      <nav className="hidden md:flex space-x-8">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">{link.label}</a>
        ))}
      </nav>
      <a href="#contact" className="hidden md:inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
        Get a Quote
      </a>
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </div>
    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden bg-white py-4">
        <nav className="flex flex-col items-center space-y-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>{link.label}</a>
          ))}
          <a href="#contact" className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
            Get a Quote
          </a>
        </nav>
      </div>
    )}
  </header>
);

export default Header;
