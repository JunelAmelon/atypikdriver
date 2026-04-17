'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.h2 
          className="text-3xl md:text-4xl font-heading text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Découvrez <span className="text-primary">Atypik</span>
          <span className="text-secondary">Driver</span> en vidéo
        </motion.h2>
        
        <motion.div 
          className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <>
            <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center">
              <div className="bg-primary/90 text-white w-20 h-20 rounded-full flex items-center justify-center">
                <Play size={36} fill="white" />
              </div>
            </div>
            <img 
              src="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Vidéo de présentation" 
              className="w-full h-full object-cover"
            />
          </>
        </motion.div>
      </div>
    </section>
  );
}