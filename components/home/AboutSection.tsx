'use client';

import { motion } from 'framer-motion';
import { Heart, Shield, Users, ArrowRight, Star, Cloud, Rocket, Sparkles, Moon } from 'lucide-react';
import { Button } from '@/components/ui/shared/Button';

export function AboutSection() {
  // Features data
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Bienveillance",
      description: "Notre approche centrée sur l'enfant garantit un accompagnement adapté et rassurant."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Sécurité",
      description: "Des chauffeurs formés et des véhicules adaptés pour des trajets en toute sérénité."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Communauté",
      description: "Une communauté solidaire de parents et de professionnels qui s'entraident."
    }
  ];

  // Decorative elements for the image
  const imageDecorations = [
    { 
      icon: <Rocket className="text-primary w-8 h-8" />,
      position: { top: -20, left: 600 },
      animation: { 
        rotate: [0, 360],
        scale: [0.9, 1.1, 0.9]
      },
      transition: { duration: 8, repeat: Infinity }
    },
  
  
    
     
    { 
      icon: <Heart className="text-yellow-400  w-8 h-8" />,
      position: { top: -10, left: 2100 },
      animation: { 
        rotate: [0, 360],
        scale: [0.9, 1.1, 0.9]
      },
      transition: { duration: 8, repeat: Infinity }
    },
    
    { 
      icon: <Rocket className="text-secondary w-9 h-9" />,
      position: { bottom: -15, right: -15 },
      animation: { 
        rotate: [0, -360],
        scale: [1, 1.2, 1]
      },
      transition: { duration: 7, repeat: Infinity }
    },
    { 
      icon: <Cloud className="text-primary/70 w-10 h-10" />,
      position: { top: '25%', right: -25 },
      animation: { 
        x: [0, 10, 0],
        opacity: [0.7, 1, 0.7]
      },
      transition: { duration: 5, repeat: Infinity }
    },
    { 
      icon: <Heart className="text-red-400 w-7 h-7" />,
      position: { bottom: '30%', left: -20 },
      animation: { 
        y: [0, -10, 0],
        opacity: [0.8, 1, 0.8]
      },
      transition: { duration: 6, repeat: Infinity }
    },
    { 
      icon: <Cloud className="text-yellow-400 w-7 h-7" />,
      position: { bottom: '40%', left: 120 },
      animation: { 
        y: [0, -10, 0],
        opacity: [0.8, 1, 0.8]
      },
      transition: { duration: 6, repeat: Infinity }
    },
    { 
      icon: <Heart className="text-yellow-400 w-7 h-7" />,
      position: { bottom: '90%', left: 120 },
      animation: { 
        y: [0, -10, 0],
        opacity: [0.8, 1, 0.8]
      },
      transition: { duration: 6, repeat: Infinity }
    }
  ];

  // Decorative elements before features
  const featuresDecorations = [
    { 
      icon: <Sparkles className="text-yellow-400 w-6 h-6" />,
      position: { top: -15, left: '10%' },
      animation: { 
        scale: [1, 1.3, 1],
        opacity: [0.7, 1, 0.7]
      },
      transition: { duration: 4, repeat: Infinity }
    },
    { 
      icon: <Moon className="text-primary/60 w-8 h-8" />,
      position: { top: '15%', right: '10%' },
      animation: { 
        rotate: [0, 15, 0],
        y: [0, -5, 0]
      },
      transition: { duration: 5, repeat: Infinity }
    },
    { 
      icon: <Star className="text-secondary w-7 h-7" />,
      position: { top: '40%', left: '5%' },
      animation: { 
        rotate: [0, 180, 0],
        scale: [1, 1.2, 1]
      },
      transition: { duration: 6, repeat: Infinity }
    }
  ];

  return (
    <section id="about" className="pt-8 pb-24 bg-gradient-to-b from-white to-background relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column with image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <div className="relative">
                  {/* Image decorations */}
                  {imageDecorations.map((decoration, index) => (
                    <motion.div
                      key={`img-deco-${index}`}
                      className="absolute z-20"
                      style={decoration.position}
                      animate={decoration.animation}
                      transition={decoration.transition}
                    >
                      {decoration.icon}
                    </motion.div>
                  ))}
                  
                  {/* Main image */}
                  <img
                    src="/images/about-img.png"
                    alt="Enfants heureux"
                    className="rounded-2xl shadow-xl relative z-10 w-full h-auto"
                  />
                </div>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-heading mb-6">
                Notre <span className="text-primary">mission</span>
              </h2>
              <p className="text-lg text-text/80 mb-8">
                Chez Atypik Driver, nous croyons que chaque enfant mérite un accompagnement 
                personnalisé et bienveillant. <br></br> 
                Notre mission est de transformer les trajets 
                quotidiens en moments d'épanouissement, en tenant compte des besoins 
                spécifiques de chaque enfant neuro-atypique.
              </p>
              <Button 
                href="/about" 
                variant="gradient"
                className="group relative overflow-hidden rounded-full px-8 py-4 shadow-lg transition-all duration-300 hover:shadow-primary/20"
              >
                <span className="relative z-10 flex items-center font-bold">
                  En savoir plus
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>

            {/* Large floating decorative elements */}
            <motion.div
              animate={{
                y: [-10, 10],
                rotate: [-5, 5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-8 -left-8 text-secondary z-0"
            >
              <Star className="w-12 h-12 fill-secondary/20" />
            </motion.div>
            <motion.div
              animate={{
                y: [10, -10],
                rotate: [5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
              className="absolute -bottom-8 -right-8 text-primary z-0"
            >
              <Cloud className="w-16 h-16 fill-primary/20" />
            </motion.div>
          </motion.div>

          {/* Right column with features */}
          <div className="relative">
            {/* Decorative elements before features */}
            {featuresDecorations.map((decoration, index) => (
              <motion.div
                key={`feature-deco-${index}`}
                className="absolute z-10"
                style={decoration.position}
                animate={decoration.animation}
                transition={decoration.transition}
              >
                {decoration.icon}
              </motion.div>
            ))}

            <div className="grid grid-cols-1 gap-6 relative z-20">
              {features.map((feature, index) => (
                <motion.div
                  key={`feature-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 rounded-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-text/70 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
    </section>
  );
}