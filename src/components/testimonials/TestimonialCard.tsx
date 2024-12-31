import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  role: string;
  name: string;
  delay: number;
}

export const TestimonialCard = ({ quote, role, name, delay }: TestimonialCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="bg-white p-6 rounded-xl shadow-lg min-w-[350px] snap-center"
  >
    <Quote className="w-10 h-10 text-[#b13c74] mb-4" />
    <p className="text-gray-600 mb-6 italic">{quote}</p>
    <div>
      <h4 className="font-semibold mb-1">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  </motion.div>
);