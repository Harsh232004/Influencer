import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 text-white mt-20 rounded-t-[40px]">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800 rounded-t-[40px]"></div>
      
      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-white">SONEET</span>
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"> MEDIA</span>
              </h3>
              <p className="text-purple-300 text-sm font-medium mb-4">By the creators, for the creators</p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Empowering creativity through innovative digital solutions. We craft exceptional experiences that bring your vision to life.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                <MapPin size={18} className="mr-3 text-purple-400" />
                <span>New York, NY 10001</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                <Mail size={18} className="mr-3 text-purple-400" />
                <span>hello@soneetmedia.com</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                <Phone size={18} className="mr-3 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { label: 'Services', href: '#' },
                { label: 'Our Work', href: '#' },
                { label: 'About Us', href: '#' },
                { label: 'Contact', href: '#' }
              ].map(link => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-all duration-300 relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Connect With Us</h4>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA Button matching the header style */}
            <a 
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Soneetmedia. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
