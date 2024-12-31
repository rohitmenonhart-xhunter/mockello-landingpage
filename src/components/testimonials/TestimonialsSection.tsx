import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { TestimonialCard } from './TestimonialCard';
import { AudioTestimonial } from './AudioTestimonial';

export const TestimonialsSection = () => {
  const testimonialRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#b13c74] mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">Hear from our students who mastered their interview skills</p>
        </motion.div>

        <div className="relative mb-16">
          <button
            onClick={() => scroll(testimonialRef, 'left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <div 
            ref={testimonialRef}
            className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <TestimonialCard
              name="Priya S."
              role="Final Year, SVCE"
              quote="The AI interviews helped me overcome my nervousness. Now I feel much more confident!"
              delay={0.2}
            />
            <TestimonialCard
              name="Suriya."
              role="Final Year, SVCE"
              quote="Mockello's feedback system helped me identify and improve my weak areas."
              delay={0.4}
            />
            <TestimonialCard
              name="Anjali K."
              role="Final Year, SVCE"
              quote="The personalized questions really helped me prepare for my actual interviews."
              delay={0.6}
            />
          </div>

          <button
            onClick={() => scroll(testimonialRef, 'right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="relative">
          <h3 className="text-2xl font-semibold text-center mb-8">Audio Testimonials</h3>
          
          <button
            onClick={() => scroll(audioRef, 'left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div 
            ref={audioRef}
            className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide snap-x snap-mandatory w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AudioTestimonial
              name="Karthik R., student from SVCE"
              audioUrl="/audios/a2feedback.mp3"
              duration="1:30"
              delay={0.2}
            />
           
            <AudioTestimonial
              name="Varun M., student from SVCE"
              audioUrl="/audios/a3feedback.mp3"
              duration="25s"
              delay={0.6}
            />
          </div>

          <button
            onClick={() => scroll(audioRef, 'right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};