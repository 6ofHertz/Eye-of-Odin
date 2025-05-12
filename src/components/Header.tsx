
import React from 'react';
import { Shield, Search, HelpCircle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white border-b border-theme-border/30 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
      <div className="flex items-center gap-2">
        <Shield className="w-6 h-6 text-theme-primary" />
        <h1 className="text-xl font-semibold">Digital Footprint</h1>
      </div>
      <div className="flex items-center gap-6">
        <a 
          href="#"
          className="text-theme-foreground/70 hover:text-theme-primary transition-colors flex items-center gap-1 text-sm"
        >
          <Search className="w-4 h-4" />
          <span>Scanner</span>
        </a>
        <a 
          href="#about"
          className="text-theme-foreground/70 hover:text-theme-primary transition-colors flex items-center gap-1 text-sm"
        >
          <HelpCircle className="w-4 h-4" />
          <span>About</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
