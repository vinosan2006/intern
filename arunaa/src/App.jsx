import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ProcessTimeline from './components/ProcessTimeline';

function App() {
  return (
    <div className="min-h-screen bg-brand-950 text-text-primary selection:bg-accent-500/30 selection:text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <ServicesGrid />
        <ProcessTimeline />
      </main>
      
      {/* Corporate Footer */}
      <footer className="border-t border-brand-800 bg-brand-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-display font-bold tracking-tight text-white mb-6 block">
                VISIONARY
              </span>
              <p className="text-text-secondary max-w-sm leading-relaxed">
                Building category-defining digital products for ambitious enterprises and startups worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-text-secondary hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-text-secondary hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Social</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Twitter X</a></li>
                <li><a href="#" className="text-text-secondary hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-text-secondary hover:text-white transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-brand-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Visionary Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
