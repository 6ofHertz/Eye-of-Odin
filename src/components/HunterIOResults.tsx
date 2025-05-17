import React from 'react';
import { CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

interface HunterIOResultsProps {
  domainSearchResults: any;
  emailVerificationResults: { [key: string]: any };
}

const HunterIOResults: React.FC<HunterIOResultsProps> = ({ domainSearchResults, emailVerificationResults }) => {
  if (!domainSearchResults || !domainSearchResults.data || !domainSearchResults.data.emails) {
    return null;
  }

  return (
    <CardContent className={`p-6 border-t border-slate-700`}>
      <div className="flex items-center gap-2 mb-3">
        <Search className="w-5 h-5 text-blue-500" aria-label="Hunter.io results icon" />
        <h3 className="text-lg font-medium text-slate-200">Hunter.io Email Findings</h3>
      </div>
      <div className="grid gap-3">
        {domainSearchResults.data.emails.map((emailInfo: any, index: number) => (
          <div key={index} className="flex items-center justify-between text-slate-300 text-sm bg-slate-700 px-4 py-2 rounded-md border border-slate-600">
            <span>{emailInfo.value}</span>
            {emailVerificationResults[emailInfo.value] && (
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                emailVerificationResults[emailInfo.value].data.result === 'deliverable' ? 'bg-emerald-900/50 text-emerald-400' :
                emailVerificationResults[emailInfo.value].data.result === 'undeliverable' ? 'bg-rose-900/50 text-rose-400' :
                'bg-yellow-900/50 text-yellow-400'
              }`}>
                {emailVerificationResults[emailInfo.value].data.result.charAt(0).toUpperCase() + emailVerificationResults[emailInfo.value].data.result.slice(1)}
              </span>
            )}
          </div>
        ))}
      </div>
    </CardContent>
  );
};

export default HunterIOResults;