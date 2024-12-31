import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay: number;
}

export const FeatureCard = ({ Icon, title, description, color, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className={`absolute -top-6 left-8 w-20 h-20 ${color} rounded-2xl p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-full h-full text-white" />
    </div>
    <div className="mt-10">
      <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-[#b13c74] text-transparent bg-clip-text">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-[#b13c74] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl" />
  </motion.div>
);