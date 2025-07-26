import React, { useState, useEffect, useRef } from 'react';
import IntroOverlay from './components/IntroOverlay';
import IntroVideo from './components/IntroVideo';
import Navbar from './components/Navbar';
import About from './components/About';
import Journey from './components/Journey';
import Team from './components/Team';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const gameAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Initialize game audio
    if (gameAudioRef.current) {
      gameAudioRef.current.volume = 0.3;
    }
  }, []);

  const handleStart = () => {
    setShowOverlay(false);
    setShowIntroVideo(true);
    setShowMainContent(true); // Show content immediately so user can scroll
  };

  const handleVideoEnd = () => {
    // Video ended naturally, just continue with the content
    setShowIntroVideo(false);
  };

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Game Audio */}
      <audio ref={gameAudioRef} loop>
        <source src="/game-music.mp3" type="audio/mpeg" />
      </audio>

      {/* Intro Overlay */}
      {showOverlay && (
        <IntroOverlay 
          onStart={handleStart} 
          gameAudio={gameAudioRef.current}
        />
      )}

      {/* Main Content with Navbar */}
      {showMainContent && (
        <>
          <Navbar />
          
          {/* Hero Video Section */}
          {showIntroVideo && (
            <IntroVideo 
              onVideoEnd={handleVideoEnd}
              gameAudio={gameAudioRef.current}
            />
          )}
          
          {/* Main Sections */}
          <main>
            <About />
            <Journey />
            <Team />
            <Products />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App