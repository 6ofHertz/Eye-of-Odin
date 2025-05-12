
import React, { useState } from 'react';
import Header from '@/components/Header';
import ScanForm, { ScanResult } from '@/components/ScanForm';
import ScanResults from '@/components/ScanResults';
import AboutSection from '@/components/AboutSection';
import { Shield, AlertCircle } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="max-w-3xl mx-auto text-center mb-16 mt-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-theme-primary to-theme-secondary text-transparent bg-clip-text">
            Digital Footprint Scanner
          </h1>
          <p className="text-xl text-theme-foreground/70 max-w-2xl mx-auto">
            Discover your digital exposure across the internet and take control of your online privacy.
          </p>
          
          <div className="mt-10 max-w-2xl mx-auto bg-gradient-to-b from-white to-theme-background p-8 rounded-3xl shadow-lg border border-theme-border/20">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Shield className="text-theme-primary w-6 h-6" />
              <h2 className="text-xl font-medium text-theme-foreground">Scan Your Digital Presence</h2>
            </div>
            <ScanForm onScanComplete={handleScanComplete} />
          </div>
        </section>
        
        <div id="results" className="scroll-mt-8">
          <ScanResults result={scanResult} />
        </div>
        
        <div className="my-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertCircle className="text-theme-accent w-5 h-5" />
            <h2 className="text-2xl font-semibold">Privacy Matters</h2>
            <AlertCircle className="text-theme-accent w-5 h-5" />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-theme-border/30 shadow-sm">
            <p className="text-theme-foreground/80 text-center max-w-3xl mx-auto">
              Your digital footprint can reveal more than you think. Our scanner helps identify potentially exposed 
              information so you can take steps to protect your privacy online.
            </p>
          </div>
        </div>
        
        <AboutSection />
      </main>
      
      <footer className="py-6 px-4 text-center text-theme-muted bg-white border-t border-theme-border/20">
        <p>© 2025 Digital Footprint Scanner - Privacy First Platform</p>
      </footer>
    </div>
  );
};

export default Index;
