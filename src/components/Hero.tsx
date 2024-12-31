import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50 flex items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-4 right-4 flex items-center gap-2 text-sm font-medium bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
      >
        <Rocket className="w-4 h-4 text-[#b13c74]" />
        <span className="bg-gradient-to-r from-blue-600 to-[#b13c74] text-transparent bg-clip-text">
          Powered by V77
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-7xl font-bold text-gray-900 mb-8">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-[#b13c74] text-transparent bg-clip-text">
              Mockello
            </span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12">
            Master your interview skills with AI-powered mock interviews and college-specific aptitude tests. Practice makes perfect, and we're here to help you succeed.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="#features"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-[#b13c74] text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#b13c74] rounded-full text-lg font-semibold border-2 border-transparent bg-gradient-to-r from-blue-600 to-[#b13c74] border-gradient hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};