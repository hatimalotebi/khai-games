import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 px-8 overflow-hidden">
      {/* Gaming background image with blur effect */}
      <div className="absolute inset-0">
        <img 
          src="https://i.imgur.com/00H3Cj5.png" 
          alt="Gaming Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
                      <h2 className="text-6xl font-bold text-center mb-20 tracking-wide drop-shadow-2xl bg-gradient-to-b from-orange-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              BREIF
            </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="p-12">
                            <div className="text-center space-y-4">
                <p className="text-3xl text-white leading-relaxed drop-shadow-lg font-semibold">
                  A company focused on showcasing , cultural, historical, and heritage aspects  of the Kingdom of Saudi Arabia by creating premium games
                  and scaling LOCAL talents
                </p>
            
        
              
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;