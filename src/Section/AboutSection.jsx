import React from 'react';
// 1. Import the 'motion' component from Framer Motion
import { motion } from 'framer-motion';

const AboutSection = () => (
  <section id="about" className="py-20 overflow-hidden"> {/* Added overflow-hidden */}
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* 2. Animate the image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} // Starts invisible and to the left
          whileInView={{ opacity: 1, x: 0 }} // Slides in from the left
          viewport={{ once: true }} // Animation runs only once
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src="https://placehold.co/600x450/e0e7ff/3730a3?text=Our+Team" alt="Our Team" className="rounded-lg shadow-xl w-full" />
        </motion.div>
        
        {/* 3. Animate the text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Starts invisible and to the right
          whileInView={{ opacity: 1, x: 0 }} // Slides in from the right
          viewport={{ once: true }} // Animation runs only once
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // Slightly delayed
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We are your strategic partners in growth.</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded in 2025, Soneetmedia was born from a passion for authentic storytelling. We believe that the most powerful marketing doesn't feel like marketing at all. It's a genuine connection between a brand, a creator, and their audience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team of strategists, creatives, and data analysts are dedicated to building bridges and fostering relationships that create lasting value. We're not just a service provider; we're an extension of your team.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
