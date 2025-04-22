'use client';

import { motion } from 'framer-motion';
import { Shield, UserCheck, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/shared/Button';

export function OfferSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Chauffeurs certifiés",
      description: "20h de formation sur les troubles neuro-atypiques (TSA, TDAH, Dys…)",
    },
    {
      icon: <UserCheck className="w-8 h-8 text-primary" />,
      title: "Profil personnalisé",
      description: "Photo, besoins sensoriels, rituels rassurants… partagés avec le chauffeur",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Deux formules adaptées",
      description: "Choisissez entre 10€/trajet occasionnel ou 180€/mois en illimité",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading mb-8">
              Notre <span className="text-primary">offre</span> pour les parents
            </h2>
            
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="bg-primary/10 p-3 rounded-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-text/80">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-8">
              {/* Forfait Occasionnel */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex-1 border-2 border-transparent hover:border-primary/20 transition-all duration-300">
                <div className="bg-secondary/10 text-secondary text-xs font-medium py-1 px-3 rounded-full inline-block mb-2">
                  Occasionnel
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">120€</span>
                  <span className="text-text/70">/mois</span>
                </div>
                <p className="text-sm text-text/70">Idéal pour les besoins ponctuels</p>
              </div>
              
              {/* Forfait Régulier */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 rounded-xl shadow-lg flex-1 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 relative">
                <div className="absolute -top-3 right-6 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full">
                  Recommandé
                </div>
                <div className="bg-primary/10 text-primary text-xs font-medium py-1 px-3 rounded-full inline-block mb-2">
                  Régulier
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">180€</span>
                  <span className="text-text/70">/mois</span>
                </div>
                <p className="text-sm text-text/70">Sans engagement - Annulation à tout moment</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="https://img.freepik.com/free-photo/went-shopping-today-shot-attractive-african-woman-sitting-car-salon_1157-46421.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&w=740"
              alt="Transport adapté"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-lg font-medium mb-2">Premier trajet offert !</p>
              <p className="text-text/70">Testez notre service sans engagement</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}