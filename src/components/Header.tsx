
import React from 'react';
import { Flag } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Flag className="w-10 h-10 text-pirate-gold" />
        <h1 className="text-2xl md:text-3xl font-bold">Digital Bounty Board</h1>
      </div>
      <div>
        <a 
          href="#about"
          className="text-pirate-gold hover:text-pirate-straw transition-colors"
        >
          About
        </a>
      </div>
    </header>
  );
};

export default Header;
