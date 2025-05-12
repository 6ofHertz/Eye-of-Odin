
import React, { useState } from 'react';
import { Anchor } from 'lucide-react';
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

  return (
    <div className="w-full max-w-md mx-auto bounty-poster">
      <h2 className="text-xl text-pirate-navy font-bold mb-4 text-center">
        Scan Your Digital Bounty
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-2">
          <label className={`flex-1 text-center p-2 rounded-md border cursor-pointer 
            ${scanType === 'handle' ? 'bg-pirate-gold text-pirate-dark border-pirate-dark' : 
            'bg-pirate-parchment text-pirate-navy border-pirate-gold'}`}
            onClick={() => setScanType('handle')}>
            Handle
          </label>
          <label className={`flex-1 text-center p-2 rounded-md border cursor-pointer 
            ${scanType === 'email' ? 'bg-pirate-gold text-pirate-dark border-pirate-dark' : 
            'bg-pirate-parchment text-pirate-navy border-pirate-gold'}`}
            onClick={() => setScanType('email')}>
            Email
          </label>
          <label className={`flex-1 text-center p-2 rounded-md border cursor-pointer 
            ${scanType === 'name' ? 'bg-pirate-gold text-pirate-dark border-pirate-dark' : 
            'bg-pirate-parchment text-pirate-navy border-pirate-gold'}`}
            onClick={() => setScanType('name')}>
            Name
          </label>
        </div>
        
        <Input
          placeholder={`Enter your ${scanType}...`}
          className="bg-white text-pirate-dark"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        <Button 
          type="submit" 
          className="pirate-button w-full"
          disabled={isScanning}
        >
          {isScanning ? (
            <>
              <span className="animate-pulse">Scanning the seas...</span>
              <Anchor className="ml-2 animate-spin" />
            </>
          ) : (
            <>
              <span>Hunt for Bounty</span>
              <Anchor className="ml-2" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ScanForm;
