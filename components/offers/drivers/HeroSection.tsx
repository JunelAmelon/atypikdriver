'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/shared/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function DriverHeroSection() {
  return (
    <section className="min-h-[80vh] bg-gradient-to-b from-background to-white pb-16 relative overflow-hidden">
      {/* Conteneur avec padding top accru - Version très augmentée */}
      <div className="pt-[180px] md:pt-44 lg:pt-52 xl:pt-60 2xl:pt-68">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading mb-6">
                Et si chaque trajet avait un <span className="text-primary">impact</span> ?
              </h1>
              <p className="text-lg text-text/80 mb-8">
                Rejoignez une communauté de chauffeurs engagés, formés et valorisés. 
                Donnez du sens à votre métier en accompagnant des enfants neuro-atypiques.
              </p>
              <Button href="#postuler" variant="primary" className="group">
                Postuler maintenant
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://img.freepik.com/free-photo/smiley-businesswoman-turning-around-car_23-2148766998.jpg"
                  alt="Chauffeur professionnel avec enfant"
                  width={800}
                  height={500}
                  className="w-full h-[350px] md:h-[400px] object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4">
                      <blockquote className="text-base md:text-lg italic mb-2">
                        "Je me lève le matin avec envie. Je sais que je change des vies."
                      </blockquote>
                      <p className="font-medium text-sm md:text-base">Damienne, chauffeur depuis 1 an</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[28rem] md:h-[28rem] bg-secondary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}