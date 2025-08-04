import React from 'react';

const CaseStudyCard = ({ image, category, title, description, link }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300">
    <img src={image} alt={title} className="w-full h-56 object-cover group-hover:opacity-90 transition-opacity" />
    <div className="p-6">
      <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">{category}</p>
      <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="font-bold text-indigo-600 hover:text-indigo-800 transition-colors">Read More &rarr;</a>
    </div>
  </div>
);

export default CaseStudyCard;
