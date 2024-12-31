import { motion } from 'framer-motion';
import { User, GraduationCap, Building2 } from 'lucide-react';
import { PricingCard } from './PricingCard';

export const InterviewSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="bg-gradient-to-br from-[#b13c74] to-[#d23f86] text-white rounded-xl p-8 mb-16"
  >
    <h3 className="text-3xl font-bold mb-8 text-center">Round 2: AI HR Interview</h3>
    <p className="text-xl text-center mb-12">
      Experience one-on-one AI-powered HR mock interviews with instant feedback
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <PricingCard
        Icon={User}
        title="Individual"
        description="Perfect for personal interview preparation"
        pricing="₹129"
        pricingDetails="per session"
      />
      <PricingCard
        Icon={GraduationCap}
        title="Student Groups"
        description="Ideal for study groups and clubs"
        pricing="Custom Pricing"
        pricingDetails="Contact for group rates"
      />
      <PricingCard
        Icon={Building2}
        title="Colleges"
        description="Comprehensive training for institutions"
        pricing="Enterprise Plan"
        pricingDetails="Tailored to your needs"
      />
    </div>
    
    <div className="text-center mt-12">
      <a
        href="#contact"
        className="inline-block bg-white text-[#b13c74] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-opacity"
      >
        Contact for Pricing
      </a>
    </div>
  </motion.div>
);