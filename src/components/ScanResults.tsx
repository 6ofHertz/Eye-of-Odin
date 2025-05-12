
import React from 'react';
import { ScanResult } from './ScanForm';
import { Skull, Sword, Anchor, Map } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ScanResultsProps {
  result: ScanResult | null;
}

const ScanResults: React.FC<ScanResultsProps> = ({ result }) => {
  if (!result) return null;
  
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="bounty-poster mb-6 relative">
        <div className="absolute -top-3 -right-3 transform rotate-12">
          <Skull className="w-10 h-10 text-pirate-red" />
        </div>
        <div className="absolute -top-3 -left-3 transform -rotate-12">
          <Sword className="w-10 h-10 text-pirate-red" />
        </div>
        
        <h2 className="text-center text-3xl font-bold text-pirate-navy mb-4">BOUNTY NOTICE</h2>
        
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-pirate-navy py-2 border-y-2 border-pirate-navy">{result.input}</div>
          <div className="text-lg text-pirate-navy mt-1">Digital Footprint</div>
          <div className={`mt-3 inline-block px-4 py-1 rounded-full font-bold ${
            result.exposureLevel === 'low' 
              ? 'bg-green-800 text-white' 
              : result.exposureLevel === 'medium'
                ? 'bg-yellow-800 text-white'
                : 'bg-red-800 text-white'
          }`}>
            {result.exposureLevel.toUpperCase()} EXPOSURE
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="text-pirate-navy font-bold border-b border-pirate-navy pb-1 flex items-center gap-2">
            <Map className="w-4 h-4" />
            DIGITAL TRACES ({result.sources.length})
          </div>
          <div className="flex flex-wrap gap-2">
            {result.sources.map((source, index) => (
              <span 
                key={index}
                className="bg-pirate-navy text-pirate-gold px-3 py-1 rounded-full text-sm"
              >
                {source}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Anchor className="w-5 h-5" />
        Intelligence Findings
      </h3>
      <div className="space-y-4">
        {result.findings.map((finding, index) => (
          <Card key={index} className="bg-pirate-dark border border-pirate-gold shadow-lg">
            <CardHeader className="pb-2 border-b border-pirate-gold/30">
              <CardTitle className="text-pirate-gold text-sm flex items-center gap-2">
                <Skull className="w-4 h-4" />
                {finding.source}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3 text-pirate-parchment">
              {finding.data}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-pirate-dark/80 rounded-lg border border-pirate-gold shadow-lg">
        <h4 className="text-pirate-gold mb-2 flex items-center gap-2">
          <Sword className="w-4 h-4" />
          Security Advisory:
        </h4>
        <p className="text-sm text-pirate-parchment">
          {result.exposureLevel === 'low' 
            ? "Your digital footprint seems minimal. Continue practicing good security habits like using unique passwords and limiting the personal information you share online."
            : result.exposureLevel === 'medium'
              ? "Consider reviewing your privacy settings on social media and checking for data breaches that may have exposed your information."
              : "Your digital exposure is significant. Take immediate steps to secure your accounts, update passwords, and consider removing sensitive information from public websites."
          }
        </p>
      </div>
    </div>
  );
};

export default ScanResults;
