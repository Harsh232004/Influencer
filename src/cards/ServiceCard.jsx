<<<<<<< HEAD
import React from 'react';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);
=======
import React from "react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ServiceCard = ({ idx, icon: Icon, title, note, setActive }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40% 0px -40% 0px" }); // centre-trigger

  useEffect(() => {
    if (inView) setActive(idx);
  }, [inView, idx, setActive]);

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden rounded-2xl bg-white/5 px-6 py-8 backdrop-blur-lg shadow-lg ring-1 ring-white/10"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg">
        <Icon size={22} />
      </div>

      <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-purple-200">{note}</p>

      {/* Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0"
        initial={false}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
};
>>>>>>> main

export default ServiceCard;
