<<<<<<< HEAD
import React from "react";

const HeroSection = () => (
  // We've replaced the inline 'style' with the new animation class from your CSS
  <section className="py-20 md:py-32 w-full hero-animated-gradient">
  
    <div className="w-full px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#183153] leading-tight mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
          We Empower Brands<br />&amp; Influencers To Achieve More
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl">
          Our comprehensive ERP portal offers seamless management of campaigns, influencers, and financials, ensuring you stay ahead in the digital marketing landscape.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-200 text-lg shadow-md hover:shadow-lg">
            I AM BRAND
          </button>
          <button className="border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded-full transition-all duration-200 text-lg hover:bg-orange-50 hover:shadow-md">
            I AM INFLUENCER
          </button>
        </div>
        
        {/* Stats Section */}
        <div className="flex gap-10 mt-8">
          <div>
            <p className="text-3xl font-bold text-[#183153]">5+</p>
            <p className="text-gray-500">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#183153]">100+</p>
            <p className="text-gray-500">Projects Completed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#183153]">50+</p>
            <p className="text-gray-500">Happy Clients</p>
          </div>
        </div>
      </div>
      
      {/* Right Side: Image */}
      <div className="md:w-1/2 flex justify-center relative">
        {/* Decorative shapes */}
        <div className="absolute -z-10 right-0 top-10 w-96 h-96 bg-gray-200 rounded-full opacity-10 hidden md:block"></div>
        <img
          src="https://img.freepik.com/free-photo/young-man-working-desk_23-2147668912.jpg?w=800"
          alt="Person working at desk"
          className="rounded-xl shadow-xl w-full max-w-md object-cover"
        />
        <div className="absolute -z-10 -left-10 -bottom-10 w-56 h-56 bg-gray-200 rounded-full opacity-10 hidden md:block"></div>
      </div>
      
    </div>
  </section>
);
=======
import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-scroll';

// TypewriterText component with enhanced styling
const TypewriterText = ({ text, delay = 0, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTyping = setTimeout(() => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearTimeout(startTyping);
      clearInterval(cursorInterval);
    };
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref}>
      {displayedText}
      <span className={`inline-block ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
        |
      </span>
    </span>
  );
};

const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageX = useTransform(x, [-100, 100], [-15, 15]);
  const imageY = useTransform(y, [-100, 100], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.width / 2);
    y.set(e.clientY - rect.height / 2);
  };

  const buttonData = ["I AM BRAND", "I AM INFLUENCER", "I AM CUSTOMER"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section 
      id="home" 
      className="hero-animated-gradient py-24 md:py-32"
      onMouseMove={handleMouseMove}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="text-center lg:text-left flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ENHANCED: Heading with premium typography */}
             <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-indigo-600 leading-tight tracking-tighter mb-6" 
              style={{ fontFamily: "'Poppins', sans-serif" }}
              variants={itemVariants}
            >
              We Empower Brands & Influencers To Achieve More
            </motion.h1>
            
            {/* ENHANCED: Paragraph with elegant typography and typewriter effect */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed min-h-[6rem] font-medium"
              style={{ 
                fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                lineHeight: '1.6',
                letterSpacing: '0.01em'
              }}
              variants={itemVariants}
            >
              <TypewriterText 
                text="Our comprehensive ERP portal offers seamless management of campaigns, influencers, and financials, ensuring you stay ahead in the digital marketing landscape."
                delay={1000}
                speed={25}
              />
            </motion.p>

            {/* ENHANCED: Buttons with better typography */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {buttonData.map((buttonText, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer text-center border-2 border-orange-500 text-orange-500 font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg md:text-xl hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30 whitespace-nowrap block"
                    style={{ 
                      fontFamily: "'Poppins', 'Inter', sans-serif",
                      letterSpacing: '0.5px',
                      fontWeight: '700'
                    }}
                  >
                    {buttonText}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <div className="flex justify-center items-center">
            <motion.div
              style={{ x: imageX, y: imageY }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, mass: 0.1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop"
                alt="Team collaborating at a table"
                className="rounded-2xl shadow-2xl w-full max-w-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
>>>>>>> main

export default HeroSection;
