import React from 'react';
import { Linkedin, Twitter, Dribbble, Globe } from 'lucide-react';

// A helper to map social names to icons. Add any others you need.
const socialIconMap = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Dribbble: Dribbble,
  Website: Globe,
  // Add more mappings here, e.g., Instagram: Instagram
};

const InfluencerCard = ({ image, name, role, company, socials }) => (
  <div className="p-4">
    {/* Main card with white background, shadow, and rounded corners */}
    <div className="bg-white rounded-3xl p-6 text-center shadow-xl flex flex-col items-center h-full">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mx-auto ring-4 ring-gray-100"
      />
      <div className="mt-4 flex-grow">
        <p className="text-2xl font-bold text-orange-500">{name}</p>
        <p className="text-gray-600 mt-1">{role}</p>
        <p className="text-gray-400 text-sm">{company}</p>
      </div>
      
      {/* Social Icons Pill */}
      <div className="mt-6 inline-flex bg-gray-800 rounded-full p-2 space-x-2">
        {socials.map((social) => {
          const Icon = socialIconMap[social.name] || Globe; // Default to Globe icon
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 ${social.color}`}
              aria-label={social.name}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

export default InfluencerCard;