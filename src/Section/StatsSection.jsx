<<<<<<< HEAD
import React from 'react';
import StatCard from '../cards/StatCard';
import { Users, Megaphone, BarChart } from 'lucide-react';

const StatsSection = () => (
  // The 'bg-white' class has been REMOVED to make the section transparent
  <section className="py-16">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard icon={<Users size={40} className="text-indigo-500 mx-auto"/>} value="10k+" label="Influencers Network" />
        <StatCard icon={<Megaphone size={40} className="text-indigo-500 mx-auto"/>} value="500+" label="Campaigns Launched" />
        <StatCard icon={<BarChart size={40} className="text-indigo-500 mx-auto"/>} value="2B+" label="Total Reach" />
=======
import React from "react";
import CountUp from "react-countup";


const stats = [
  { end: 200, suffix: '+', label: 'Brands' },
  { end: 1000, suffix: '+', label: 'Campaigns' },
  { end: 300, suffix: '+', label: 'Creators' },
];

const StatsSection = () => (
    
    <section className="hero-animated-gradient py-20 md:pt-0 md:pb-10">
    <div className="w-full px-6 sm:px-12 flex flex-col items-center">
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
>>>>>>> main
      </div>
    </div>
  </section>
);

<<<<<<< HEAD
export default StatsSection;
=======
export default StatsSection;
>>>>>>> main
