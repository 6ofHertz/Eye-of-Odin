
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, Globe, Lock } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-5xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">About Digital Footprint Scanner</h2>
        <p className="text-theme-foreground/70 max-w-2xl mx-auto">
          Our platform helps you understand your digital exposure and take control of your online privacy
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="modern-card">
          <CardHeader className="border-b border-theme-border/10">
            <CardTitle className="flex items-center gap-2">
              <Search className="text-theme-primary" />
              What is OSINT?
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>
              OSINT (Open Source Intelligence) refers to information collected from publicly available sources,
              including social media, websites, data breaches, and public records. Our Digital Footprint Scanner
              helps you discover what information about you is publicly accessible online.
            </p>
          </CardContent>
        </Card>
        
        <Card className="modern-card">
          <CardHeader className="border-b border-theme-border/10">
            <CardTitle className="flex items-center gap-2">
              <Shield className="text-theme-primary" />
              Why Digital Privacy Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p>
              Your digital footprint can reveal more about you than you might realize. Employers, criminals, and 
              data brokers all have access to this information. Our tool helps you understand what data is exposed
              so you can take steps to protect your privacy and security online.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <Card className="modern-card">
          <CardHeader className="border-b border-theme-border/10">
            <CardTitle className="flex items-center gap-2">
              <Globe className="text-theme-primary" />
              How It Works
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ol className="list-decimal list-inside space-y-3">
              <li className="flex items-start">
                <span className="bg-theme-background rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-theme-border/40 text-sm">1</span>
                <span><span className="font-medium">Enter your information:</span> Provide a username/handle, email address, or name.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-background rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-theme-border/40 text-sm">2</span>
                <span><span className="font-medium">Scan digital sources:</span> Our system searches across various public sources to find your digital footprint.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-background rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-theme-border/40 text-sm">3</span>
                <span><span className="font-medium">Review your report:</span> See what information is publicly available and your exposure level.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-theme-background rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0 border border-theme-border/40 text-sm">4</span>
                <span><span className="font-medium">Take action:</span> Use our recommendations to better protect your online privacy.</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12 p-8 bg-gradient-to-r from-theme-primary/10 to-theme-secondary/10 rounded-3xl border border-theme-border/20 text-center">
        <Lock className="w-12 h-12 text-theme-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Privacy Commitment</h3>
        <p className="text-theme-foreground/70 max-w-2xl mx-auto">
          We don't store your search results or personal data. Our scanner is designed to educate and empower you to take control of your digital privacy.
        </p>
      </div>
      
      <div className="text-center mt-10 text-sm text-theme-foreground/50">
        <p>Digital Footprint Scanner is a project for educational purposes only.</p>
        <p className="mt-1">Created for the Digital Fair with ❤️ by Lovable</p>
      </div>
    </section>
  );
};

export default AboutSection;
