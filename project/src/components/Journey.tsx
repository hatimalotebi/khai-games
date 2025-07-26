import React, { useEffect, useRef, useState } from 'react';

const Journey: React.FC = () => {
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

  const milestones = [
    {
      title: "Bootcamp Enrollment",
      description: "Started our journey with intensive training",
      logoSrc: "src/assets/imgs/ready.PNG",
      color: "from-white to-gray-300",
      glowColor: "shadow-white/25",
      logos: [
        { name: "Alfaisal University", url: "https://catalog.alfaisal.edu/themes/custom/alfaisal/images/logo.png" },
        { name: "Misk Foundation", url: "src/assets/imgs/misk.png" },
        { name: "Digital Games Association", url: "src/assets/imgs/game-associated.png" }
      ]
    },
    {
      title: "Saudi Game Champions",
      description: "Recognized as gaming champions",
      logoSrc: "src/assets/imgs/jump.PNG",
      color: "from-white to-gray-300",
      glowColor: "shadow-white/25",
      logos: [
        { name: "CODE", url: "https://waki.sa/wp-content/uploads/2024/06/code-mcit-1.png" }
      ]
    },
    {
      title: "MVP Lab Acceptance",
      description: "Accepted into MVP development program",
      logoSrc: "src/assets/imgs/fast.PNG",
      color: "from-white to-gray-300",
      glowColor: "shadow-white/25",
      logos: [
        { name: "NTDP", url: "https://ntdp.gov.sa/assets/images/logo/ntdp-logo-light.png" }
      ]
    },
    {
      title: "The Garage",
      description: "Joined innovation hub",
      logoSrc: "src/assets/imgs/location.PNG",
      color: "from-white to-gray-300",
      glowColor: "shadow-white/25",
      logos: [
        { name: "The Garage", url: "https://thegarage.sa/assets/images/logo.png" }
      ]
    }
  ];

  return (
    <section id="journey" ref={sectionRef} className="relative py-20 px-8 overflow-hidden">
      {/* Gaming background image with blur effect */}
      <div className="absolute inset-0">
        <img 
          src="https://i.imgur.com/6cDCN0z.jpeg" 
          alt="Gaming Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-6xl font-bold text-center mb-20 tracking-wide drop-shadow-2xl bg-gradient-to-b from-orange-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            OUR JOURNEY
          </h2>
          
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="flex justify-between items-start">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex flex-col items-center max-w-sm flex-1">
                  <div className={`relative mb-8 hover:scale-110 transition-all duration-300`}>
                    <img 
                      src={milestone.logoSrc} 
                      alt={milestone.title}
                      className="w-28 h-28 mx-auto object-contain"
                    />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-sm font-bold text-gray-900">{index + 1}</span>
                    </div>
                  </div>
                  <div className="text-center p-8 w-full">
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{milestone.title}</h3>
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed drop-shadow-lg">{milestone.description}</p>
                    <div className="flex flex-wrap justify-center gap-6">
                      {milestone.logos.map((logo, logoIndex) => (
                        <div key={logoIndex} className="w-32 h-32 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                          <img 
                            src={logo.url} 
                            alt={logo.name}
                            className="w-full h-full object-contain drop-shadow-lg brightness-110 contrast-125"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Vertical Timeline */}
          <div className="lg:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-8">
                <div className={`relative flex-shrink-0`}>
                  <img 
                    src={milestone.logoSrc} 
                    alt={milestone.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs font-bold text-gray-900">{index + 1}</span>
                  </div>
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{milestone.title}</h3>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed drop-shadow-lg">{milestone.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {milestone.logos.map((logo, logoIndex) => (
                      <div key={logoIndex} className="w-24 h-24 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                        <img 
                          src={logo.url} 
                          alt={logo.name}
                          className="w-full h-full object-contain drop-shadow-lg brightness-110 contrast-125"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;