
import React, { useState } from 'react';
import Header from '@/components/Header';
import ScanForm, { ScanResult } from '@/components/ScanForm';
import ShipAnimations from '@/components/ShipAnimations';
import ScanResults from '@/components/ScanResults';
import AboutSection from '@/components/AboutSection';

const Index = () => {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const handleScanComplete = (result: ScanResult) => {
    setScanResult(result);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Bounty Board</h1>
          <p className="text-xl text-pirate-parchment/90 max-w-2xl mx-auto">
            Discover your digital exposure across the vast seas of the internet.
            What treasure trove of information is out there with your name on it?
          </p>
        </section>
        
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <div>
            <ScanForm onScanComplete={handleScanComplete} />
          </div>
          <div>
            <ShipAnimations exposureLevel={scanResult?.exposureLevel || null} />
          </div>
        </div>
        
        <ScanResults result={scanResult} />
        
        <AboutSection />
      </main>
      
      <footer className="py-6 px-4 text-center text-pirate-parchment/70">
        <p>© 2025 Digital Bounty Board - OSINT Data Exposure Platform</p>
      </footer>
    </div>
  );
};

export default Index;
