import React from 'react';
import { Finding } from '@/components/ScanForm'; // Assuming Finding interface is defined here
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Database } from 'lucide-react';

interface OtherScanFindingsProps {
  findings: Finding[];
  sources: string[]; // Assuming sources is an array of strings
}

const OtherScanFindings: React.FC<OtherScanFindingsProps> = ({ findings, sources }) => {
  const nonBreachFindings = findings.filter(finding => !finding.breach);

  if (nonBreachFindings.length === 0) {
    return null; // Don't render if there are no non-breach findings
  }

  return (
    <CardContent className={`p-6 border-t border-slate-700`}>
      <div className="flex flex-wrap gap-2 mb-4">
        {sources.map((source, index) => (
          <span key={index} className="bg-slate-700 px-3 py-1 rounded-full text-sm border border-slate-600 text-slate-300">{source}</span>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-3 mt-4">
        <Search className="w-5 h-5 text-violet-500" aria-label="Search results icon" />
        <h3 className="text-lg font-medium text-slate-200">Search Findings</h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {nonBreachFindings.map((finding, index) => (
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
    </CardContent>
  );
};

export default OtherScanFindings;