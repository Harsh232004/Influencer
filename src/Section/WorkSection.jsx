import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const workItems = [
  {
    image: 'https://placehold.co/600x400/a3bffa/ffffff?text=Fashion+Campaign',
    category: 'Fashion & Apparel',
    title: 'Urban Style Launch',
    description: 'Partnered with 20 fashion influencers to launch a new clothing line, generating over 5 million impressions and significant brand buzz.',
    link: '#',
  },
  {
    image: 'https://placehold.co/600x400/d8a3ff/ffffff?text=Gaming+Partnership',
    category: 'Gaming & Tech',
    title: 'Next-Gen Console Promo',
    description: 'Collaborated with top Twitch streamers for a console launch, driving a 30% increase in pre-orders and massive online engagement.',
    link: '#',
  },
  {
    image: 'https://placehold.co/600x400/a3ffb8/ffffff?text=Food+Brand+Collab',
    category: 'Food & Beverage',
    title: 'Healthy Snack Challenge',
    description: 'A viral TikTok challenge with food bloggers that resulted in a 200% uplift in online sales and widespread brand recognition.',
    link: '#',
  },
];

const WorkSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="work" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Work</h2>
          <p className="max-w-xl mx-auto text-lg text-gray-600">Check out our latest collaborations and successful projects.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Column: List of elegant, attractive buttons */}
          <div className="md:col-span-1 flex flex-col space-y-4">
            {workItems.map((item, index) => (
              <motion.button
                key={item.title}
                onClick={() => setActiveIndex(index)}
                // This 'whileTap' prop gives a satisfying press effect
                whileTap={{ scale: 0.95 }}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 
                  ${activeIndex === index
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-orange-500/40 shadow-lg text-white' // Elegant active style
                    : 'bg-white shadow-md hover:shadow-xl hover:-translate-y-1 text-gray-800' // Elegant inactive style
                  }`}
              >
                <p className="text-sm font-semibold uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <p className="text-xl font-bold">
                  {item.title}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Right Column: Animated content display */}
          <div className="md:col-span-2 rounded-xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="p-8"
              >
                <img src={workItems[activeIndex].image} alt={workItems[activeIndex].title} className="rounded-lg mb-6 w-full h-64 object-cover" />
                <p className="text-gray-700 text-sm font-semibold mb-2 uppercase tracking-wide">{workItems[activeIndex].category}</p>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{workItems[activeIndex].title}</h3>
                <p className="text-gray-600 leading-relaxed">{workItems[activeIndex].description}</p>
                <a href={workItems[activeIndex].link} className="inline-flex items-center mt-5 text-orange-500 font-semibold hover:underline group">
                  View Case Study
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
