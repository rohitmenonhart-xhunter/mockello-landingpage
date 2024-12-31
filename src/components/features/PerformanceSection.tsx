import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export const PerformanceSection = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="p-8 bg-blue-50 rounded-xl"
  >
    <Trophy className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-2xl font-semibold mb-4">College Leaderboard</h3>
    <p className="text-gray-600 mb-4">
      Track your performance and compete with your college peers. Each college has its own dedicated scoreboard to foster healthy competition.
    </p>
    <a
      href="https://mockello-svce-scoreboard.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
    >
      SVCE Scoreboard →
    </a>
  </motion.div>
);