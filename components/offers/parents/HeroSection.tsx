'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/shared/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function ParentHeroSection() {
  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-background to-white pb-16 relative overflow-hidden">
      {/* Conteneur avec padding top accru - Version très augmentée */}
      <div className="pt-[140px] md:pt-36 lg:pt-44 xl:pt-52 2xl:pt-60">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading mb-6">
                Le trajet, c'est souvent la partie la plus <span className="text-primary">stressante</span>... 
                <br />
                On s'en <span className="text-secondary">occupe</span>.
              </h1>
              <p className="text-lg text-text/80 mb-8">
                Des chauffeurs formés aux spécificités de votre enfant, un suivi en temps réel, 
                et une communauté solidaire pour alléger les coûts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="#contact" variant="primary" className="group">
                  Je veux un trajet serein
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="tel:0123456789" variant="secondary">
                  Parler à un conseiller
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero/heroimgparent.png"
                  alt="Enfant souriant en voiture"
                  width={800}
                  height={500}
                  className="w-full h-[350px] md:h-[400px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4">
                      <h3 className="text-lg md:text-xl font-bold mb-2">Transport adapté et sécurisé</h3>
                      <p className="text-white/90 text-sm md:text-base">
                        Nos chauffeurs sont spécialement formés pour accompagner les enfants neuro-atypiques
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-secondary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}