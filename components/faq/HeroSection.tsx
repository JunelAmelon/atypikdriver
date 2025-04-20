'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-[60vh] bg-gradient-to-b from-background to-white pt-32 pb-16 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-heading mb-6">
            Questions <span className="text-primary">fréquentes</span>
          </h1>
          <p className="text-lg text-text/80 mb-8">
            Trouvez rapidement les réponses à vos questions sur notre service de transport adapté.
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Rechercher une question..."
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}