import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

// 1. New Data Structure: Define the links for each column to match the new design.
const footerLinks = {
  company: [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Our Work', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  documentation: [
    { label: 'Help Centre', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
  ],
};

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    alert('Thank you for subscribing!');
  };

  return (
    // 2. Main Footer Styling: White background with large rounded top corners
    <footer className="bg-white rounded-t-[40px] text-gray-800 mt-20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Column 1: Newsletter Signup (spans two columns on large screens) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-2">Soneetmedia</h3>
            <p className="text-gray-500 mb-6">Stay in the loop and sign up for the Soneetmedia newsletter:</p>
            
            {/* 3. Newsletter Form: Input with an integrated button */}
            <form onSubmit={handleNewsletterSubmit} className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full py-3 pl-4 pr-16 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#183153]"
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#183153] text-white p-2 rounded-full hover:bg-opacity-90 transition-all"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-black transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Documentation Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Documentation</h4>
            <ul className="space-y-3">
              {footerLinks.documentation.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-black transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Social</h4>
            <ul className="space-y-3">
              {footerLinks.social.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-600 hover:text-black transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4. Bottom Bar: Copyright and Terms */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Soneetmedia. All Rights Reserved.</p>
          <a href="#" className="hover:text-black mt-4 sm:mt-0">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;