import React, { useEffect, useRef, useState } from 'react';

const Team: React.FC = () => {
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

  const teamMembers = [
    {
      name: "Sadeem",
      photo: "src/assets/teams/IMG_1468 (1).png"
    },
    {
      name: "Modhi AlShuraim",
      photo: "src/assets/teams/Untitled_Artwork (1).png"
    }
  ];

  return (
    <section 
      id="team" 
      ref={sectionRef} 
      className="relative py-20 px-8 w-full"
      style={{ 
        backgroundColor: 'rgb(23 24 25)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
      <div className="container mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-6xl font-bold text-center mb-20 tracking-wide drop-shadow-2xl bg-gradient-to-b from-orange-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent">
            MEET THE TEAM
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                {/* Clean Image Only */}
                <div className="flex justify-center mb-8">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-64 h-64 object-contain transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Name */}
                <h3 className="text-2xl font-semibold text-white tracking-wide">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;