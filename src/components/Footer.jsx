import React from 'react';
import { Mail, Phone, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = ({ navLinks }) => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Soneetmedia</h3>
          <p className="text-gray-400">Connecting brands with the voices of tomorrow.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map(link => (
              <li key={link.label}><a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
          </div>
          <div className="text-gray-400 space-y-2">
            <p className="flex items-center"><Mail size={18} className="mr-2"/> contact@Soneetmedia.com</p>
            <p className="flex items-center"><Phone size={18} className="mr-2"/> (555) 123-4567</p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Soneetmedia. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
