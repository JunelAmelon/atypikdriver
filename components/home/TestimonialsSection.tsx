'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Parent",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "Un service qui a changé notre quotidien. Mon fils est beaucoup plus serein pendant ses trajets.",
    },
    {
      name: "Thomas Dubois",
      role: "Chauffeur",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      content: "Une expérience enrichissante qui donne du sens à mon travail.",
    },
    {
      name: "Marie Leroy",
      role: "Parent",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      content: "L'accompagnement est parfaitement adapté aux besoins de ma fille.",
    },
    {
      name: "Lucas Bernard",
      role: "Chauffeur",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      content: "La formation reçue m'a permis de mieux comprendre les enfants neuro-atypiques.",
    },
    {
      name: "Emma Petit",
      role: "Parent",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      content: "Une équipe à l'écoute et des chauffeurs bienveillants.",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Ils nous font <span className="text-primary">confiance</span>
          </h2>
          <p className="text-lg text-text/80 max-w-2xl mx-auto">
            Découvrez les témoignages de parents et chauffeurs qui partagent leur expérience avec Atypik Driver.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {/* Premier carrousel */}
          <div className="relative h-[300px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <TestimonialCard testimonial={testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Second carrousel */}
          <div className="relative h-[300px] overflow-hidden">
            <AnimatePresence initial={false} custom={-direction}>
              <motion.div
                key={(currentIndex + 2) % testimonials.length}
                custom={-direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <TestimonialCard testimonial={testimonials[(currentIndex + 2) % testimonials.length]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-4">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-secondary"
          />
          <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
            <Heart className="w-3 h-3 text-white" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-sm text-text/70">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-text/80 italic mb-4">&ldquo;{testimonial.content}&rdquo;</p>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>
    </div>
  );
}