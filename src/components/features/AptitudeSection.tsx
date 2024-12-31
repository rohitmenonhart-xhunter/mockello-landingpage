import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

export const AptitudeSection = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="p-8 bg-blue-50 rounded-xl"
  >
    <BrainCircuit className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-2xl font-semibold mb-4">Round 1: Aptitude Assessment</h3>
    <p className="text-gray-600 mb-4">
      Free aptitude tests for students under registered colleges. Currently available for SVCE students, with more colleges joining soon!
    </p>
    <a
      href="https://mockello-aptituderound.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
    >
      Take Test →
    </a>
  </motion.div>
);