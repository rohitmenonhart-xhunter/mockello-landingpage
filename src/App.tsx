import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DemoSection } from './components/demo/DemoSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <DemoSection />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;