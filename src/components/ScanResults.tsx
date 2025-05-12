
import React from 'react';
import { ScanResult } from './ScanForm';
import { Shield, AlertTriangle, Check, Search, Globe, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ScanResultsProps {
  result: ScanResult | null;
}

const ScanResults: React.FC<ScanResultsProps> = ({ result }) => {
  if (!result) return null;
  
  const exposureIcons = {
    'low': <Check className="w-5 h-5 text-emerald-600" />,
    'medium': <AlertCircle className="w-5 h-5 text-amber-600" />,
    'high': <AlertTriangle className="w-5 h-5 text-rose-600" />
  };
  
  const exposureColors = {
    'low': 'bg-emerald-100 text-emerald-800',
    'medium': 'bg-amber-100 text-amber-800',
    'high': 'bg-rose-100 text-rose-800'
  };
  
  const exposureDescriptions = {
    'low': 'Your digital footprint appears to be minimal. Keep up the good privacy practices!',
    'medium': 'Some personal information is publicly available. Consider reviewing your privacy settings.',
    'high': 'Significant personal data was found. We recommend taking immediate action to secure your digital presence.'
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto my-8 animate-fade-in">
      <Card className="overflow-hidden border-0 shadow-lg rounded-3xl">
        <div className={`p-6 ${
          result.exposureLevel === 'low' ? 'bg-emerald-50' :
          result.exposureLevel === 'medium' ? 'bg-amber-50' : 'bg-rose-50'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                result.exposureLevel === 'low' ? 'bg-emerald-200' :
                result.exposureLevel === 'medium' ? 'bg-amber-200' : 'bg-rose-200'
              }`}>
                {exposureIcons[result.exposureLevel]}
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Digital Footprint Report</h2>
                <div className={`text-sm font-medium mt-1 inline-block px-3 py-1 rounded-full ${exposureColors[result.exposureLevel]}`}>
                  {result.exposureLevel.charAt(0).toUpperCase() + result.exposureLevel.slice(1)} Exposure
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-theme-foreground/60">Scanned Input</div>
              <div className="font-mono bg-white/80 px-3 py-1 rounded border border-theme-border/30 text-theme-foreground">
                {result.input}
              </div>
            </div>
          </div>
          
          <p className="mt-4 text-theme-foreground/80">
            {exposureDescriptions[result.exposureLevel]}
          </p>
        </div>
        
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-theme-primary" />
              <h3 className="text-lg font-medium">Digital Presence</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {result.sources.map((source, index) => (
                <span 
                  key={index} 
                  className="bg-theme-background px-3 py-1 rounded-full text-sm border border-theme-border/40"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-theme-primary" />
              <h3 className="text-lg font-medium">Findings</h3>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {result.findings.map((finding, index) => (
                <Card key={index} className="border border-theme-border/30">
                  <CardHeader className="pb-2 border-b border-theme-border/10">
                    <CardTitle className="text-theme-foreground/80 text-sm flex items-center gap-2">
                      <Shield className="w-4 h-4 text-theme-primary" />
                      {finding.source}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-3 text-theme-foreground/80 text-sm">
                    {finding.data}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 p-6 bg-white rounded-2xl border border-theme-border/30 shadow-sm">
        <h4 className="text-theme-primary mb-3 flex items-center gap-2 font-medium">
          <Shield className="w-5 h-5" />
          Privacy Recommendation:
        </h4>
        <p className="text-theme-foreground/80">
          {result.exposureLevel === 'low' 
            ? "Your digital footprint seems minimal. Continue practicing good security habits like using unique passwords and limiting the personal information you share online."
            : result.exposureLevel === 'medium'
              ? "Consider reviewing your privacy settings on social media platforms and checking for data breaches that may have exposed your information. Enable two-factor authentication where possible."
              : "Your digital exposure is significant. Take immediate steps to secure your accounts, update passwords, remove sensitive information from public websites, and consider using privacy-focused services."
          }
        </p>
      </div>
    </div>
  );
};

export default ScanResults;
