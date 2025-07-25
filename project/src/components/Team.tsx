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
      name: "Ahmed Al-Rashid",
      photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    },
    {
      name: "Fatima Al-Zahrani",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    },
    {
      name: "Omar Al-Mutairi",
      photo: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    },
    {
      name: "Noura Al-Shehri",
      photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="group text-center">
                {/* Modern Avatar */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  {/* Gradient Frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-300 to-white rounded-full p-2">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  
                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-gray-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Name */}
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;