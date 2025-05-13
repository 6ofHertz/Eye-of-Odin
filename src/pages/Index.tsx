
import React, { useState } from 'react';
import Header from '@/components/Header';
import ScanForm, { ScanResult } from '@/components/ScanForm';
import ScanResults from '@/components/ScanResults';
import AboutSection from '@/components/AboutSection';
import { Eye, AlertCircle } from 'lucide-react';

const Index = () => {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const handleScanComplete = (result: ScanResult) => {
    setScanResult(result);
    
    // Scroll to results
    if (result) {
      setTimeout(() => {
        const resultsElement = document.getElementById('results');
        if (resultsElement) {
          resultsElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto text-center mb-16 mt-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600 text-transparent bg-clip-text">
            Eye of Odin
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            <span className="font-semibold">See All, Know All, Secure All</span> - Discover your digital exposure across the internet and take control of your online privacy.
          </p>
          
          <div className="mt-10 max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Eye className="text-amber-500 w-6 h-6 animate-pulse" />
              <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200">Scan Your Digital Presence</h2>
            </div>
            <ScanForm onScanComplete={handleScanComplete} />
          </div>
        </section>
        
        <div id="results" className="scroll-mt-8">
          <ScanResults result={scanResult} />
        </div>
        
        <div className="my-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertCircle className="text-amber-500 w-5 h-5" />
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Privacy Matters</h2>
            <AlertCircle className="text-amber-500 w-5 h-5" />
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
            <p className="text-slate-700 dark:text-slate-300 text-center max-w-3xl mx-auto">
              Your digital footprint can reveal more than you think. Our scanner helps identify potentially exposed 
              information so you can take steps to protect your privacy online.
            </p>
          </div>
        </div>
        
        <AboutSection />
      </main>
      
      <footer className="py-6 px-4 text-center text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <p>© 2025 Eye of Odin - See All, Know All, Secure All</p>
      </footer>
    </div>
  );
};

export default Index;
