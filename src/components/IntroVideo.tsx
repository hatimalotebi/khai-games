import React, { useRef, useEffect, useState } from 'react';

interface IntroVideoProps {
  onVideoEnd: () => void;
  gameAudio: HTMLAudioElement | null;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ onVideoEnd, gameAudio }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

      // Enhanced scroll handling for video pause/resume
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const videoElement = videoRef.current;
        
        if (videoElement) {
          const videoRect = videoElement.getBoundingClientRect();
          const isVideoInView = videoRect.top < window.innerHeight && videoRect.bottom > 0;
          
          // Pause video when scrolling down and video is not in view
          if (currentScrollY > lastScrollY && !isVideoInView && !videoElement.paused) {
            videoElement.pause();
            // Resume game music when video is paused
            if (gameAudio) {
              gameAudio.play().catch(console.error);
            }
          }
          
          // Resume video when scrolling back up and video is in view
          if (currentScrollY < lastScrollY && isVideoInView && videoElement.paused) {
            videoElement.play().catch(console.error);
            // Pause game music when video resumes
            if (gameAudio) {
              gameAudio.pause();
            }
          }
        }
        
        setLastScrollY(currentScrollY);
      };

      video.addEventListener('ended', handleEnded);
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        video.removeEventListener('ended', handleEnded);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [onVideoEnd, gameAudio, lastScrollY]);

  return (
    <section id="home" className="relative h-screen bg-black overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls={false}
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        muted
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