import React from 'react';

const ContactSection = ({ formState, handleInputChange, handleSubmit, formStatus }) => (
  <section id="contact" className="py-20 bg-indigo-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Let's Create Something Amazing Together</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Have a project in mind? We'd love to hear about it.</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input type="text" id="name" name="name" value={formState.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="John Doe" required />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" value={formState.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" required />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows="5" value={formState.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your project..."></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-indigo-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-indigo-700 transition-all duration-300 w-full md:w-auto">
              Send Message
            </button>
          </div>
          {formStatus && <p className="text-center mt-4 text-gray-600">{formStatus}</p>}
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
