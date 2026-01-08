'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Cloud, Rocket, Heart, ChevronDown, Calendar, LightbulbIcon } from 'lucide-react';
import Image from 'next/image';

// Composant de texte extensible avec animation
function ExpandableText({ initialText, fullText }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative text-lg md:text-xl mb-8 text-text/80"
    >
      <p className="mb-2">{initialText}</p>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4 mt-4 overflow-hidden"
          >
            {fullText.map((section, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-primary/10">
                <div className="flex gap-3 mb-2 items-start">
                  {section.icon}
                  <h3 className="font-medium text-primary">{section.title}</h3>
                </div>
                <p className="pl-8">{section.content}</p>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 flex items-center gap-2 text-primary hover:text-secondary transition-colors group"
      >
        <span>{isExpanded ? 'Voir moins' : 'En savoir plus'}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </motion.div>
      </button>
    </motion.div>
  );
}

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
      {/* Conteneur avec padding top très accru sur mobile */}
      <div className="pt-[200px] md:pt-40 lg:pt-48 xl:pt-56 2xl:pt-64"> {/* Augmenté pour compenser la taille du header */}
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-20">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Transport <span className="text-primary">bienveillant</span> <br></br>pour enfants <br></br> <span className="text-secondary">neuro-atypiques</span>
              </motion.h1>
              
              <ExpandableText 
                initialText="Découvrez notre service de transport adapté aux besoins spécifiques des enfants neuro-atypiques. Conçu pour les accompagner avec douceur, compréhension et sécurité."
                fullText={[
                  {
                    icon: <Calendar className="w-5 h-5 text-primary flex-shrink-0" />,
                    title: "Rendez-vous médicaux, séances de thérapie, rendez-vous en semaine ou en urgence...",
                    content: "Nos chauffeurs formés assurent une présence rassurante et régulière, 7j/7, pour que chaque déplacement devienne une expérience sereine."
                  },
                  {
                    icon: <LightbulbIcon className="w-5 h-5 text-primary flex-shrink-0" />,
                    title: "Un vrai relais pour les parents.",
                    content: "Nous savons combien il est difficile de jongler entre vie professionnelle, familiale et rendez-vous spécialisés. C'est pourquoi Atypik Driver agit comme un partenaire de confiance, prenant le relai là où vous en avez besoin, sans compromis sur la bienveillance ni la qualité du service."
                  }
                ]}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="/offres/parents" 
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