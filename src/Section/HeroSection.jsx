import React from "react";
// 1. Import the Link component from react-scroll
import { Link } from "react-scroll";
import CountUp from "react-countup";

const stats = [
  { end: 200, suffix: '+', label: 'Brands' },
  { end: 1000, suffix: '+', label: 'Campaigns' },
  { end: 300, suffix: '+', label: 'Creators' },
];

const HeroSection = () => (
  <section className="hero-animated-gradient py-20 md:py-32 md:pb-40">
    <div className="w-full px-6 sm:px-12 flex flex-col items-center">
      
      {/* Main Hero Content (Top Part) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-20 md:mb-28">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#183153] leading-tight mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            We Empower Brands<br />&amp; Influencers To Achieve More
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl mx-auto md:mx-0">
            Our comprehensive ERP portal offers seamless management of campaigns, influencers, and financials, ensuring you stay ahead in the digital marketing landscape.
          </p>

          {/* 2. Replace the <button> elements with the smooth-scrolling <Link> component */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="cursor-pointer text-center border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded-full transition-all duration-200 text-lg hover:bg-orange-50 hover:shadow-md"
            >
              I AM BRAND
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="cursor-pointer text-center border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded-full transition-all duration-200 text-lg hover:bg-orange-50 hover:shadow-md"
            >
              I AM INFLUENCER
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="cursor-pointer text-center border-2 border-orange-500 text-orange-500 font-bold py-3 px-8 rounded-full transition-all duration-200 text-lg hover:bg-orange-50 hover:shadow-md"
            >
              I AM CUSTOMER
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0">
          <div className="absolute -z-10 right-0 top-10 w-96 h-96 bg-gray-200 rounded-full opacity-10 hidden md:block"></div>
          <img
            src="https://img.freepik.com/free-photo/young-man-working-desk_23-2147668912.jpg?w=800"
            alt="Person working at desk"
            className="rounded-xl shadow-xl w-full max-w-md object-cover"
          />
          <div className="absolute -z-10 -left-10 -bottom-10 w-56 h-56 bg-gray-200 rounded-full opacity-10 hidden md:block"></div>
        </div>
      </div>

      {/* Stats Section (Bottom Part) */}
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="text-center bg-[#f9f6ed] text-[#826c3c] rounded-3xl py-8 px-12 transition-transform hover:scale-105 shadow-lg"
            >
              <p className="text-5xl font-bold">
                <CountUp end={stat.end} duration={2.5} enableScrollSpy />
                {stat.suffix}
              </p>
              <p className="text-lg mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
