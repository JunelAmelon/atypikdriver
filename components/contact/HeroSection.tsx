'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-[60vh] bg-gradient-to-b from-background to-white pt-32 pb-16 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading mb-6">
              Parlons de vos <span className="text-primary">besoins</span>
            </h1>
            <p className="text-lg text-text/80 mb-8">
              Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre démarche.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <span>Réponse sous 24h ouvrées</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <div className="bg-secondary/10 p-2 rounded-full">
                  <MessageSquare className="w-6 h-6 text-secondary" />
                </div>
                <span>Support personnalisé</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/3856027/pexels-photo-3856027.jpeg"
                alt="Service client"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Service Client</h3>
                  <p className="text-text/70">Disponible 5j/7</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-full">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}