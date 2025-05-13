
import React from 'react';
import { Eye, AlertTriangle, Shield } from 'lucide-react';

interface OdinEyeVisualizationProps {
  exposureLevel: 'low' | 'medium' | 'high' | null;
}

const OdinEyeVisualization: React.FC<OdinEyeVisualizationProps> = ({ exposureLevel }) => {
  if (!exposureLevel) {
    return (
      <div className="relative h-40 flex items-center justify-center">
        <div className="text-amber-500 text-lg">Enter your details to scan with the Eye of Odin</div>
      </div>
    );
  }

  return (
    <div className="relative h-60 w-full overflow-hidden my-8 rounded-lg bg-slate-800/50 shadow-inner">
      {/* Cosmic background with animated stars */}
      <div className="absolute inset-0 bg-slate-900 opacity-70">
        <div className="stars"></div>
      </div>
      
      {/* Central eye visualization based on exposure level */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative ${
          exposureLevel === 'low' ? 'animate-pulse-slow' : 
          exposureLevel === 'medium' ? 'animate-pulse' : 
          'animate-pulse-fast'
        }`}>
          <div className={`rounded-full w-32 h-32 flex items-center justify-center 
            ${exposureLevel === 'low' ? 'bg-emerald-900/20 border-emerald-500/40' : 
              exposureLevel === 'medium' ? 'bg-amber-900/20 border-amber-500/40' : 
              'bg-rose-900/20 border-rose-500/40'} 
            border-4 shadow-lg`}>
            <Eye className={`w-16 h-16 
              ${exposureLevel === 'low' ? 'text-emerald-400' : 
                exposureLevel === 'medium' ? 'text-amber-400' : 
                'text-rose-400'}`} />
          </div>
          
          {/* Animated rings based on exposure */}
          <div className={`absolute -inset-4 rounded-full border-2 opacity-0 
            ${exposureLevel === 'low' ? 'border-emerald-500 animate-ping-slow' : 
              exposureLevel === 'medium' ? 'border-amber-500 animate-ping' : 
              'border-rose-500 animate-ping-fast'}`}>
          </div>
          <div className={`absolute -inset-8 rounded-full border opacity-0 
            ${exposureLevel === 'low' ? 'border-emerald-500/50 animate-ping-slow delay-75' : 
              exposureLevel === 'medium' ? 'border-amber-500/50 animate-ping delay-75' : 
              'border-rose-500/50 animate-ping-fast delay-75'}`}>
          </div>
        </div>
      </div>
      
      {/* Bottom text indicator based on exposure level */}
      <div className="absolute bottom-0 left-0 right-0 text-center py-2">
        <div className={`inline-block px-4 py-1 rounded-full font-medium ${
          exposureLevel === 'low' 
            ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-700/50' 
            : exposureLevel === 'medium'
              ? 'bg-amber-900/60 text-amber-200 border border-amber-700/50'
              : 'bg-rose-900/60 text-rose-200 border border-rose-700/50 animate-pulse'
        }`}>
          {exposureLevel === 'low' && 'Protected by Odin (Low Exposure)'}
          {exposureLevel === 'medium' && 'Odin Sees Risks (Medium Exposure)'}
          {exposureLevel === 'high' && 'Odin Warns of Danger (High Exposure)'}
        </div>
      </div>
      
      {/* Additional effects based on exposure level */}
      {exposureLevel === 'medium' && (
        <div className="absolute top-6 right-1/4 animate-float opacity-70">
          <AlertTriangle className="w-6 h-6 text-amber-500/80" />
        </div>
      )}
      
      {exposureLevel === 'high' && (
        <>
          <div className="absolute top-1/4 left-1/4 animate-float">
            <AlertTriangle className="w-6 h-6 text-rose-500/80" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-float-delay">
            <AlertTriangle className="w-6 h-6 text-rose-500/80" />
          </div>
        </>
      )}
      
      {/* Shield protection indicator for low exposure */}
      {exposureLevel === 'low' && (
        <div className="absolute top-1/4 right-1/4 animate-float">
          <Shield className="w-8 h-8 text-emerald-500/80" />
        </div>
      )}
    </div>
  );
};

export default OdinEyeVisualization;
