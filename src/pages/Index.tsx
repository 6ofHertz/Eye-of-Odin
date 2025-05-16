
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import ScanForm, { ScanResult } from '@/components/ScanForm';
import ScanResults from '@/components/ScanResults';
import AboutSection from '@/components/AboutSection';
import { Eye, AlertCircle, ArrowDown, BarChart, Shield } from 'lucide-react';
import OdinEyeVisualization from '@/components/OdinEyeVisualization';
import BackgroundVideo from '@/components/BackgroundVideo';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [scanCount, setScanCount] = useState<number>(0);

  // Load scan count from localStorage on initial load
  useEffect(() => {
    const savedCount = localStorage.getItem('odin-scan-count');
    if (savedCount) {
      setScanCount(parseInt(savedCount));
    }
  }, []);

  const handleScanComplete = (result: ScanResult) => {
    setScanResult(result);
    
    // Update scan count and save to localStorage
    const newCount = scanCount + 1;
    setScanCount(newCount);
    localStorage.setItem('odin-scan-count', newCount.toString());
    
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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      <BackgroundVideo videoSrc="https://cdn.gpteng.co/videos/abstract-tech-bg.mp4" />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-16 mt-8 animate-fade-in">
          <ScrollAnimationWrapper direction="down" className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-purple-700 dark:from-violet-400 dark:to-purple-600 text-transparent bg-clip-text">
              Eye of Odin
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold">Unveil your digital shadow</span> and take control of your online presence before others do.
            </p>
          </ScrollAnimationWrapper>
          
          <div className="mt-6 flex justify-center">
            <Button
              variant="outline"
              size="lg" 
              className="rounded-full border-violet-500/30 bg-transparent hover:bg-violet-500/10 text-violet-600 dark:text-violet-400"
              onClick={() => {
                document.getElementById('scan-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Start scanning
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimationWrapper delay={100} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Detect Exposure</h3>
              <p className="text-slate-600 dark:text-slate-400">Identify your digital footprint and discover what personal information is publicly available.</p>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={200} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Analyze Risks</h3>
              <p className="text-slate-600 dark:text-slate-400">Evaluate potential security risks and privacy threats based on your exposed information.</p>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper delay={300} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">Secure Yourself</h3>
              <p className="text-slate-600 dark:text-slate-400">Receive tailored recommendations to protect your privacy and secure your digital presence.</p>
            </ScrollAnimationWrapper>
          </div>
          
          <ScrollAnimationWrapper delay={400}>
            {scanCount > 0 && (
              <div className="mt-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl inline-block">
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-violet-600 dark:text-violet-400">{scanCount}</span> {scanCount === 1 ? 'scan' : 'scans'} performed with Eye of Odin
                </p>
              </div>
            )}
          </ScrollAnimationWrapper>
        </section>
        
        <section id="scan-section" className="scroll-mt-24">
          <ScrollAnimationWrapper>
            <div className="max-w-2xl mx-auto p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-600 to-violet-500"></div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Eye className="text-violet-500 w-6 h-6 animate-pulse" />
                <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200">Scan Your Digital Presence</h2>
              </div>
              <ScanForm style={{ border: '2px solid red' }} onScanComplete={handleScanComplete} />
            </div>
          </ScrollAnimationWrapper>
        </section>
        
        <div className="my-8">
          <OdinEyeVisualization exposureLevel={scanResult?.exposureLevel || null} />
        </div>
        
        <div id="results" className="scroll-mt-8">
          <ScanResults result={scanResult} />
        </div>
        
        <ScrollAnimationWrapper direction="up" className="my-12 max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertCircle className="text-violet-500 w-5 h-5" />
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Privacy Matters</h2>
            <AlertCircle className="text-violet-500 w-5 h-5" />
          </div>
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg">
            <p className="text-slate-700 dark:text-slate-300 text-center max-w-3xl mx-auto">
              Your digital footprint can reveal more than you think. Our scanner helps identify potentially exposed 
              information so you can take steps to protect your privacy online.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <Link to="/dashboard">
              <Button variant="default" className="bg-violet-600 hover:bg-violet-700">
                <BarChart className="mr-2 h-4 w-4" />
                View Analytics Dashboard
              </Button>
            </Link>
          </div>
        </ScrollAnimationWrapper>
        
        <AboutSection />
      </main>
      
      <footer className="py-6 px-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 dark:text-slate-500">© 2025 Eye of Odin</p>
          <p className="text-slate-500 dark:text-slate-500 italic my-2 md:my-0">See All, Know All, Secure All</p>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/eye-of-odin/scanner" 
              className="text-slate-500 hover:text-violet-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://github.com/eye-of-odin/scanner/issues" 
              className="text-slate-500 hover:text-violet-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
