
import React, { useState } from 'react';
import Header from '@/components/Header';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import StatsCard from '@/components/StatsCard';
import DashboardCharts from '@/components/DashboardCharts';
import AdminPanel, { ScanEntry } from '@/components/AdminPanel';
import { Database, Eye, AlertTriangle, Shield, Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Sample data - in a real app this would come from an API
const initialScanData: ScanEntry[] = [
  {
    id: 'scan-1',
    input: 'john.doe@example.com',
    exposureLevel: 'high',
    timestamp: '2025-05-10T14:30:00Z',
    findings: 12,
    sources: ['Social Media', 'Data Breach', 'Public Records']
  },
  {
    id: 'scan-2',
    input: 'smith@company.org',
    exposureLevel: 'medium',
    timestamp: '2025-05-09T10:15:00Z',
    findings: 5,
    sources: ['Corporate Website', 'Forums']
  },
  {
    id: 'scan-3',
    input: 'sarah85',
    exposureLevel: 'low',
    timestamp: '2025-05-08T16:45:00Z',
    findings: 2,
    sources: ['Social Media']
  },
  {
    id: 'scan-4',
    input: 'tech_company_inc',
    exposureLevel: 'high',
    timestamp: '2025-05-07T09:20:00Z',
    findings: 15,
    sources: ['Corporate Website', 'News Articles', 'Public Records', 'Social Media']
  },
  {
    id: 'scan-5',
    input: 'mike.johnson@mail.net',
    exposureLevel: 'medium',
    timestamp: '2025-05-06T13:10:00Z',
    findings: 8,
    sources: ['Data Breach', 'Forums']
  }
];

const Dashboard = () => {
  const [scanData, setScanData] = useState<ScanEntry[]>(initialScanData);

  // Calculate statistics
  const totalScans = scanData.length;
  const highExposureCount = scanData.filter(scan => scan.exposureLevel === 'high').length;
  const mediumExposureCount = scanData.filter(scan => scan.exposureLevel === 'medium').length;
  const lowExposureCount = scanData.filter(scan => scan.exposureLevel === 'low').length;
  
  // Calculate findings data for charts
  const totalFindings = scanData.reduce((sum, scan) => sum + scan.findings, 0);
  
  // Data for pie chart
  const exposureData = [
    { name: 'Low', value: lowExposureCount, fill: '#10B981' },
    { name: 'Medium', value: mediumExposureCount, fill: '#8B5CF6' },
    { name: 'High', value: highExposureCount, fill: '#EF4444' }
  ];
  
  // Data for bar chart - count findings by source
  const sourceCounts: { [key: string]: number } = {};
  scanData.forEach(scan => {
    scan.sources.forEach(source => {
      if (!sourceCounts[source]) {
        sourceCounts[source] = 1;
      } else {
        sourceCounts[source]++;
      }
    });
  });
  
  const findingsData = Object.keys(sourceCounts).map(key => ({
    name: key,
    count: sourceCounts[key]
  }));

  // CRUD operations
  const handleDeleteScan = (id: string) => {
    setScanData(prevData => prevData.filter(entry => entry.id !== id));
  };

  const handleUpdateScan = (id: string, updatedData: Partial<ScanEntry>) => {
    setScanData(prevData => 
      prevData.map(entry => 
        entry.id === id ? { ...entry, ...updatedData } : entry
      )
    );
  };

  const handleAddScan = (newData: Partial<ScanEntry>) => {
    if (!newData.id) return;
    setScanData(prevData => [...prevData, newData as ScanEntry]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-500 to-purple-700 dark:from-violet-400 dark:to-purple-600 text-transparent bg-clip-text">
          Scan Analytics Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard 
            title="Total Scans"
            value={totalScans}
            icon={<Search className="w-4 h-4 text-violet-600" />}
            trend={{ value: 12, positive: true }}
          />
          
          <StatsCard 
            title="High Exposure"
            value={highExposureCount}
            icon={<AlertTriangle className="w-4 h-4 text-rose-500" />}
            className="border-l-4 border-rose-500"
            trend={{ value: 5, positive: false }}
          />
          
          <StatsCard 
            title="Medium Exposure"
            value={mediumExposureCount}
            icon={<Eye className="w-4 h-4 text-violet-500" />}
            className="border-l-4 border-violet-500"
            trend={{ value: 8, positive: true }}
          />
          
          <StatsCard 
            title="Low Exposure" 
            value={lowExposureCount}
            icon={<Shield className="w-4 h-4 text-emerald-500" />}
            className="border-l-4 border-emerald-500"
            trend={{ value: 15, positive: true }}
          />
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="admin">Admin Panel</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <DashboardCharts exposureData={exposureData} findingsData={findingsData} />
            
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-violet-500" />
                <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Recent Findings</h3>
              </div>
              
              <ScrollArea className="h-64 rounded-md">
                <div className="space-y-4">
                  {scanData.map(scan => (
                    <div 
                      key={scan.id}
                      className="p-4 border rounded-lg bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{scan.input}</span>
                        <div className="flex items-center gap-2">
                          {scan.exposureLevel === 'high' && <AlertTriangle className="w-4 h-4 text-rose-500" />}
                          {scan.exposureLevel === 'medium' && <Eye className="w-4 h-4 text-violet-500" />}
                          {scan.exposureLevel === 'low' && <Shield className="w-4 h-4 text-emerald-500" />}
                          <span className="text-sm">
                            {new Date(scan.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        Found in: {scan.sources.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          
          <TabsContent value="admin">
            <AdminPanel 
              scanData={scanData}
              onDeleteScan={handleDeleteScan}
              onUpdateScan={handleUpdateScan}
              onAddScan={handleAddScan}
            />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="py-6 px-4 text-center text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base">© 2025 Eye of Odin</p>
          <p className="text-sm md:text-base italic">See All, Know All, Secure All</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/eye-of-odin/scanner" 
              className="text-slate-500 hover:text-violet-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://github.com/eye-of-odin/scanner/issues" 
              className="text-slate-500 hover:text-violet-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
