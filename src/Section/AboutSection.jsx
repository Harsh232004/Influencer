<<<<<<< HEAD
import React from 'react';

const AboutSection = () => (
  // The 'bg-white' class has been REMOVED to make this section transparent
  <section id="about" className="py-20">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://placehold.co/600x450/e0e7ff/3730a3?text=Our+Team" alt="Our Team" className="rounded-lg shadow-xl" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We are your strategic partners in growth.</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded in 2025, Soneetmedia was born from a passion for authentic storytelling. We believe that the most powerful marketing doesn't feel like marketing at all. It's a genuine connection between a brand, a creator, and their audience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team of strategists, creatives, and data analysts are dedicated to building bridges and fostering relationships that create lasting value. We're not just a service provider; we're an extension of your team.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
=======
import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

// --- DATA ---
const TEAM_MEMBERS = [
  {
    id: 3,
    name: "RAHUL GUPTA",
    role: "MARKETING STRATEGIST",
    bio: "Rahul lives and breathes data, turning insights into measurable growth.",
    image: "/images/rahul.jpg"
  },
  {
    id: 2,
    name: "PRIYA SHARMA",
    role: "CREATIVE DIRECTOR",
    bio: "Priya is the artistic heart of our agency, creating unforgettable brand campaigns.",
    image: "/images/priya.jpg"
  },
  {
    id: 1,
    name: "SONEET KUMAR",
    role: "CEO & FOUNDER",
    bio: "Soneet leads with a vision to merge authentic storytelling with data-driven results.",
    image: "/images/soneet.jpg" 
  }
].reverse();

// --- MAIN COMPONENT ---
const AboutSectionInteractiveDeck = () => {
  const [members, setMembers] = useState(TEAM_MEMBERS);

  const gradientTextStyle = {
    background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #9333EA 100%)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontFamily: "'Playfair Display', 'Georgia', serif",
  };

  const handleSwipe = (member) => {
    setMembers(prev => {
        const newArr = [...prev];
        const swipedMember = newArr.pop();
        if (swipedMember) {
            newArr.unshift(swipedMember);
        }
        return newArr;
    });
  };
  
  return (
    <section 
      id="about" 
      className="py-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ENHANCED: Header with elegant typography */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
            style={{
              ...gradientTextStyle,
              filter: 'drop-shadow(0 4px 8px rgba(139, 92, 246, 0.2))',
            }}
          >
            MEET THE VIBE
          </h2>
          
          <p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ 
              fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          >
            We're more than a team; we're trendsetters. Swipe to meet the experts behind the magic.
          </p>
          
          {/* ENHANCED: Elegant underline with glow effect */}
          <motion.div 
            className="w-32 h-1 mx-auto mt-6 rounded-full"
            style={{
              background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #9333ea)',
              boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
            }}
            animate={{
              boxShadow: [
                '0 4px 20px rgba(139, 92, 246, 0.3)',
                '0 6px 30px rgba(139, 92, 246, 0.5)',
                '0 4px 20px rgba(139, 92, 246, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        
        {/* --- Card Deck Container --- */}
        <div className="relative flex items-center justify-center h-[550px]">
          {members.map((member, index) => {
              const isTopCard = index === members.length - 1;
              return (
                <TeamCard 
                    key={member.id} 
                    member={member}
                    isTopCard={isTopCard}
                    onSwipe={() => handleSwipe(member)}
                    style={{
                      zIndex: index,
                      transform: `scale(${1 - (members.length - 1 - index) * 0.05}) translateY(${(members.length - 1 - index) * -15}px)`
                    }}
                />
              )
          })}
        </div>
        
        {/* ENHANCED: Interaction Hint with elegant styling */}
        <motion.div 
          className="flex items-center justify-center gap-6 mt-8 text-gray-500 font-bold text-lg"
          style={{ 
            fontFamily: "'Poppins', 'Inter', sans-serif",
            letterSpacing: '0.1em',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{ x: [-3, 3, -3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronsLeft size={24} className="text-purple-500" />
          </motion.div>
          <span className="tracking-wider">DRAG OR SWIPE</span>
          <motion.div
            animate={{ x: [3, -3, 3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronsRight size={24} className="text-purple-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- ENHANCED Reusable Card Component ---
const TeamCard = ({ member, isTopCard, onSwipe, style }) => {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-300, 300], [-20, 20]);
    const opacityX = useTransform(x, [-100, 0, 100], [1, 0, 1]);
    const colorX = useTransform(x, [-100, 0, 100], ['#ef4444', '#ffffff', '#22c55e']);

    return (
        <motion.div
            style={{ ...style, x, rotate }}
            className="absolute w-[320px] h-[500px] rounded-3xl cursor-grab"
            whileTap={{ cursor: 'grabbing' }}
            whileHover={{ 
              scale: isTopCard ? 1.02 : 1,
              filter: isTopCard ? 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))' : 'none',
            }}
            drag={isTopCard ? "x" : false}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={(event, info) => {
                if (Math.abs(info.offset.x) > 150) {
                    onSwipe();
                }
            }}
            animate={{ x: isTopCard ? 0 : 'auto' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            {/* ENHANCED: Card Content with elegant shadows */}
            <div 
              className="w-full h-full rounded-3xl overflow-hidden relative bg-white"
              style={{
                boxShadow: `
                  0 20px 25px -5px rgba(0, 0, 0, 0.15),
                  0 10px 10px -5px rgba(0, 0, 0, 0.08),
                  0 4px 6px -2px rgba(139, 92, 246, 0.1)
                `,
              }}
            >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* ENHANCED: Text Content with shadow effects */}
                <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 
                      className="text-3xl font-black mb-2 tracking-tight"
                      style={{ 
                        fontFamily: "'Poppins', 'Inter', sans-serif",
                        textShadow: '0 4px 8px rgba(0,0,0,0.6), 0 2px 4px rgba(139, 92, 246, 0.2)',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {member.name}
                    </h3>
                    <p 
                      className="text-lg font-bold mb-3 text-purple-100"
                      style={{ 
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '0.05em',
                        textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                      }}
                    >
                      {member.role}
                    </p>
                    <p 
                      className="text-gray-100 font-medium"
                      style={{ 
                        fontFamily: "'Inter', sans-serif",
                        textShadow: '0 2px 4px rgba(0,0,0,0.6)',
                        lineHeight: '1.5',
                      }}
                    >
                      {member.bio}
                    </p>
                </div>

                {/* ENHANCED: Swipe Indicator with glow effect */}
                {isTopCard && (
                    <motion.div 
                      style={{ 
                        opacity: opacityX, 
                        color: colorX,
                        filter: 'drop-shadow(0 0 10px currentColor) drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
                      }} 
                      className="absolute top-8 left-1/2 -translate-x-1/2 text-3xl font-black pointer-events-none tracking-wider"
                    >
                         {x.get() > 0 ? "LIKE" : x.get() < 0 ? "NOPE" : ""}
                    </motion.div>
                )}

                {/* ENHANCED: Subtle rim lighting effect */}
                {isTopCard && (
                  <div 
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 1px 1px rgba(139, 92, 246, 0.2)',
                    }}
                  />
                )}
            </div>
        </motion.div>
    );
};

export default AboutSectionInteractiveDeck;
>>>>>>> main
