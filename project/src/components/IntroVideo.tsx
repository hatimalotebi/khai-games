import React, { useRef, useEffect } from 'react';

interface IntroVideoProps {
  onVideoEnd: () => void;
  gameAudio: HTMLAudioElement | null;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onVideoEnd, gameAudio }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Reset video to start from beginning
      video.currentTime = 0;
      video.play().catch(console.error);
      
      const handleEnded = () => {
        // Resume game music after video ends
        if (gameAudio) {
          gameAudio.play().catch(console.error);
        }
        onVideoEnd();
      };

      // Handle scroll to pause video
      const handleScroll = () => {
        if (video && !video.paused) {
          video.pause();
          // Resume game music when video is paused by scrolling
          if (gameAudio) {
            gameAudio.play().catch(console.error);
          }
        }
      };

      video.addEventListener('ended', handleEnded);
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        video.removeEventListener('ended', handleEnded);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [onVideoEnd, gameAudio]);

  return (
    <section id="home" className="relative h-screen bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls={false}
        playsInline
      >
        <source src="https://files.catbox.moe/hvqzxg.mp4" type="video/mp4" />
      </video>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center animate-bounce">
        <p className="text-sm opacity-75 mb-2">Scroll down to explore more</p>
        <div className="w-6 h-10 border-2 border-white rounded-full mx-auto">
          <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default IntroVideo;