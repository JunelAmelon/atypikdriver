'use client';

import { motion } from 'framer-motion';
import { Calendar, Brain, DollarSign, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/shared/Button';

export function OfferSection() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Missions planifiées à l'avance",
      description: "Plus de stress : vos trajets sont réservés 1 mois à l'avance",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Formation AtypikCare™ incluse",
      description: "Certification valorisable sur votre CV",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Revenus garantis",
      description: "2 500€/mois minimum pour 5 familles accompagnées",
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
              Notre <span className="text-primary">offre</span> pour les chauffeurs
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

            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold text-primary">2 500€</span>
                <span className="text-text/70">/mois minimum</span>
              </div>
              <p className="text-sm text-text/70">Pour 5 familles accompagnées régulièrement</p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button href="#postuler" variant="primary" className="group">
                Postuler maintenant
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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
              src="https://img.freepik.com/free-photo/full-shot-people-correcting-grammar-mistakes_23-2150171159.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&w=740"
              alt="Chauffeur professionnel"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-lg font-medium mb-2">Formation certifiante</p>
              <p className="text-text/70">Devenez un expert du transport adapté</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}