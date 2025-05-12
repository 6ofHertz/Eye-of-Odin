
import React from 'react';
import { Ship, Anchor, Skull, Sword } from 'lucide-react';

interface ShipAnimationsProps {
  exposureLevel: 'low' | 'medium' | 'high' | null;
}

const ShipAnimations: React.FC<ShipAnimationsProps> = ({ exposureLevel }) => {
  if (!exposureLevel) {
    return (
      <div className="relative h-40 flex items-center justify-center">
        <div className="text-pirate-gold text-lg">Enter your details to scan the digital seas</div>
      </div>
    );
  }

  return (
    <div className="relative h-60 w-full overflow-hidden my-8 rounded-lg bg-pirate-ocean/30 shadow-inner">
      {/* Ocean background */}
      <div className={`ocean ${exposureLevel} w-full h-32 bottom-0 left-0 opacity-70`}></div>
      
      {/* Ship with different animations based on exposure level */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className={`ship ${exposureLevel} flex flex-col items-center`}>
          {exposureLevel === 'high' && (
            <div className="absolute -top-12 right-0">
              <Skull className="w-8 h-8 text-pirate-red" />
            </div>
          )}
          
          <div className="relative">
            <Ship className="w-20 h-20 text-pirate-parchment" />
            <div className="absolute top-3 left-10">
              {exposureLevel === 'low' && (
                <Anchor className="w-6 h-6 text-pirate-gold" />
              )}
              {exposureLevel === 'medium' && (
                <Skull className="w-6 h-6 text-pirate-gold" />
              )}
              {exposureLevel === 'high' && (
                <Sword className="w-6 h-6 text-pirate-red animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Exposure level indicator */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-2">
        <div className={`inline-block px-4 py-1 rounded-full font-bold ${
          exposureLevel === 'low' 
            ? 'bg-green-900 text-green-100' 
            : exposureLevel === 'medium'
              ? 'bg-yellow-900 text-yellow-100'
              : 'bg-red-900 text-red-100 animate-pulse'
        }`}>
          {exposureLevel === 'low' && 'Safe Waters (Low Exposure)'}
          {exposureLevel === 'medium' && 'Dangerous Waters (Medium Exposure)'}
          {exposureLevel === 'high' && 'Dead Man\'s Waters (High Exposure)'}
        </div>
      </div>
      
      {/* Additional effects based on exposure level */}
      {exposureLevel === 'medium' && (
        <>
          <div className="absolute top-10 left-1/4 animate-bounce opacity-70">
            <div className="w-6 h-6 bg-blue-800 rounded-full"></div>
          </div>
          <div className="absolute top-20 right-1/3 animate-bounce opacity-70">
            <div className="w-4 h-4 bg-blue-800 rounded-full"></div>
          </div>
        </>
      )}
      
      {exposureLevel === 'high' && (
        <>
          <div className="absolute bottom-20 left-1/4 animate-attack">
            <Skull className="w-8 h-8 text-pirate-red" />
          </div>
          <div className="absolute bottom-30 right-1/4 animate-attack">
            <Sword className="w-8 h-8 text-pirate-red" />
          </div>
        </>
      )}
    </div>
  );
};

export default ShipAnimations;
