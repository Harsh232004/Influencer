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

export default ServiceCard;
