import React from 'react';
<<<<<<< HEAD
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
=======
// Import a wider range of icons for a more complete look
import { Mail, Phone, ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' }, // Assuming you have an about section
    { label: 'Our Work', href: '#work' },   // Assuming you have a work section
    { label: 'Services', href: '#services' }, // Assuming you have a services section
  ],
  documentation: [
    { label: 'Help Centre', href: '#' },
    { label: 'Contact', href: '#contact' }, // Assuming you have a contact section
    { label: 'FAQ', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
  };

  return (
    // 1. Switched to a rich, dark gray background and white text
    <footer className="bg-gray-900 rounded-t-[40px] text-gray-300 mt-20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Newsletter Signup */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">Soneetmedia</h3>
            <p className="text-gray-400 mb-6">Stay in the loop with our latest news and updates.</p>
            
            {/* Newsletter Form with a dark theme */}
            <form onSubmit={handleNewsletterSubmit} className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full py-3 pl-4 pr-16 text-white bg-gray-800 border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-all"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Column 2 & 3: Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Documentation</h4>
            <ul className="space-y-3">
              {footerLinks.documentation.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Links with Icons */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Terms */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Soneetmedia. All Rights Reserved.</p>
          <a href="#" className="hover:text-white mt-4 sm:mt-0">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};
>>>>>>> main

export default Footer;
