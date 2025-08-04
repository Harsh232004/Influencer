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
      </div>
    </div>
  </section>
);

export default StatsSection;
