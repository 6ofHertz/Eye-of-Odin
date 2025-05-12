
import React from 'react';
import { Ship, Flag, FlagTriangleRight, Sword, Skull } from 'lucide-react';

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
    <div className="relative h-60 w-full overflow-hidden my-8">
      {/* Ocean background */}
      <div className={`ocean ${exposureLevel} w-full h-32 bottom-0 left-0`}></div>
      
      {/* Ship with different animations based on exposure level */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className={`ship ${exposureLevel} flex flex-col items-center`}>
          {exposureLevel === 'high' && (
            <div className="absolute -top-12 right-0">
              <Skull className="w-8 h-8 text-pirate-gold" />
            </div>
          )}
          
          <div className="relative">
            <Ship className="w-20 h-20 text-pirate-straw" />
            <div className="absolute top-3 left-10">
              {exposureLevel === 'low' && (
                <Flag className="w-6 h-6 text-pirate-gold" />
              )}
              {exposureLevel === 'medium' && (
                <FlagTriangleRight className="w-6 h-6 text-pirate-red" />
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
            ? 'bg-green-500 text-white' 
            : exposureLevel === 'medium'
              ? 'bg-yellow-500 text-black'
              : 'bg-red-600 text-white animate-pulse'
        }`}>
          {exposureLevel === 'low' && 'Calm Seas (Low Exposure)'}
          {exposureLevel === 'medium' && 'Stormy Seas (Medium Exposure)'}
          {exposureLevel === 'high' && 'Pirate Attack! (High Exposure)'}
        </div>
      </div>
      
      {/* Additional effects based on exposure level */}
      {exposureLevel === 'medium' && (
        <>
          <div className="absolute top-10 left-1/4 animate-bounce opacity-70">
            <div className="w-6 h-6 bg-blue-300 rounded-full"></div>
          </div>
          <div className="absolute top-20 right-1/3 animate-bounce opacity-70">
            <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
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
