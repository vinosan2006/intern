import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-brand-950/70 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-95 group-hover:bg-accent-500">
              <span className="text-brand-950 font-display font-bold text-lg leading-none group-hover:text-white transition-colors duration-300">V</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white group-hover:text-accent-400 transition-colors duration-300">
              VISIONARY
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Approach', 'Impact', 'Insights'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-accent-500 hover:text-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-brand-950/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 text-text-secondary hover:text-white p-2"
              onClick={() => setMobileOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center gap-8 text-2xl font-display font-medium">
              {['Services', 'Approach', 'Impact', 'Insights'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-accent-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-8 px-8 py-4 rounded-full bg-accent-500 text-white text-lg font-semibold w-full max-w-xs flex items-center justify-center gap-2"
              >
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
