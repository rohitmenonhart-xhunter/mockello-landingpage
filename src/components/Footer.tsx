import { motion } from 'framer-motion';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <a 
              href="https://www.v77.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <Rocket className="w-6 h-6 text-[#b13c74]" />
              <span className="text-xl font-bold">V77</span>
            </a>
            <p className="text-gray-400 max-w-md">
              Empowering the next generation of tech talent through innovative AI solutions.
            </p>
          </div>

          <div className="space-y-4 text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-end text-gray-400">
              <Mail className="w-4 h-4" />
              <span>contactrohitmenon@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-end text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+91 755 000 0805</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-end text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Chennai, India</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} V77. All rights reserved.
            {' | '}
            <a 
              href="https://www.v77.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b13c74] transition-colors"
            >
              Visit V77
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};