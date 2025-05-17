import React, { useState, useEffect } from 'react';
import ScanForm, { ScanResult } from '@/components/ScanForm';
import ScanResults from '@/components/ScanResults';
import AboutSection from '@/components/AboutSection';
import { Eye, AlertCircle, ArrowDown, Shield } from 'lucide-react';
import OdinEyeVisualization from '@/components/OdinEyeVisualization';
import BackgroundVideo from '@/components/BackgroundVideo';
import ScrollAnimationWrapper from '@/components/ScrollAnimationWrapper';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { searchGoogleCSE } from '../utils/googleCustomSearch';

const Index = () => {
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'email' | 'phone' | 'name'>('email');
  const [googleCSEResults, setGoogleCSEResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [scanCount, setScanCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedCount = localStorage.getItem('odin-scan-count');
    if (savedCount) {
      setScanCount(parseInt(savedCount));
    }
  }, []);

  const handleSearch = async () => {
    setError(null);
    setGoogleCSEResults([]);

    if (!query) {
      setError('Please enter a value to search.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    switch (searchType) {
      case 'email':
        if (!emailRegex.test(query)) {
          setError('Please enter a valid email address.');
          return;
        }
        break;
      case 'phone':
        if (!/^[0-9]{7,}$/.test(query)) {
          setError('Please enter a valid phone number.');
          return;
        }
        break;
      case 'name':
        if (query.length < 2) {
          setError('Please enter a valid name.');
          return;
        }
        break;
    }

    setLoading(true);
    try {
      const googleData = await searchGoogleCSE(query);
      setGoogleCSEResults(googleData.items || []);
    } catch (err: any) {
      if (err.response && err.response.status === 429) {
        setError('Rate limit exceeded. Please try again later.');
      } else {
        setError('Error fetching search results.');
      }
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleScanComplete = (result: ScanResult) => {
    setScanResult(result);
    const newCount = scanCount + 1;
    setScanCount(newCount);
    localStorage.setItem('odin-scan-count', newCount.toString());

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
              onClick={() => document.getElementById('scan-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Start scanning
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
                title: 'Detect Exposure',
                desc: 'Identify your digital footprint and discover what personal information is publicly available.'
              },
              {
                icon: <AlertCircle className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
                title: 'Analyze Risks',
                desc: 'Evaluate potential security risks and privacy threats based on your exposed information.'
              },
              {
                icon: <Shield className="w-8 h-8 text-violet-600 dark:text-violet-400" />,
                title: 'Secure Yourself',
                desc: 'Receive tailored recommendations to protect your privacy and secure your digital presence.'
              }
            ].map((item, idx) => (
              <ScrollAnimationWrapper key={idx} delay={100 * (idx + 1)} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-slate-200">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </ScrollAnimationWrapper>
            ))}
          </div>

          {scanCount > 0 && (
            <ScrollAnimationWrapper delay={400} className="mt-16">
              <div className="mt-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl inline-block">
                <p className="text-slate-700 dark:text-slate-300">
                  <span className="font-bold text-violet-600 dark:text-violet-400">{scanCount}</span> {scanCount === 1 ? 'scan' : 'scans'} performed with Eye of Odin
                </p>
              </div>
            </ScrollAnimationWrapper>
          )}
        </section>

        <section id="scan-section" className="scroll-mt-24">
          <ScrollAnimationWrapper>
            <div className="flex justify-center mb-8">
              <img
                src="/create a logo inspired by Greek mythology, with illustrative and in-depth design elements.png"
                alt="Eye of Odin Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="max-w-2xl mx-auto p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-purple-600 to-violet-500"></div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Eye className="text-violet-500 w-6 h-6 animate-pulse" />
                <h2 className="text-xl font-medium text-slate-800 dark:text-slate-200">Scan Your Digital Presence</h2>
              </div>
              <ScanForm onScanComplete={handleScanComplete} />
            </div>
          </ScrollAnimationWrapper>
        </section>

        {scanResult && (
          <section id="results" className="mt-16">
            <ScanResults result={scanResult} />
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;
