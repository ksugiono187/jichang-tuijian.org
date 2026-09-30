import React from 'react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background pointer-events-none">
      {/* 1. Subtle Grid */}
      <div className="absolute inset-0 bg-grid bg-grid-mobile md:bg-grid opacity-50 md:opacity-100" />
      
      {/* 2. Aurora Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-aurora-purple blur-[100px] animate-aurora-1 mix-blend-screen opacity-60 md:opacity-80" />
      <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-aurora-blue blur-[120px] animate-aurora-2 mix-blend-screen opacity-50 md:opacity-70" />
      <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-aurora-cyan blur-[90px] animate-aurora-3 mix-blend-screen opacity-40 md:opacity-60" />
      
      {/* 3. Subtle Data Lines (SVG) - Minimalistic */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] md:opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0,200 Q 400,300 800,100 T 1600,200" fill="none" stroke="#fff" strokeWidth="1" className="animate-pulse-slow" />
        <path d="M 0,600 Q 500,400 1000,700 T 2000,500" fill="none" stroke="#fff" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </svg>
      
      {/* 4. Shooting Stars (Meteors) - 30 Meteors */}
      <div className="meteor-container opacity-60 md:opacity-90">
        {[...Array(30)].map((_, i) => {
          // Generate deterministic values based on index to avoid hydration mismatch
          const top = (i * 13) % 100; // Spread across vertical (0 - 100%)
          const left = (i * 21) % 120; // Spread across horizontal (0 - 120% to allow coming from off-screen right)
          const delay = (i * 0.73) % 12; // Delays between 0s and 12s
          const duration = 4 + ((i * 1.3) % 6); // Duration between 4s and 10s
          
          return (
            <div 
              key={i} 
              className="meteor" 
              style={{ 
                top: `${top}%`, 
                left: `${left}%`, 
                animationDelay: `${delay}s`, 
                animationDuration: `${duration}s` 
              }} 
            />
          );
        })}
      </div>
      
      {/* 5. Vignette / Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#030712_100%)] opacity-80" />
    </div>
  );
}
