import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const workItems = [
  {
    id: 1,
    image: 'https://placehold.co/600x400/a3bffa/ffffff?text=Fashion+Campaign',
    category: 'Fashion & Apparel',
    title: 'Urban Style Launch',
    description: 'Partnered with 20 fashion influencers to launch a new clothing line, generating over 5 million impressions and significant brand buzz.',
    link: '#',
    stats: "5M+ Impressions"
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400/d8a3ff/ffffff?text=Gaming+Partnership',
    category: 'Gaming & Tech',
    title: 'Next-Gen Console Promo',
    description: 'Collaborated with top Twitch streamers for a console launch, driving a 30% increase in pre-orders and massive online engagement.',
    link: '#',
    stats: "30% Pre-orders"
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400/a3ffb8/ffffff?text=Food+Brand+Collab',
    category: 'Food & Beverage',
    title: 'Healthy Snack Challenge',
    description: 'A viral TikTok challenge with food bloggers that resulted in a 200% uplift in online sales and widespread brand recognition.',
    link: '#',
    stats: "200% Sales Boost"
  }
];

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = workItems[activeIndex];

  return (
    <section id="work" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* ENHANCED Header with Premium Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* ENHANCED: Main heading with elegant serif font and larger size */}
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight"
            style={{ 
              fontFamily: "'Playfair Display', 'Georgia', serif",
              textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              letterSpacing: '-0.02em'
            }}
          >
            Our{" "}
            <span 
              style={{ 
                background: 'linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Work
            </span>
          </h2>
          
          {/* ENHANCED: Improved description section */}
          <div className="flex items-start justify-center gap-6 max-w-3xl mx-auto">
            <motion.div
              className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-2"
              whileHover={{ scale: 1.1, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-left">
              <p 
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
                style={{ 
                  fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                  lineHeight: '1.6',
                  letterSpacing: '0.01em'
                }}
              >
                Check out our latest collaborations and successful projects that have driven 
                remarkable results for our clients.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Mobile First Design */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* LEFT SIDE - Project Navigation with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-80 lg:flex-shrink-0"
          >
            <div className="space-y-3">
              {workItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-5 lg:p-6 rounded-xl transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/25 text-white'
                      : 'bg-white shadow-md hover:shadow-lg hover:-translate-y-1 text-gray-800'
                  }`}
                  whileHover={activeIndex !== index ? { scale: 1.02, y: -2 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className={`text-sm font-bold uppercase tracking-wider ${
                        activeIndex === index ? 'text-white/80' : 'text-gray-500'
                      }`}
                      style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}
                    >
                      {item.category}
                    </span>
                    <span 
                      className={`text-sm font-bold ${
                        activeIndex === index ? 'text-white/70' : 'text-orange-500'
                      }`}
                      style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                    >
                      {item.stats}
                    </span>
                  </div>
                  
                  <h3 
                    className={`text-xl lg:text-2xl font-black leading-tight ${
                      activeIndex === index ? 'text-white' : 'text-gray-900'
                    }`}
                    style={{ 
                      fontFamily: "'Poppins', 'Inter', sans-serif",
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {item.title}
                  </h3>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE - Project Details Card with Enhanced Typography */}
          <div className="w-full lg:flex-grow">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-48 lg:h-64 overflow-hidden">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    {/* ENHANCED: Floating Stats Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg"
                      animate={{ 
                        y: [-2, 2, -2],
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span 
                        className="text-gray-800 text-base font-bold"
                        style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                      >
                        {activeProject.stats}
                      </span>
                    </motion.div>
                  </div>

                  {/* ENHANCED: Project Info with Premium Typography */}
                  <div className="p-6 lg:p-8">
                    <motion.p 
                      className="text-gray-500 font-bold uppercase tracking-wider text-base mb-3"
                      style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif" }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {activeProject.category}
                    </motion.p>
                    
                    <motion.h3 
                      className="text-3xl lg:text-4xl font-black text-gray-900 mb-6"
                      style={{ 
                        fontFamily: "'Poppins', 'Inter', sans-serif",
                        letterSpacing: '-0.01em'
                      }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {activeProject.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg text-gray-700 leading-relaxed mb-8 font-medium"
                      style={{ 
                        fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                        lineHeight: '1.6'
                      }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {activeProject.description}
                    </motion.p>

                    <motion.a
                      href={activeProject.link}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{ 
                        fontFamily: "'Poppins', 'Inter', sans-serif",
                        letterSpacing: '0.01em'
                      }}
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      View Case Study
                      <ArrowRight className="w-6 h-6" />
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {workItems.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex 
                      ? 'w-8 bg-gradient-to-r from-orange-500 to-pink-500' 
                      : 'w-2 bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
