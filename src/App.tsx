import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DemoSection } from './components/demo/DemoSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AptitudeSection } from './components/features/AptitudeSection';
import { InterviewSection } from './components/features/InterviewSection';
import { PerformanceSection } from './components/features/PerformanceSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AptitudeSection />
          <PerformanceSection />
        </div>
        <InterviewSection />
      </div>
      <DemoSection />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;