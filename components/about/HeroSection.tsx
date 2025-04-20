'use client';

import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-[60vh] bg-gradient-to-b from-background to-white pb-16 relative overflow-hidden">
      {/* Conteneur avec padding top accru */}
      <div className="pt-[120px] md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading mb-6">
                Notre <span className="text-primary">histoire</span> et nos <span className="text-secondary">valeurs</span>
              </h1>
              <p className="text-lg text-text/80 mb-8">
                Découvrez comment Atypik Driver est né d'une histoire personnelle et s'est transformé en une mission pour aider les familles d'enfants neuro-atypiques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <div className="bg-white p-4 rounded-lg shadow-lg min-w-[150px]">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold">Bienveillance</h3>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg min-w-[150px]">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-bold">Excellence</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}