import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export const ScheduleSection = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="p-8 bg-gradient-to-br from-blue-100 to-pink-50 rounded-xl"
  >
    <Clock className="w-12 h-12 text-[#b13c74] mb-4" />
    <h3 className="text-2xl font-semibold mb-4">Schedule Interview</h3>
    <p className="text-gray-600 mb-4">
      Book your mock interview session at your convenience. Practice makes perfect!
    </p>
    <a
      href="#contact"
      className="text-[#b13c74] font-semibold hover:text-[#d23f86] transition-colors"
    >
      Schedule Now →
    </a>
  </motion.div>
);