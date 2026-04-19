import React, { useEffect, useState } from 'react';
import { initCustomCursor } from './utils/cursor';

// Styling
import './styles/tailwind.css';

// Components
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

/**
 * Main Portfolio Application for Prince Kumar
 * Integrates React State for UI controls and Vanilla JS for performance animations.
 */
function App() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    // Initialize the Vanilla JS Custom Cursor and Starfield
    initCustomCursor();

    // Scroll listener for sticky navbar glass effect
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative antialiased selection:bg-cyan-500/30 selection:text-cyan-400">
      
      {/* Dynamic Sticky Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 px-6 py-4 ${
        navScrolled ? 'bg-black/60 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold font-orbitron tracking-tighter text-glow">
            PK<span className="text-cyan-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 font-mono text-sm tracking-widest">
            <a href="#about" className="hover:text-cyan-400 transition-colors">// ABOUT</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">// SKILLS</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">// PROJECTS</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">// CONTACT</a>
          </div>
          <a 
            href="mailto:prince.edu.2025@gmail.com" 
            className="text-xs border border-cyan-500/50 px-4 py-2 rounded-full hover:bg-cyan-500/10 transition-all"
          >
            HIRE_ME
          </a>
        </div>
      </nav>

      
      <main>
        <Hero />
        
        {/* About Section - Fresher Narrative */}
        <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-orbitron mb-8">System <span className="text-cyan-500">Overview</span></h2>
          <p className="text-gray-400 leading-relaxed text-lg italic">
            "I'm a data-focused problem solver with a background in software development. 
            I enjoy turning raw data into meaningful insights and have built systems handling over 
            1.3M+ records. Currently based in Bangalore, 
            I am looking for opportunities where I can grow as a Data Analyst while using my 
            development skills to build data-driven solutions."
          </p>
        </section>

        <Skills />
        <Projects />
        <Contacts />
      </main>

      {/* Footer with Professional Links */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm font-mono">
            © 2026 PRINCE KUMAR | COMPUTER SCIENCE BE
          </div>
          <div className="flex gap-8">
            <a 
              href="https://www.linkedin.com/in/prince-kumar-software-analyst" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-cyan-500 transition-colors font-mono text-xs"
            >
              LINKEDIN
            </a>
            <a 
              href="https://github.com/Prince" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-cyan-500 transition-colors font-mono text-xs"
            >
              GITHUB
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;