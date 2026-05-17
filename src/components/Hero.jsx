import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-black text-white">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>

      {/* Main Content */}
      <div className="text-center max-w-5xl">
        
        <h1 className="text-5xl md:text-8xl font-bold font-orbitron mb-6 leading-tight">
          PRINCE <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
            KUMAR
          </span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
          Aspiring Software Engineer & Data Analyst dedicated to building{' '}
          <span className="text-white border-b border-red-500">
            scalable data-driven systems
          </span>
        </h2>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          <a
            href="#projects"
            className="px-8 py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            Explore My Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1ndObCeHmwkJepRRFGEnMyepU1l-U0Eib/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-red-500 text-red-400 font-bold rounded-full hover:bg-red-500/10 transition-all duration-300 flex items-center gap-2"
          >
            <span>DOWNLOAD_CV</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;
