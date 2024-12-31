import { motion } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface AudioTestimonialProps {
  name: string;
  audioUrl: string;
  duration: string;
  delay: number;
}

export const AudioTestimonial = ({ name, audioUrl, duration, delay }: AudioTestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="bg-white p-6 rounded-lg shadow flex items-center gap-6 min-w-[600px] w-full snap-center"
    >
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-12 h-12 rounded-full bg-[#b13c74] flex items-center justify-center flex-shrink-0"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6 text-white" />
        ) : (
          <Play className="w-6 h-6 text-white" />
        )}
      </button>
      <div className="flex-1">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-[#b13c74]"
            style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
          />
        </div>
      </div>
      <div className="flex items-center gap-4 flex-shrink-0">
        <Volume2 className="w-5 h-5 text-gray-400" />
        <span className="text-sm text-gray-500 min-w-[50px]">{duration}</span>
        <span className="text-sm font-medium">{name}</span>
      </div>
    </motion.div>
  );
};