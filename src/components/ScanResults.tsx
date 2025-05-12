
import React from 'react';
import { ScanResult } from './ScanForm';
import { TreasureChest, Flag } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ScanResultsProps {
  result: ScanResult | null;
}

const ScanResults: React.FC<ScanResultsProps> = ({ result }) => {
  if (!result) return null;
  
  return (
    <div className="w-full max-w-2xl mx-auto my-8">
      <div className="bounty-poster mb-6">
        <div className="absolute -top-3 -right-3 transform rotate-12">
          <TreasureChest className="w-10 h-10 text-pirate-red" />
        </div>
        <div className="absolute -top-3 -left-3 transform -rotate-12">
          <Flag className="w-10 h-10 text-pirate-red" />
        </div>
        
        <h2 className="text-center text-2xl font-bold text-pirate-navy mb-4">WANTED</h2>
        
        <div className="text-center mb-6">
          <div className="text-3xl font-bold text-pirate-navy">{result.input}</div>
          <div className="text-lg text-pirate-navy mt-1">Digital Pirate</div>
          <div className={`mt-3 inline-block px-4 py-1 rounded-full font-bold ${
            result.exposureLevel === 'low' 
              ? 'bg-green-500 text-white' 
              : result.exposureLevel === 'medium'
                ? 'bg-yellow-500 text-black'
                : 'bg-red-600 text-white'
          }`}>
            {result.exposureLevel.toUpperCase()} EXPOSURE
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="text-pirate-navy font-bold border-b border-pirate-navy pb-1">
            SOURCES FOUND ({result.sources.length})
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
      
      <h3 className="text-xl font-bold mb-4">Scan Logs</h3>
      <div className="space-y-4">
        {result.findings.map((finding, index) => (
          <Card key={index} className="bg-pirate-dark border border-pirate-gold">
            <CardHeader className="pb-2">
              <CardTitle className="text-pirate-gold text-sm">{finding.source}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 text-pirate-parchment">
              {finding.data}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-pirate-dark/50 rounded-lg border border-pirate-gold">
        <h4 className="text-pirate-gold mb-2">Digital Security Tip:</h4>
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
