
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PirateFlag, Anchor, TreasureChest } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3">
        <PirateFlag className="w-8 h-8" />
        About Digital Bounty Board
        <PirateFlag className="w-8 h-8" />
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-pirate-dark border border-pirate-gold">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Anchor className="text-pirate-gold" />
              What is OSINT?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              OSINT (Open Source Intelligence) refers to information collected from publicly available sources,
              including social media, websites, data breaches, and public records. Our Digital Bounty Board
              helps you discover what information about you is publicly accessible online.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-pirate-dark border border-pirate-gold">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TreasureChest className="text-pirate-gold" />
              Why Digital Bounty?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Just like pirates of old had bounties on their heads, your digital presence has a "bounty" of
              information available. Our tool helps you understand what digital "treasures" (your personal data)
              are available for anyone to find, helping you take control of your online privacy.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-8">
        <Card className="bg-pirate-dark border border-pirate-gold">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <span className="font-bold">Enter your information:</span> Provide a username/handle, email address, or name.
              </li>
              <li>
                <span className="font-bold">Scan the digital seas:</span> Our system searches across various public sources.
              </li>
              <li>
                <span className="font-bold">View your bounty:</span> See what information is publicly available and your exposure level.
              </li>
              <li>
                <span className="font-bold">Take action:</span> Use our recommendations to better protect your online privacy.
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-10 text-sm text-pirate-parchment/70">
        <p>Digital Bounty Board is a project for educational purposes only.</p>
        <p>Created for the Digital Fair with ❤️ by Lovable</p>
      </div>
    </section>
  );
};

export default AboutSection;
