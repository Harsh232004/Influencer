<<<<<<< HEAD
import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { Users, Megaphone, BarChart } from 'lucide-react';

const ServicesSection = () => (
  // The 'bg-gray-50' class has been REMOVED to make the section transparent
  <section id="services" className="py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Full-service solutions to elevate your influencer marketing strategy.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <ServiceCard 
          icon={<Users size={32} className="text-indigo-600"/>} 
          title="Influencer Discovery" 
          description="We find the perfect influencers for your brand using our data-driven platform, ensuring authentic alignment and audience engagement." 
        />
        <ServiceCard 
          icon={<Megaphone size={32} className="text-indigo-600"/>} 
          title="Campaign Management" 
          description="From strategy and outreach to content approval and payment, we handle every aspect of your campaign for a seamless experience." 
        />
        <ServiceCard 
          icon={<BarChart size={32} className="text-indigo-600"/>} 
          title="Analytics & Reporting" 
          description="Track your campaign's performance with in-depth analytics. We provide detailed reports on reach, engagement, and ROI." 
        />
      </div>
    </div>
  </section>
);

export default ServicesSection;
=======
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

const SERVICES = [
  {
    title: "Influencer Discovery",
    blurb: "Powerful AI matching to find creators perfectly aligned with your brand voice.",
    pills: ["AI Matching", "10k+ Creators", "99% Fit Score"],
    grad: "from-purple-600 to-blue-600",
  },
  {
    title: "Campaign Management", 
    blurb: "End-to-end planning, outreach, payment and compliance—so you stay hands-off.",
    pills: ["Strategy", "Outreach", "Payments"],
    grad: "from-pink-600 to-purple-600",
  },
  {
    title: "Performance Analytics",
    blurb: "Real-time dashboards and predictive insights that turn data into decisions.",
    pills: ["Live KPI", "ROI Forecast", "24/7 Monitoring"],
    grad: "from-blue-600 to-cyan-600",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  
  const cardRef = useRef(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotX = useTransform(mvY, [-300, 300], [10, -10]);
  const rotY = useTransform(mvX, [-300, 300], [-10, 10]);
  const springCfg = { stiffness: 700, damping: 25 };
  const rX = useSpring(rotX, springCfg);
  const rY = useSpring(rotY, springCfg);

  useEffect(() => {
    if (hover) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SERVICES.length), 4000);
    return () => clearInterval(id);
  }, [hover]);

  const onMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mvX.set(e.clientX - (left + width / 2));
    mvY.set(e.clientY - (top + height / 2));
  };

  const activeSvc = SERVICES[active];

  return (
    <section id="services" className="section-spacing">
      <div className="container-width">
        
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
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
            style={{ 
              fontFamily: "'Playfair Display', 'Georgia', serif",
              textShadow: '0 4px 8px rgba(0,0,0,0.1)',
              letterSpacing: '-0.02em'
            }}
          >
            Our{" "}
            <span 
              className="gradient-text"
              style={{ 
                background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #9333EA 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              Services
            </span>
          </h2>
          
          {/* ENHANCED: Subtitle with modern sans-serif font and larger size */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto"
            style={{ 
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
              lineHeight: '1.6',
              letterSpacing: '0.01em'
            }}
          >
            Full-service solutions to elevate your influencer strategy and drive measurable growth.
          </p>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="block lg:hidden mb-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SERVICES.map((service, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`text-center p-4 rounded-2xl transition-all duration-300 font-professional ${
                  i === active
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-800 shadow-md hover:shadow-lg hover:-translate-y-1'
                }`}
                whileHover={i !== active ? { scale: 1.02, y: -2 } : {}}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className={`text-sm font-bold leading-tight ${
                  i === active ? 'text-white' : 'text-gray-900'
                }`}>
                  {service.title}
                </h3>
                <span className={`text-xs font-medium block mt-1 ${
                  i === active ? 'text-white/70' : 'text-purple-500'
                }`}>
                  {service.pills[0]}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Main Card - Centered */}
        <div className="flex justify-center">
          <motion.div
            ref={cardRef}
            onMouseMove={onMove}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {
              mvX.set(0);
              mvY.set(0);
              setHover(false);
            }}
            style={{ perspective: 1000 }}
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSvc.title}
                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  rotateX: rX,
                  rotateY: rY,
                  transformStyle: "preserve-3d",
                }}
                className="relative"
              >
                {/* Floating Tags */}
                <div className="absolute -top-4 -right-4 z-10">
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 border border-gray-200 shadow-lg"
                    animate={{ y: [-3, 3, -3], rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-gray-800 text-sm font-semibold font-professional">
                      {activeSvc.pills[0]}
                    </span>
                  </motion.div>
                </div>

                <div className="absolute -bottom-4 -left-4 z-10">
                  <motion.div
                    className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 border border-gray-200 shadow-lg"
                    animate={{ y: [3, -3, 3], rotate: [0, -2, 0, 2, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <span className="text-gray-800 text-sm font-semibold font-professional">
                      {activeSvc.pills[1]}
                    </span>
                  </motion.div>
                </div>

                {/* Main Card */}
                <motion.div
                  className={`relative rounded-3xl border border-white/20 p-10 lg:p-12 shadow-2xl backdrop-blur-sm bg-gradient-to-br ${activeSvc.grad}`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.h3 
                    className="mb-6 text-center text-3xl lg:text-4xl font-black text-white font-professional"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {activeSvc.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="w-20 h-0.5 bg-white/50 mx-auto mb-8 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: 80 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  />
                  
                  <motion.p 
                    className="mx-auto mb-8 text-center text-white/90 leading-relaxed text-lg font-professional"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {activeSvc.blurb}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap justify-center gap-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {activeSvc.pills.map((p, idx) => (
                      <motion.span
                        key={p}
                        className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm font-professional"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                      >
                        {p}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-white/10"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {SERVICES.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === active 
                  ? 'w-12 bg-gradient-to-r from-purple-600 to-blue-600' 
                  : 'w-3 bg-gray-300'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> main
