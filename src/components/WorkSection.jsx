import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const WorkSection = () => (
  <section id="work" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Work</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Check out some of our most successful collaborations.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CaseStudyCard 
          image="https://placehold.co/600x400/a3bffa/ffffff?text=Fashion+Campaign"
          category="Fashion & Apparel"
          title="Urban Style Launch"
          description="Partnered with 20 fashion influencers to launch a new clothing line, generating over 5 million impressions."
          link="#"
        />
        <CaseStudyCard 
          image="https://placehold.co/600x400/d8a3ff/ffffff?text=Gaming+Partnership"
          category="Gaming & Tech"
          title="Next-Gen Console Promo"
          description="Collaborated with top Twitch streamers for a console launch, driving a 30% increase in pre-orders."
          link="#"
        />
        <CaseStudyCard 
          image="https://placehold.co/600x400/a3ffb8/ffffff?text=Food+Brand+Collab"
          category="Food & Beverage"
          title="Healthy Snack Challenge"
          description="A viral TikTok challenge with food bloggers that resulted in a 200% uplift in online sales."
          link="#"
        />
      </div>
    </div>
  </section>
);

export default WorkSection;
