// src/cards/ServiceCard.jsx - SUGGESTED CODE
import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col items-center justify-start">
      <div className="mb-4 text-5xl"> {/* Adjust icon size and color via parent */}
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
