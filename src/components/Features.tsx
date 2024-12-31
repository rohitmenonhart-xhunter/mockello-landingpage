import { motion } from 'framer-motion';
import { Brain, Users, Trophy } from 'lucide-react';
import { FeatureCard } from './features/FeatureCard';

export const Features = () => {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#b13c74] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interview preparation tools designed for your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            Icon={Brain}
            title="AI-Powered"
            description="Experience realistic interview simulations powered by advanced AI technology that adapts to your responses"
            color="bg-gradient-to-br from-blue-600 to-blue-700"
            delay={0.4}
          />
          <FeatureCard
            Icon={Users}
            title="Personalized"
            description="Receive detailed, personalized feedback after each session to help you improve systematically"
            color="bg-gradient-to-br from-[#b13c74] to-[#d23f86]"
            delay={0.6}
          />
          <FeatureCard
            Icon={Trophy}
            title="Track Progress"
            description="Monitor your improvement with comprehensive analytics and compete with your peers on college-specific leaderboards"
            color="bg-gradient-to-br from-blue-600 to-[#b13c74]"
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
};