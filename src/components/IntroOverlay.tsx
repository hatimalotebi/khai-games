import React, { useState, useRef, useEffect } from 'react';

interface IntroOverlayProps {
  onStart: () => void;
  gameAudio: HTMLAudioElement | null;
}

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onStart, gameAudio }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (gameAudio) {
      gameAudio.loop = true;
      gameAudio.volume = 0.3;
      gameAudio.play().catch(console.error);
    }
  }, [gameAudio]);

  const handleStart = () => {
    if (gameAudio) {
      gameAudio.pause();
    }
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsVisible(false);
      onStart();
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Video - Enhanced for iPhone */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
        >
          <source src="https://files.catbox.moe/hvqzxg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      </div>

      {/* Monster Image - Enhanced iPhone responsiveness */}
      <div className={`absolute h-full transition-all duration-1000 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100'}`} 
           style={{ 
             // iPhone: better positioning and sizing
             right: window.innerWidth <= 768 ? '2%' : '-5%',
             top: '0',
             width: window.innerWidth <= 768 ? '60%' : '55%',
             maxWidth: window.innerWidth <= 768 ? '300px' : 'none'
           }}>
        <div className="relative h-full w-full">
          <img 
            src="https://i.ibb.co/fYYPQwWx/IMG-1370-1.png" 
            alt="Monster" 
            className={`w-full h-full object-contain drop-shadow-2xl ${
              window.innerWidth <= 768 ? 'object-center' : 'object-left'
            }`}
            style={{
              // iPhone specific adjustments
              maxHeight: window.innerWidth <= 768 ? '80vh' : '100%',
              objectFit: window.innerWidth <= 768 ? 'contain' : 'cover'
            }}
          />
        </div>
      </div>

      {/* Start Button - Restored with enhanced positioning */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-20 ml-[-20%] sm:ml-[-25%] md:ml-[-30%]">
          <button
            onClick={handleStart}
            className="relative group text-white text-4xl sm:text-5xl md:text-6xl font-bold italic tracking-wider hover:text-gray-300 transition-all duration-300 hover:scale-110 cursor-pointer"
            style={{ fontFamily: 'serif' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            <span className="relative drop-shadow-2xl">Start</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;