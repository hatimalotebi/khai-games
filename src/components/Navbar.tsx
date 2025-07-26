import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-2xl border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            KHAI GAMES
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;