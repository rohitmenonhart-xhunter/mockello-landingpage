import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Add ref for video element
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#b13c74] mb-4">
            Experience Mockello
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how our AI conducts realistic HR interviews and provides instant, actionable feedback
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-[#b13c74]/10 group-hover:opacity-0 transition-opacity duration-300" />
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/images/thumbnail.png"
              onClick={handlePlayPause}
              onEnded={handleVideoEnd}
              playsInline
            >
              <source src="/videos/mockello.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <button 
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="bg-white/90 p-6 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                  <Play className="w-8 h-8 text-[#b13c74]" />
                </div>
              </button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Natural Conversations</h3>
              <p className="text-gray-600">Experience fluid, context-aware interactions that feel just like talking to a real HR professional.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Instant Feedback</h3>
              <p className="text-gray-600">Receive detailed analysis of your responses, Communication skills, and areas for improvement right at the end of your session.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Industry-Specific Questions</h3>
              <p className="text-gray-600">Practice with questions tailored to your field and experience level.</p>
            </div>

            <motion.a
              href="https://forms.gle/tVFS5kJJU2KRjSi7A"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-[#b13c74] text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Go ahead register your slot!
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
