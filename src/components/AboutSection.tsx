
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, Globe, Lock, Eye, Database, Scroll } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Eye className="w-8 h-8 text-violet-500 eye-glow" />
        </div>
        <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-slate-200">About Eye of Odin</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          See All, Know All, Secure All - Our platform helps you understand your digital exposure and take control of your online privacy
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg greek-column">
          <CardHeader className="border-b border-slate-200 dark:border-slate-700">
            <CardTitle className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Search className="text-violet-500" />
              What is OSINT?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-slate-600 dark:text-slate-400">
            <p>
              OSINT (Open Source Intelligence) refers to information collected from publicly available sources,
              including social media, websites, data breaches, and public records. The Eye of Odin Scanner
              helps you discover what information about you is publicly accessible online.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg greek-column">
          <CardHeader className="border-b border-slate-200 dark:border-slate-700">
            <CardTitle className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Shield className="text-violet-500" />
              Why Digital Privacy Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-slate-600 dark:text-slate-400">
            <p>
              Your digital footprint can reveal more about you than you might realize. Employers, criminals, and 
              data brokers all have access to this information. Our tool helps you understand what data is exposed
              so you can take steps to protect your privacy and security online.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg greek-meander">
          <CardHeader className="border-b border-slate-200 dark:border-slate-700">
            <CardTitle className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Scroll className="text-violet-500" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-slate-600 dark:text-slate-400">
            <ol className="list-decimal list-inside space-y-3">
              <li className="flex items-start">
                <span className="bg-violet-50 dark:bg-violet-900/20 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-violet-200 dark:border-violet-700/50 text-sm text-violet-500">1</span>
                <span><span className="font-medium text-slate-700 dark:text-slate-300">Enter your information:</span> Provide a username/handle, email address, or name.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-violet-50 dark:bg-violet-900/20 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-violet-200 dark:border-violet-700/50 text-sm text-violet-500">2</span>
                <span><span className="font-medium text-slate-700 dark:text-slate-300">Scan digital sources:</span> Our system searches across various public sources to find your digital footprint.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-violet-50 dark:bg-violet-900/20 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-violet-200 dark:border-violet-700/50 text-sm text-violet-500">3</span>
                <span><span className="font-medium text-slate-700 dark:text-slate-300">Review your report:</span> See what information is publicly available and your exposure level.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-violet-50 dark:bg-violet-900/20 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-violet-200 dark:border-violet-700/50 text-sm text-violet-500">4</span>
                <span><span className="font-medium text-slate-700 dark:text-slate-300">Take action:</span> Use our recommendations to better protect your online privacy.</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 p-8 bg-gradient-to-r from-white to-violet-50 dark:from-slate-800 dark:to-slate-800/80 rounded-3xl border border-violet-100 dark:border-violet-900/30 text-center shadow-lg">
        <Lock className="w-12 h-12 text-violet-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-200">Privacy Commitment</h3>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          We don't store your search results or personal data. The Eye of Odin is designed to educate and empower you to take control of your digital privacy.
        </p>
      </div>
      
      <div className="mt-12">
        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg greek-column">
          <CardHeader className="border-b border-slate-200 dark:border-slate-700">
            <CardTitle className="text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Database className="text-violet-500" />
              Firebase Integration
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-slate-600 dark:text-slate-400">
            <p className="mb-4">
              For organizations and security professionals, The Eye of Odin integrates with Firebase to provide comprehensive security monitoring and reporting.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-700 font-mono text-sm text-slate-700 dark:text-slate-300">
              <p>// Example Firebase configuration</p>
              <p className="text-violet-500">const firebaseConfig = &#123;</p>
              <p>&nbsp;&nbsp;"apiKey": "<span className="text-green-500">your_api_key_here</span>",</p>
              <p>&nbsp;&nbsp;"authDomain": "eye-of-odin.firebaseapp.com",</p>
              <p>&nbsp;&nbsp;"projectId": "eye-of-odin",</p>
              <p>&nbsp;&nbsp;"storageBucket": "eye-of-odin.appspot.com",</p>
              <p>&nbsp;&nbsp;"messagingSenderId": "123456789012",</p>
              <p>&nbsp;&nbsp;"appId": "1:123456789012:web:abcdef1234567890"</p>
              <p className="text-violet-500">&#125;;</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-10 text-sm text-slate-500 dark:text-slate-500">
        <p>Eye of Odin is an information security project for educational purposes only.</p>
        <p className="mt-1">Created with the wisdom of Odin to keep your digital identity secure</p>
      </div>
    </section>
  );
};

export default AboutSection;
