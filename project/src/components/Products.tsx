import React, { useEffect, useRef, useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const Products: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  const products = [
    {
      title: "NABTU: The Forgotten Kingdom",
      subtitle: "Epic Arabian Adventure",
      description: "An epic adventure through ancient Arabian civilizations that takes you on a stunning exploratory journey through Saudi Arabia's rich history and heritage. Experience the forgotten kingdom like never before.",
      videoUrl: "https://files.catbox.moe/hvqzxg.mp4",
      posterUrl: "https://i.imgur.com/tV8pjzq.png",
      price: "$24.99",
      originalPrice: "$39.99",
      discount: "37% OFF",
      platforms: ["Steam", "Epic", "PlayStation", "Xbox"],
      buyLink: "https://buy.polar.sh/polar_cl_fcscyxqbc2lyp8kjV9etAL6ypyd06yD6gy9jz44qqkj",
      status: "available"
    }
  ];

  return (
    <section 
      id="games" 
      ref={sectionRef} 
      className="py-20 px-8 w-full"
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
            OUR GAME
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {products.map((product, index) => (
              <div key={index} className="space-y-8">
                
                {/* Title Section */}
                <div className="text-center space-y-4">
                  <h3 className="text-5xl font-bold text-white leading-tight">{product.title}</h3>
                  <p className="text-2xl text-gray-300 font-medium">{product.subtitle}</p>
                </div>
                
                {/* Enhanced Video Section - Click to Play */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    x5-video-player-type="h5"
                    poster={product.posterUrl}
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src={product.videoUrl} type="video/mp4" />
                  </video>
                  
                  {/* Enhanced Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Enhanced Play/Pause Button */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={handleVideoClick}
                  >
                    <div className={`bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110 ${
                      isVideoPlaying ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <PlayIcon className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  {/* Enhanced Status Badges */}
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                    AVAILABLE NOW
                  </div>
                  
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold border border-white/30">
                    {product.discount}
                  </div>
                </div>
                
                {/* Game Details Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Left Column - Game Info */}
                  <div className="space-y-6">
                    {/* Description */}
                    <p className="text-xl text-gray-300 leading-relaxed">{product.description}</p>
                  </div>
                  
                  {/* Right Column - Purchase */}
                  <div className="space-y-6">
                    {/* Price and Buy Section */}
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <span className="text-4xl font-bold text-white">{product.price}</span>
                            <span className="text-lg text-gray-400 line-through block">{product.originalPrice}</span>
                          </div>
                        </div>
                        
                        <a
                          href={product.buyLink}
                          className="w-full bg-white text-black px-6 py-3 rounded-xl font-bold text-lg text-center hover:bg-gray-100 transition-all duration-300 block"
                        >
                          BUY NOW
                        </a>
                      </div>
                    </div>
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

export default Products;