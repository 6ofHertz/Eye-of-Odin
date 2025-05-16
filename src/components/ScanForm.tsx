
import React, { useState } from 'react';
import { Search, User, Mail, AtSign, Loader, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { getBreachesForAccount, Breach } from '@/utils/hibp.ts';
import { searchWeb } from '@/utils/googleCustomSearch'; // Import searchWeb

type ScanType = 'name' | 'handle' | 'email';

// Define a new interface for findings that can be either breach data or general data
interface Finding {
  source: string;
  data?: string; // Data for non-breach findings
  breach?: Breach; // Breach object for breach findings
}

interface ScanFormProps {
  onScanComplete: (result: ScanResult | null) => void; // onScanComplete can now accept null
}


// Update ScanResult interface to use the new Finding type
interface ScanFormProps {
  onScanComplete: (result: ScanResult) => void;
}

export interface ScanResult {
  input: string;
  inputType: ScanType;
  exposureLevel: 'low' | 'medium' | 'high';
  sources: string[];
  findings: Finding[]; // Use the new Finding interface
  error?: string; // Add an optional error property
}

const ScanForm: React.FC<ScanFormProps> = ({ onScanComplete }) => {
  const [input, setInput] = useState('');
  const [scanType, setScanType] = useState<ScanType>('handle');
  const [isScanning, setIsScanning] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Scanning...');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter a value to scan.",
        variant: "destructive"
      });
      return;
    }

    setIsScanning(true);
    setLoadingMessage('Starting scan...');

    // Clear previous results or errors
    onScanComplete(null);

    const performScan = async () => {
      try {
        let scanResult: ScanResult;

        if (scanType === 'email') {
          setLoadingMessage('Scanning Have I Been Pwned...');
          const breaches = await getBreachesForAccount(input);

          // Determine exposure level based on the number of breaches
          let exposureLevel: 'low' | 'medium' | 'high';
          if (breaches === null || breaches.length === 0) { // Treat null like no breaches for exposure
            exposureLevel = 'low';
          } else if (breaches.length <= 5) {
            exposureLevel = 'medium';
          } else {
            exposureLevel = 'high';
          }

          scanResult = {
            input,
            inputType: scanType,
            exposureLevel,

            sources: breaches ? breaches.map(b => b.Title) : [], // Use breach titles as sources
            findings: breaches ? breaches.map(b => ({ source: b.Title, breach: b })) : [], // Store the full breach object
          } as ScanResult; // Cast to ScanResult to satisfy type checking

        } else {
          // --- Name and Handle Scans (Google Custom Search) ---
          setLoadingMessage(`Searching the web for ${scanType}...`);
          const searchResults = await searchWeb(input);

          const findings: { source: string; data: string }[] = [];
          const sources: string[] = [];
          let highRiskCount = 0;
          let mediumRiskCount = 0;

          // Define keywords and sensitive sites (you can expand these lists)
          const highRiskKeywords = ['breach', 'exposed', 'doxed', 'pastebin', 'forum', 'leak', 'sensitive data', 'credentials', 'password', 'ssn', 'social security number', 'credit card'];
          const sensitiveSites = ['pastebin.com', 'mega.nz', 'anonfiles.com']; // Add other relevant sites

          if (searchResults && searchResults.length > 0) {
            sources.push('Google Search');
            searchResults.forEach(item => {
              // Basic keyword and site check for risk assessment
              let isHighRisk = false;
              let isMediumRisk = false;

              const titleAndSnippet = `${item.title} ${item.snippet || ''}`.toLowerCase();

              // Check for high-risk keywords
              if (highRiskKeywords.some(keyword => titleAndSnippet.includes(keyword))) {
                isHighRisk = true;
                highRiskCount++;
              }

              // Check for sensitive sites
              if (sensitiveSites.some(site => item.link.includes(site))) {
                isHighRisk = true; // Treat sensitive site links as high risk
                highRiskCount++;
              }

              // If not high risk, check for general mentions on social media or other platforms (medium risk)
              const socialMediaKeywords = ['twitter.com', 'facebook.com', 'linkedin.com', 'instagram.com', 'reddit.com'];
               if (!isHighRisk && socialMediaKeywords.some(keyword => item.link.includes(keyword))) {
                 isMediumRisk = true;
                 mediumRiskCount++;
               } else if (!isHighRisk && (item.title || item.snippet)) {
                // Any other result that's not high risk is considered medium risk for now if it has content
                 isMediumRisk = true;
                 mediumRiskCount++;
               }

              findings.push({
                source: item.title || 'Google Search', // Use title as source if available
                data: `${item.title} - ${item.link}` // You can format this data as needed
              });
            });

            // Determine exposure level based on risk counts
            let exposureLevel: 'low' | 'medium' | 'high';
            if (highRiskCount > 0) {
              exposureLevel = 'high';
            } else if (mediumRiskCount > 0) {
              exposureLevel = 'medium';
            } else {
              exposureLevel = 'low';
            }

            scanResult = {
                input,
                inputType: scanType,
                exposureLevel,
                sources,
                findings,
              } as ScanResult; // Cast to ScanResult

          } else {
             // No search results found
             scanResult = {
                input,
                inputType: scanType,
                exposureLevel: 'low',
                sources: ['Google Search'],
                findings: [{ source: 'Google Search', data: 'No relevant public mentions found.' }], // Still use data for this case
              };
          }
        }

        onScanComplete(scanResult);
        setIsScanning(false);
        setLoadingMessage('Scan Complete');
        toast({
          title: "Scan Complete",
          description: `Found information about ${input} with ${scanResult.exposureLevel} exposure level.`,
        });

      } catch (error: any) {
        console.error("Scan failed:", error);
        setIsScanning(false);
        setLoadingMessage('Scan Failed');
        onScanComplete({ // Provide a ScanResult with an error
          input,
          inputType: scanType,
          exposureLevel: 'low', // Default to low exposure on error
          sources: [],
          findings: [],
          error: error.message || "An unknown error occurred during the scan."
        });

      }
    };

    performScan();
  };

  const scanTypeIcons = {
    handle: <AtSign className="w-5 h-5" />,
    email: <Mail className="w-5 h-5" />,
    name: <User className="w-5 h-5" />
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-3 mb-2">
          {(Object.keys(scanTypeIcons) as ScanType[]).map((type) => (
            <label 
              key={type}
              className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl cursor-pointer transition-all border-2 
                ${scanType === type 
 ? 'bg-violet-500/10 border-violet-500 text-violet-500 shadow-md' 
                  : 'bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'}`}
              onClick={() => setScanType(type)}
            >
              {scanTypeIcons[type]}
              <span className="capitalize text-sm font-medium">{type}</span>
            </label>
          ))}
        </div>
        
        <div className="relative">
          <Input
            placeholder={`Enter your ${scanType}...`}
            className="search-input pl-12 bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 focus:border-violet-500 focus:ring-violet-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-violet-500">
            <Search className="w-5 h-5" />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 rounded-xl bg-gradient-to-r from-violet-500 to-purple-700 hover:opacity-90 transition-opacity text-white flex gap-2 font-medium"
          disabled={isScanning}
        >
          {isScanning ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>{loadingMessage}</span>
            </>
          ) : (
            <>
              <Eye className="w-5 h-5" />
              <span>Scan Digital Footprint</span>
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

export default ScanForm;
