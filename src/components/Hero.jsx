import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden">
      <div className="absolute top-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="text-center z-10">
        <p className="font-mono text-cyan-400 tracking-widest mb-4 opacity-80 uppercase">
          
        </p>
        
        <h1 className="text-5xl md:text-8xl font-bold font-orbitron mb-6 leading-tight">
          PRINCE <span className="text-glow text-cyan-500">KUMAR</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
          Aspiring Software Engineer & Data Analyst  
          dedicated to building <span className="text-white border-b border-cyan-500">scalable data-driven systems</span>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <a href="#projects" className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Explore My Systems
          </a>
          <a href="#contact" className="px-8 py-3 border border-cyan-500 text-cyan-400 font-bold rounded-full hover:bg-cyan-500/10 transition-all">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;