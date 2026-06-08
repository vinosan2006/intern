import React from 'react';
import { Rocket, Lightbulb, Users, LineChart, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-950 overflow-hidden pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left: Text Content */}
          <div className="flex-1 space-y-8 z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.15] text-white">
              Empowering <span className="text-accent-400">Innovators.</span><br className="hidden sm:block" /> Building <span className="text-accent-400">Impactful</span> Solutions.
            </h1>
            
            <p className="text-lg text-text-secondary max-w-xl leading-relaxed">
              UGHAM is an innovation platform that fuels creativity, supports problem solvers, and creates real-world impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/what-we-do" className="px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_25px_rgba(124,58,237,0.6)]">
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/collaboration" className="px-8 py-4 bg-transparent border-2 border-brand-700 hover:border-accent-500 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center">
                Collaborate With Us
              </a>
            </div>
          </div>

          {/* Right: Floating Badges Image Area */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none mt-12 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent-600/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                alt="Innovation Lightbulb" 
                className="w-full h-full object-cover rounded-3xl border border-brand-700 shadow-2xl mix-blend-luminosity opacity-80"
              />
              
              {/* Ugham Floating Badges */}
              <div className="floating-badge badge-1 absolute bg-brand-900 border border-brand-700 text-white px-4 py-2 rounded-full font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Rocket className="w-4 h-4 text-accent-400" /> INNOVATION
              </div>
              <div className="floating-badge badge-2 absolute bg-brand-900 border border-brand-700 text-white px-4 py-2 rounded-full font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Lightbulb className="w-4 h-4 text-yellow-400" /> IDEATION
              </div>
              <div className="floating-badge badge-3 absolute bg-brand-900 border border-brand-700 text-white px-4 py-2 rounded-full font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg backdrop-blur-md">
                <Users className="w-4 h-4 text-blue-400" /> COMMUNITY
              </div>
              <div className="floating-badge badge-4 absolute bg-brand-900 border border-brand-700 text-white px-4 py-2 rounded-full font-bold text-xs tracking-wider flex items-center gap-2 shadow-lg backdrop-blur-md">
                <LineChart className="w-4 h-4 text-emerald-400" /> GROWTH
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Curve Divider matching Ugham */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.62,19.24,115.54,34.42,175.5,45.87,224.23,55.19,274.67,61.1,321.39,56.44Z" fill="#121214"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
