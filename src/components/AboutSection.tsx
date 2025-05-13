
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, Globe, Lock, Eye, Database } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Eye className="w-8 h-8 text-amber-500" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-slate-200">About Eye of Odin</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          See All, Know All, Secure All - Our platform helps you understand your digital exposure and take control of your online privacy
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardHeader className="border-b border-slate-700">
            <CardTitle className="text-slate-200 flex items-center gap-2">
              <Search className="text-amber-500" />
              What is OSINT?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-slate-400">
            <p>
              OSINT (Open Source Intelligence) refers to information collected from publicly available sources,
              including social media, websites, data breaches, and public records. The Eye of Odin Scanner
              helps you discover what information about you is publicly accessible online.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardHeader className="border-b border-slate-700">
            <CardTitle className="text-slate-200 flex items-center gap-2">
              <Shield className="text-amber-500" />
              Why Digital Privacy Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-slate-400">
            <p>
              Your digital footprint can reveal more about you than you might realize. Employers, criminals, and 
              data brokers all have access to this information. Our tool helps you understand what data is exposed
              so you can take steps to protect your privacy and security online.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardHeader className="border-b border-slate-700">
            <CardTitle className="text-slate-200 flex items-center gap-2">
              <Globe className="text-amber-500" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-slate-400">
            <ol className="list-decimal list-inside space-y-3">
              <li className="flex items-start">
                <span className="bg-slate-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-slate-600 text-sm text-amber-500">1</span>
                <span><span className="font-medium text-slate-300">Enter your information:</span> Provide a username/handle, email address, or name.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-slate-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-slate-600 text-sm text-amber-500">2</span>
                <span><span className="font-medium text-slate-300">Scan digital sources:</span> Our system searches across various public sources to find your digital footprint.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-slate-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-slate-600 text-sm text-amber-500">3</span>
                <span><span className="font-medium text-slate-300">Review your report:</span> See what information is publicly available and your exposure level.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-slate-700 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-slate-600 text-sm text-amber-500">4</span>
                <span><span className="font-medium text-slate-300">Take action:</span> Use our recommendations to better protect your online privacy.</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 p-8 bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl border border-slate-600 text-center shadow-lg">
        <Lock className="w-12 h-12 text-amber-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-slate-200">Privacy Commitment</h3>
        <p className="text-slate-400 max-w-2xl mx-auto">
          We don't store your search results or personal data. The Eye of Odin is designed to educate and empower you to take control of your digital privacy.
        </p>
      </div>
      
      <div className="mt-12">
        <Card className="bg-slate-800 border-slate-700 shadow-lg">
          <CardHeader className="border-b border-slate-700">
            <CardTitle className="text-slate-200 flex items-center gap-2">
              <Database className="text-amber-500" />
              Connecting to Your Database
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-slate-400">
            <p className="mb-4">
              For organizations and security professionals, The Eye of Odin can connect to your existing database systems to provide comprehensive security monitoring and reporting.
            </p>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 font-mono text-sm text-slate-300">
              <p># Example database connection configuration</p>
              <p className="text-amber-500">eye_of_odin_config = &#123;</p>
              <p>&nbsp;&nbsp;"db_type": "PostgreSQL",</p>
              <p>&nbsp;&nbsp;"connection_string": "postgresql://username:password@host:port/database",</p>
              <p>&nbsp;&nbsp;"api_key": "your_api_key_here",</p>
              <p>&nbsp;&nbsp;"scan_frequency": "daily"</p>
              <p className="text-amber-500">&#125;</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-10 text-sm text-slate-500">
        <p>Eye of Odin is an information security project for educational purposes only.</p>
        <p className="mt-1">Created with the power of Odin's vision to keep your digital identity secure</p>
      </div>
    </section>
  );
};

export default AboutSection;
