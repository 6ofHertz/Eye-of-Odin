
import React from 'react';
import { Anchor, Sword } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-pirate-dark border-b border-pirate-gold/40">
      <div className="flex items-center gap-3">
        <Anchor className="w-10 h-10 text-pirate-gold" />
        <h1 className="text-2xl md:text-3xl font-bold">Digital Bounty Board</h1>
      </div>
      <div className="flex items-center gap-4">
        <a 
          href="#about"
          className="text-pirate-gold hover:text-pirate-straw transition-colors flex items-center"
        >
          <span>About</span>
          <Sword className="w-4 h-4 ml-1 rotate-45" />
        </a>
      </div>
    </header>
  );
};

export default Header;
