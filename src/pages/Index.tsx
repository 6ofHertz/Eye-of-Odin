
import React, { useState } from 'react';
import Header from '@/components/Header';
import ScanForm, { ScanResult } from '@/components/ScanForm';
import ShipAnimations from '@/components/ShipAnimations';
import ScanResults from '@/components/ScanResults';
import AboutSection from '@/components/AboutSection';
import { Skull, Anchor } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pirate-dark to-pirate-navy">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center mb-12 mt-8">
          <div className="flex justify-center gap-4 mb-4">
            <Skull className="w-10 h-10 text-pirate-red" />
            <h1 className="text-4xl md:text-5xl font-bold">Digital Bounty Board</h1>
            <Skull className="w-10 h-10 text-pirate-red" />
          </div>
          <p className="text-xl text-pirate-parchment/90 max-w-2xl mx-auto">
            Discover your digital exposure across the vast seas of the internet.
            What information lies in wait with your name attached to it?
          </p>
        </section>
        
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div className="bg-pirate-dark/60 p-6 rounded-lg border border-pirate-gold/30 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="text-pirate-gold" />
              <h2 className="text-xl font-bold">Scan The Digital Waters</h2>
            </div>
            <ScanForm onScanComplete={handleScanComplete} />
          </div>
          <div>
            <ShipAnimations exposureLevel={scanResult?.exposureLevel || null} />
          </div>
        </div>
        
        <div id="results">
          <ScanResults result={scanResult} />
        </div>
        
        <AboutSection />
      </main>
      
      <footer className="py-6 px-4 text-center text-pirate-parchment/70 bg-pirate-dark border-t border-pirate-gold/20">
        <p>© 2025 Digital Bounty Board - OSINT Data Exposure Platform</p>
      </footer>
    </div>
  );
};

export default Index;
