import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ContactSection = ({ formState, handleInputChange, handleSubmit, formStatus }) => (
  <section id="contact" className="py-20 overflow-hidden">
    <div className="container mx-auto px-6">

      <motion.div
        className="text-center mb-8" // Reduced bottom margin to bring it closer to the icon
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Let's Create Something Amazing</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Have a project in mind? We'd love to hear about it.</p>
      </motion.div>

      {/* 1. NEW: Animated gesturing image */}
      <motion.div
        className="flex justify-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      >
        {/* Using a friendly mail icon as the gesture. You can replace the src with any image URL you like. */}
        <img
          src="https://img.icons8.com/plasticine/200/new-post.png"
          alt="Contact Us"
          className="w-24 h-24"
        />
      </motion.div>

      {/* 2. The form card now has a delayed animation to appear after the image */}
      <motion.div
        className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} // Delay increased
      >
        <form onSubmit={handleSubmit}>
          {/* Form fields remain the same */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 font-semibold mb-2">I am a...</label>
            <select id="role" name="role" value={formState.role || ''} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" required>
              <option value="" disabled>Please select an option</option>
              <option value="Influencer">Influencer</option>
              <option value="Brand">Brand</option>
              <option value="Customer">Customer</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" value={formState.message} onChange={handleInputChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tell us about your project..."></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-orange-500 text-white font-bold py-3 px-10 rounded-lg hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 w-full md:w-auto flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
              <Mail size={20} />
              Send Message
            </button>
          </div>
          {formStatus && <p className="text-center mt-6 text-gray-600">{formStatus}</p>}
        </form>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
