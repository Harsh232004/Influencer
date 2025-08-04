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

export default HeroSection;
