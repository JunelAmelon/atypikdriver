'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const [currentQuad, setCurrentQuad] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const testimonials = [
    {
      name: "Sophie M.",
      role: "Parent",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "Service qui a changé notre quotidien. Mon fils est plus serein.",
    },
    {
      name: "Thomas D.",
      role: "Chauffeur",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      content: "Expérience enrichissante qui donne du sens à mon travail.",
    },
    {
      name: "Marie L.",
      role: "Parent",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      content: "Accompagnement parfaitement adapté aux besoins spéciaux.",
    },
    {
      name: "Lucas B.",
      role: "Chauffeur",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      content: "Formation excellente pour comprendre les besoins spécifiques.",
    },
    {
      name: "Emma P.",
      role: "Parent",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      content: "Équipe à l'écoute et chauffeurs bienveillants.",
    },
    {
      name: "Jean D.",
      role: "Parent",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      content: "Fiable et sécurisant pour mon enfant autiste.",
    },
    {
      name: "Amélie L.",
      role: "Chauffeur",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
      content: "Formation complète et pro, accompagnement personnalisé.",
    },
    {
      name: "Pierre G.",
      role: "Parent",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg",
      content: "Solution idéale pour besoins spécifiques.",
    },
    {
      name: "Nathalie R.",
      role: "Chauffeur",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg",
      content: "Travailler avec ces enfants est très enrichissant.",
    },
    {
      name: "David M.",
      role: "Parent",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      content: "Conducteurs patients et à l'écoute.",
    },
    {
      name: "Sarah K.",
      role: "Parent",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
      content: "Mon fils adore ses trajets maintenant.",
    },
    {
      name: "Marc T.",
      role: "Chauffeur",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
      content: "Approche professionnelle et humaine.",
    }
  ];

  // Crée des groupes de 3 témoignages
  const testimonialTriples = [];
  for (let i = 0; i < testimonials.length; i++) {
    testimonialTriples.push([
      testimonials[i % testimonials.length],
      testimonials[(i + 1) % testimonials.length],
      testimonials[(i + 2) % testimonials.length]
    ]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentQuad((prev) => (prev + 1) % testimonialTriples.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonialTriples.length]);

  const slideVariants = {
    enter: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '30%' : '-30%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction: 'left' | 'right') => ({
      x: direction === 'right' ? '-30%' : '30%',
      opacity: 0,
      transition: { duration: 0.5 }
    }),
  };

  const nextQuad = () => {
    setDirection('right');
    setCurrentQuad((prev) => (prev + 1) % testimonialTriples.length);
  };

  const prevQuad = () => {
    setDirection('left');
    setCurrentQuad((prev) => (prev - 1 + testimonialTriples.length) % testimonialTriples.length);
  };

  return (
    <section className="pt-6 pb-12 bg-gradient-to-b from-background to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de parents et chauffeurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[0, 1, 2].map((index) => (
            <div key={index} className="relative h-[250px]"> 
              <AnimatePresence mode="popLayout" custom={direction}>
                <motion.div
                  key={`card-${currentQuad}-${index}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute top-0 left-0 right-0 h-full"
                >
                  <TestimonialCard testimonial={testimonialTriples[currentQuad][index]} />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Contrôles de navigation */}
        <div className="flex justify-center mt-6 gap-4">
          <button
            onClick={prevQuad}
            className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-primary" />
          </button>
          
          <div className="flex items-center gap-1.5">
            {testimonialTriples.slice(0, 5).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentQuad % 5 ? 'right' : 'left');
                  setCurrentQuad(index % testimonialTriples.length);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentQuad % 5 === index ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextQuad}
            className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-2xl animate-pulse" />
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md h-full flex flex-col border border-gray-200 text-center hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center mb-4">
        <div className="relative mb-3">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
            width={64}
            height={64}
          />
          <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
            <Heart className="w-3 h-3 text-white" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-base">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-base italic mb-4 flex-grow leading-relaxed">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      <div className="flex justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
  );
} 