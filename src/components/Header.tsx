
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Search, Shield, Book, BarChart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 border-b border-theme-border/30 sticky top-0 z-10 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Eye className="w-6 h-6 text-violet-500 eye-glow" />
        <div className="flex flex-col md:flex-row md:items-center md:gap-2">
          <h1 className="text-xl font-semibold text-white">Eye of Odin</h1>
          <span className="text-xs md:text-sm text-violet-500/80 italic hidden md:inline-block">
            — See All, Know All, Secure All
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <Link 
          to="/"
          className="text-slate-300 hover:text-violet-500 transition-colors flex items-center gap-1 text-sm"
        >
          <Search className="w-4 h-4" />
          <span className="hidden md:inline">Scanner</span>
        </Link>
        <Link 
          to="/dashboard"
          className="text-slate-300 hover:text-violet-500 transition-colors flex items-center gap-1 text-sm"
        >
          <BarChart className="w-4 h-4" />
          <span className="hidden md:inline">Dashboard</span>
        </Link>
        <Link 
          to="/documentation"
          className="text-slate-300 hover:text-violet-500 transition-colors flex items-center gap-1 text-sm"
        >
          <Book className="w-4 h-4" />
          <span className="hidden md:inline">Docs</span>
        </Link>
        <Link 
          to="/#about"
          className="text-slate-300 hover:text-violet-500 transition-colors flex items-center gap-1 text-sm"
        >
          <Shield className="w-4 h-4" />
          <span className="hidden md:inline">About</span>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
