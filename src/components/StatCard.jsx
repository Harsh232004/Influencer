import React from 'react';

const StatCard = ({ icon, value, label }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
    {icon}
    <p className="text-3xl md:text-4xl font-bold text-indigo-600 mt-2">{value}</p>
    <p className="text-gray-600 mt-1">{label}</p>
  </div>
);

export default StatCard;
