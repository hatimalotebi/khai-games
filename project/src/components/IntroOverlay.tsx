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

    // Auto-start after 3 seconds
    const timer = setTimeout(() => {
      handleStart();
    }, 3000);

    return () => clearTimeout(timer);
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

      {/* Loading indicator instead of start button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-20 text-center">
          <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold italic tracking-wider mb-4">
            <span className="drop-shadow-2xl">KHAI GAMES</span>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;