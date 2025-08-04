import React from 'react';

const BrandsSection = () => (
  // The 'bg-gray-50' class has been REMOVED to make this section transparent
  <section className="py-16">
    <div className="container mx-auto px-6">
      <h3 className="text-center text-2xl font-semibold text-gray-600 mb-10">Trusted by leading brands worldwide</h3>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
        <img src="https://placehold.co/150x50/cccccc/888888?text=Brand+A" alt="Brand A" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="https://placehold.co/150x50/cccccc/888888?text=Brand+B" alt="Brand B" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="https://placehold.co/150x50/cccccc/888888?text=Brand+C" alt="Brand C" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="https://placehold.co/150x50/cccccc/888888?text=Brand+D" alt="Brand D" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
        <img src="https://placehold.co/150x50/cccccc/888888?text=Brand+E" alt="Brand E" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </section>
);

export default BrandsSection;
