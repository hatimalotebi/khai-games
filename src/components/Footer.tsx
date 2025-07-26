import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="text-white py-16 px-8 border-t border-gray-700 w-full"
      style={{ 
        backgroundColor: 'rgb(23 24 25)',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)'
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">KHAI GAMES</h3>
            <p className="text-gray-400 leading-relaxed">
              Reviving Saudi Arabia's rich heritage through exceptional and innovative gaming experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#journey" className="text-gray-400 hover:text-white transition-colors">Journey</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
              <li><a href="#games" className="text-gray-400 hover:text-white transition-colors">Games</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Games</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">NABTU</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desert Legends</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Khai Games. All rights reserved.</p>
        </div>
      </div>
      
      {/* Monster Image - Bottom Right */}
      <div className="fixed bottom-8 right-8 opacity-30 hover:opacity-60 transition-opacity duration-300 z-20">
        <img 
          src="https://i.ibb.co/fYYPQwWx/IMG-1370-1.png" 
          alt="Monster" 
          className="w-24 h-24 object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;