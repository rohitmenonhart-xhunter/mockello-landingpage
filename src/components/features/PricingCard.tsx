import { LucideIcon } from 'lucide-react';

interface PricingCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  pricing: string;
  pricingDetails: string;
}

export const PricingCard = ({ Icon, title, description, pricing, pricingDetails }: PricingCardProps) => (
  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
    <Icon className="w-8 h-8 mb-4" />
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-gray-100 mb-4">{description}</p>
    <p className={`${pricing.includes('₹') ? 'text-3xl' : 'text-lg'} font-bold mb-2`}>{pricing}</p>
    <p className="text-sm text-gray-200">{pricingDetails}</p>
  </div>
);