import React, { useState } from 'react';

const Contacts = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Message Sent! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-glow font-orbitron">Get In Touch</h2>
        <p className="text-gray-400 mt-2">Currently based in Bangalore, Karnataka </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <h3 className="text-xl font-bold mb-6 text-cyan-400">Contact Details</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-cyan-500">📍</span> Bangalore 
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-500">📧</span> prince.edu.2025@gmail.com 
            </li>
            <li className="flex items-center gap-3">
              <span className="text-cyan-500">📱</span> +91-9905053560 
            </li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            required 
          />
          <textarea 
            placeholder="Your Message" 
            rows="4" 
            className="bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
            required
          ></textarea>
          <button 
            type="submit" 
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-105"
          >
            Send Signal
          </button>
          {status && <p className="text-cyan-400 text-center mt-2 animate-pulse">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contacts;