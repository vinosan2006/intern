import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Shield, Smartphone, Globe, Code2 } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Digital Product Design',
    desc: 'Crafting intuitive, world-class user interfaces and experiences that engage and convert.'
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Platform Engineering',
    desc: 'Building highly scalable, secure, and performant backend architectures and APIs.'
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile Applications',
    desc: 'Native and cross-platform mobile apps that deliver seamless experiences across devices.'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Web3 & Blockchain',
    desc: 'Pioneering decentralized solutions, smart contracts, and next-gen web technologies.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Cybersecurity',
    desc: 'Enterprise-grade security audits, penetration testing, and infrastructure hardening.'
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Custom Software',
    desc: 'Tailor-made software solutions designed specifically to accelerate your unique business workflows.'
  }
];

const ServicesGrid = () => {
  return (
    <section id="services" className="py-32 bg-brand-950 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-6"
          >
            Elite Capabilities.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary max-w-2xl leading-relaxed"
          >
            We bring together specialized cross-functional teams to tackle your most complex technical and design challenges from end to end.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-brand-900/50 border border-brand-800 hover:border-accent-500/50 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand-800 flex items-center justify-center text-text-primary group-hover:text-accent-400 group-hover:bg-accent-500/10 transition-colors duration-500 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-display font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
