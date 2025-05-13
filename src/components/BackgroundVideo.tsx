
import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BackgroundVideoProps {
  videoSrc: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSrc }) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted={isMuted}
        playsInline
        className="absolute w-full h-full object-cover opacity-30 dark:opacity-20"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="fixed bottom-4 left-4 flex gap-2 z-10">
        <Button 
          variant="outline" 
          size="icon" 
          className="backdrop-blur-md bg-black/20 border-white/20 hover:bg-black/40"
          onClick={toggleMute}
        >
          {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
        </Button>
        <Button 
          variant="outline" 
          size="icon"
          className="backdrop-blur-md bg-black/20 border-white/20 hover:bg-black/40"
          onClick={togglePlay}
        >
          {isPlaying ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white" />}
        </Button>
      </div>
    </div>
  );
};

export default BackgroundVideo;
