import React from 'react';

const ProcessTimeline = () => {
  const steps = [
    {
      num: '1',
      title: 'Learn',
      desc: 'Master core concepts, explore problem spaces, and develop the innovation mindset.'
    },
    {
      num: '2',
      title: 'Ideate',
      desc: 'Transform observations into actionable ideas through structured brainstorming.'
    },
    {
      num: '3',
      title: 'Build',
      desc: 'Turn validated ideas into working prototypes with expert mentorship.'
    },
    {
      num: '4',
      title: 'Scale',
      desc: 'Develop prototypes into scalable solutions with business modeling.'
    },
    {
      num: '5',
      title: 'Launch',
      desc: 'Deploy your innovation with ecosystem support and growth acceleration.'
    }
  ];

  return (
    <section className="py-24 bg-brand-900 relative overflow-hidden">
      {/* Background Holographic Glow */}
      <div className="absolute inset-0 bg-accent-600/5 blur-[100px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">HOW UGHAM WORKS</h2>
          <p className="text-text-secondary text-lg">Your innovation journey follows a structured path</p>
        </div>

        {/* Glow Beam Wrap (Mimicking Ugham's layout) */}
        <div className="relative flex flex-col items-start lg:items-center">
          
          {/* Center Glowing Line */}
          <div className="absolute left-[39px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-600/20 via-accent-500 to-accent-600/20 shadow-[0_0_15px_rgba(124,58,237,0.8)] lg:-translate-x-1/2" />

          <div className="w-full space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col lg:flex-row items-start lg:items-center w-full ${idx % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start lg:flex-row-reverse'}`}>
                
                {/* Center Dot */}
                <div className="absolute left-[20px] lg:left-1/2 w-10 h-10 rounded-full bg-brand-950 border-2 border-accent-500 text-accent-400 font-bold flex items-center justify-center z-10 lg:-translate-x-1/2 shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                  {step.num}
                </div>

                {/* Content Box */}
                <div className={`ml-20 lg:ml-0 w-full lg:w-[45%] bg-brand-950/80 border border-brand-800 p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:border-accent-500/50 transition-colors ${idx % 2 === 0 ? 'lg:mr-auto lg:text-right' : 'lg:ml-auto lg:text-left'}`}>
                  <h4 className="text-2xl font-display font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-text-secondary leading-relaxed">{step.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
