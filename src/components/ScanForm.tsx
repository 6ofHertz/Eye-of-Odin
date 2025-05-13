
import React, { useState } from 'react';
import { Search, User, Mail, AtSign, Loader, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

type ScanType = 'name' | 'handle' | 'email';

interface ScanFormProps {
  onScanComplete: (result: ScanResult) => void;
}

export interface ScanResult {
  input: string;
  inputType: ScanType;
  exposureLevel: 'low' | 'medium' | 'high';
  sources: string[];
  findings: { source: string; data: string }[];
}

const ScanForm: React.FC<ScanFormProps> = ({ onScanComplete }) => {
  const [input, setInput] = useState('');
  const [scanType, setScanType] = useState<ScanType>('handle');
  const [isScanning, setIsScanning] = useState(false);
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

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Mock data for demonstration
      const mockResult: ScanResult = generateMockResult(input, scanType);
      
      // Call the parent component's callback with the result
      onScanComplete(mockResult);
      
      setIsScanning(false);
      
      toast({
        title: "Scan Complete",
        description: `Found information about ${input} with ${mockResult.exposureLevel} exposure level.`,
      });
    }, 2000); // Simulate 2-second scan time
  };

  const generateMockResult = (input: string, type: ScanType): ScanResult => {
    // Generate random exposure level for demonstration
    const exposureLevels: ('low' | 'medium' | 'high')[] = ['low', 'medium', 'high'];
    const randomLevel = exposureLevels[Math.floor(Math.random() * exposureLevels.length)];
    
    // Create mock sources and findings based on input type
    let sources: string[] = [];
    let findings: { source: string; data: string }[] = [];
    
    if (type === 'handle') {
      sources = ['Twitter', 'Instagram', 'GitHub', 'Reddit'];
      findings = [
        { source: 'Twitter', data: `Found account @${input} with 235 followers` },
        { source: 'GitHub', data: `Repository contributions found for user ${input}` },
      ];
    } 
    else if (type === 'email') {
      sources = ['HaveIBeenPwned', 'LinkedIn', 'Data Breach Records'];
      findings = [
        { source: 'HaveIBeenPwned', data: `Email ${input} found in 2 data breaches` },
        { source: 'LinkedIn', data: `Public profile with work history found` },
      ];
    }
    else {
      sources = ['Google', 'Public Records', 'News Articles'];
      findings = [
        { source: 'Google', data: `${Math.floor(Math.random() * 20)} search results for "${input}"` },
        { source: 'Public Records', data: `Name appears in public records database` },
      ];
    }
    
    // Add more findings for medium/high exposure
    if (randomLevel === 'medium' || randomLevel === 'high') {
      findings.push(
        { source: 'Facebook', data: 'Public profile with photos found' },
        { source: 'Forums', data: `Username ${input} found on 3 different forums` }
      );
    }
    
    if (randomLevel === 'high') {
      findings.push(
        { source: 'Data Breach', data: 'Personal information exposed in major data breach' },
        { source: 'Phone Directory', data: 'Phone number found in public directory' }
      );
    }
    
    return {
      input,
      inputType: type,
      exposureLevel: randomLevel,
      sources,
      findings,
    };
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
                  ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-md' 
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
            className="search-input pl-12 bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 focus:border-amber-500 focus:ring-amber-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-500">
            <Search className="w-5 h-5" />
          </div>
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-700 hover:opacity-90 transition-opacity text-slate-900 flex gap-2 font-medium"
          disabled={isScanning}
        >
          {isScanning ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>The Eye of Odin is scanning...</span>
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
};

export default ScanForm;
