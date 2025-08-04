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
