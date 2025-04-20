'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, Cloud, Rocket, Heart } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  const floatingElements = [
    { icon: <Star className="text-secondary w-8 h-8" />, delay: 0, top: "10%", left: "10%" },
    { icon: <Cloud className="text-primary w-10 h-10" />, delay: 0.5, top: "30%", right: "15%" },
    { icon: <Rocket className="text-secondary w-8 h-8" />, delay: 1, bottom: "20%", left: "20%" },
    { icon: <Heart className="text-primary w-6 h-6" />, delay: 1.5, bottom: "30%", right: "25%" },
    { icon: <Star className="text-secondary w-12 h-12" />, delay: 2, top: "40%", left: "30%" }
  ];

  const organicShapes = [
    { rotate: 0, scale: 1, delay: 0 },
    { rotate: 120, scale: 0.8, delay: 0.2 },
    { rotate: 240, scale: 0.9, delay: 0.4 }
  ];

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-background to-white pb-24 overflow-hidden">
      {/* Conteneur avec padding top accru */}
      <div className="pt-[120px] md:pt-32 lg:pt-40 xl:pt-48 2xl:pt-56">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-20">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Transport <span className="text-primary">bienveillant</span> pour enfants <span className="text-secondary">neuro-atypiques</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 text-text/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Votre enfant mérite plus qu'un simple trajet. Découvrez notre service de transport adapté aux besoins spécifiques des enfants neuro-atypiques.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="/services" 
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary p-[2px] font-bold text-white transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  <span className="relative flex h-14 items-center gap-2 rounded-full bg-white px-8 text-lg transition-all group-hover:bg-transparent">
                    <span className="text-primary group-hover:text-white transition-colors">Je découvre l'offre</span>
                    <ArrowRight className="w-5 h-5 text-primary group-hover:text-white transition-colors group-hover:translate-x-1" />
                  </span>
                </a>
              </motion.div>
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative aspect-square">
                {/* Formes organiques */}
                {organicShapes.map((shape, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ 
                      rotate: shape.rotate,
                      scale: shape.scale
                    }}
                    animate={{ 
                      rotate: [shape.rotate, shape.rotate + 360],
                      scale: [shape.scale, shape.scale * 1.1, shape.scale]
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      },
                      scale: {
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: shape.delay
                      }
                    }}
                  >
                    <div className={`
                      absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
                      ${index === 0 ? 'bg-primary/10' : index === 1 ? 'bg-secondary/10' : 'bg-primary/5'}
                    `} />
                  </motion.div>
                ))}

                <Image
                  src="/images/hero/imageherosectionhomepage.png"
                  alt="Enfants heureux"
                  width={500}
                  height={500}
                  className="rounded-full object-cover w-full h-full relative z-10"
                  priority
                />
                
                {/* Floating elements */}
                {floatingElements.map((el, index) => (
                  <motion.div
                    key={index}
                    className="absolute z-20"
                    style={{
                      top: el.top,
                      left: el.left,
                      right: el.right,
                      bottom: el.bottom
                    }}
                    animate={{
                      y: [-10, 10],
                      rotate: [-5, 5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: el.delay
                    }}
                  >
                    {el.icon}
                  </motion.div>
                ))}
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