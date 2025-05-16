
import React from 'react';
import { ScanResult, Finding } from '@/components/ScanForm';
import { Shield, AlertTriangle, Check, Search, Globe, AlertCircle, Eye, Database, Lock } from 'lucide-react'; // Import Lock icon
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface ScanResultsProps {
  result: ScanResult | null;
}

const ScanResults: React.FC<ScanResultsProps> = ({ result }) => {
  if (!result) return null;
  
  const exposureIcons = {
    'low': <Check className="w-5 h-5 text-emerald-500" />,
    'medium': <AlertCircle className="w-5 h-5 text-violet-500" />,
    'high': <AlertTriangle className="w-5 h-5 text-rose-500" />
  };
  
  const exposureColors = {
    'low': 'bg-emerald-900/30 text-emerald-400 border-emerald-600/50',
    'medium': 'bg-violet-900/30 text-violet-400 border-violet-600/50',
    'high': 'bg-rose-900/30 text-rose-400 border-rose-600/50'
  };
  
  const exposureDescriptions = {
    'low': 'Your digital footprint appears to be minimal. Keep up the good privacy practices!',
    'medium': 'Some personal information is publicly available. Consider reviewing your privacy settings.',
    'high': 'Significant personal data was found. We recommend taking immediate action to secure your digital presence.'
  };
  
  const hasBreachFindings = result.findings.some(finding => finding.breach);
  const hasNonBreachFindings = result.findings.some(finding => !finding.breach);

  if (result.error) {
    return (
      <div className="w-full max-w-md mx-auto my-8 animate-fade-in">
        <Card className="border-rose-500 bg-rose-900/20 text-rose-400 shadow-xl rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rose-400"><AlertCircle className="w-5 h-5" aria-label="Error icon"/> Scan Failed</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{result.error}</p>
          </CardContent>
        </Card>
      </div>);
  return (
    <div className="w-full max-w-4xl mx-auto my-8 animate-fade-in">
      <Card className="overflow-hidden border-0 shadow-xl rounded-3xl bg-slate-800 border border-slate-700">
        <div className={`p-6 ${
          result.exposureLevel === 'low' ? 'bg-emerald-900/20' :
          result.exposureLevel === 'medium' ? 'bg-violet-900/20' : 'bg-rose-900/20'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                result.exposureLevel === 'low' ? 'bg-emerald-900/50' :
                result.exposureLevel === 'medium' ? 'bg-violet-900/50' : 'bg-rose-900/50'
              }`}>
                <Eye className={`w-5 h-5 ${
                  result.exposureLevel === 'low' ? 'text-emerald-400' : result.error ? 'text-rose-400' : // Keep existing logic, add error color
                  result.exposureLevel === 'medium' ? 'text-violet-400' : 'text-rose-400'
                }`} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-slate-200">Digital Footprint Report</h2>
                <div className={`text-sm font-medium mt-1 inline-block px-3 py-1 rounded-full border ${exposureColors[result.exposureLevel]}`}>
                  {result.exposureLevel.charAt(0).toUpperCase() + result.exposureLevel.slice(1)} Exposure
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Scanned Input</div>
              <div className="font-mono bg-slate-900/80 px-3 py-1 rounded border border-slate-700 text-slate-300">
                {result.input}
              </div>
            </div>
          </div>
          
          <p className="mt-4 text-slate-300">
            {exposureDescriptions[result.exposureLevel]}
          </p>
        </div>
        
        {/* Section for Breaches */}
        {hasBreachFindings && (
          <CardContent className="p-6 border-t border-slate-700">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3 text-rose-500">
                <AlertTriangle className="w-5 h-5" aria-label="Data breach warning icon"/>
                <h3 className="text-lg font-medium text-slate-200">Data Breaches Found</h3>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                {result.findings
                  .filter(finding => finding.breach)
                  .map((finding, index) => (
                    <Card key={index} className="border bg-slate-700 border-slate-600 shadow-md">
                      <CardHeader className="pb-2 border-b border-slate-600/50" aria-label={`Details for breach: ${finding.breach!.Name}`}>
                        <CardTitle className="text-slate-300 text-sm flex items-center gap-2">
                          <Lock className="w-4 h-4 text-rose-500" />
                          {finding.breach!.Name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-3 text-slate-400 text-sm space-y-1">
                        <p><strong>Domain:</strong> {finding.breach!.Domain}</p>
                        <p><strong>Breach Date:</strong> {finding.breach!.BreachDate}</p>
                        <p><strong>Compromised Data:</strong> {finding.breach!.DataClasses.join(', ')}</p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </CardContent>
        )}

        {(hasBreachFindings || hasNonBreachFindings) && ( // Only show this CardContent if there are any findings
            
            <div className="flex flex-wrap gap-2">
              {result.sources.map((source, index) => (
                <span 
                  key={index} 
                  className="bg-slate-700 px-3 py-1 rounded-full text-sm border border-slate-600 text-slate-300"
                >
                  {source}
                </span>
              ))}
            </div>
          </div>
          
          {/* Findings section for non-breach findings */}
          {hasNonBreachFindings && (
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-violet-500" aria-label="Search results icon"/>
              <h3 className="text-lg font-medium text-slate-200">Search Findings</h3> {/* Changed label for clarity */}
            </div> // Changed label for clarity
          )}
            
            <div className="grid gap-4 md:grid-cols-2">
              {result.findings
                .filter(finding => !finding.breach) // Filter out breach findings
                .map((finding, index) => (
                  <Card key={index} className="border bg-slate-700 border-slate-600 shadow-md">
                    <CardHeader className="pb-2 border-b border-slate-600/50">
                      <CardTitle className="text-slate-300 text-sm flex items-center gap-2" aria-label={`Finding from: ${finding.source}`}>
                        <Database className="w-4 h-4 text-violet-500" />
                        {finding.source}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-3 text-slate-400 text-sm">
                      {finding.data}
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 p-6 bg-slate-800 rounded-2xl border border-slate-700 shadow-lg">
        <h4 className="text-violet-500 mb-3 flex items-center gap-2 font-medium" aria-label="Privacy recommendation section">
          <Shield className="w-5 h-5" />
          Privacy Recommendation:
        </h4>
        <p className="text-slate-300">
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
