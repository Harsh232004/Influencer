import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Users, Megaphone, BarChart } from 'lucide-react';

// 1. Updated the icon color to be white, so it's visible on the new orange background.
const services = [
  {
    icon: <Users size={40} className="text-white"/>,
    title: "Influencer Discovery",
    description: "We find the perfect influencers for your brand using our data-driven platform, ensuring authentic alignment and audience engagement."
  },
  {
    icon: <Megaphone size={40} className="text-white"/>,
    title: "Campaign Management",
    description: "From strategy and outreach to content approval and payment, we handle every aspect of your campaign for a seamless experience."
  },
  {
    icon: <BarChart size={40} className="text-white"/>,
    title: "Analytics & Reporting",
    description: "Track your campaign's performance with in-depth analytics. We provide detailed reports on reach, engagement, and ROI."
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Core Services</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Full-service solutions to elevate your influencer strategy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left side: The list of clickable service titles. */}
          <div className="md:col-span-1 flex flex-col space-y-4">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveService(index)}
                className={`p-4 rounded-lg text-left font-semibold text-lg transition-all duration-300 ${
                  activeService === index
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Right side: The animated display area */}
          {/* 2. Changed the background to orange and adjusted padding */}
          <div className="md:col-span-2 bg-orange-500 p-8 rounded-lg min-h-[250px] flex items-center shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 pt-1">
                  {services[activeService].icon}
                </div>
                <div>
                  {/* 3. Ensured text colors are white for high contrast */}
                  <h3 className="text-2xl font-bold mb-2 text-white">{services[activeService].title}</h3>
                  <p className="text-orange-50 leading-relaxed">{services[activeService].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
