'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/shared/Button';

export function WhyUsSection() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Sécurité maximale",
      description: "Suivi GPS, alertes en temps réel, vérification des antécédents des chauffeurs",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexibilité",
      description: "Annulation ou report de trajet sans frais",
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Excellence reconnue",
      description: "4,9/5 sur Trustpilot et recommandé par les professionnels de santé",
    },
  ];

  const partners = [
    "Centre Hospitalier Universitaire",
    "Association Française des Aidants",
    "Fédération des Parents d'Élèves",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Pourquoi nous <span className="text-primary">choisir</span> ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-xl shadow-lg"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-bold mb-4">Ils nous font confiance</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-background px-6 py-3 rounded-full text-text/70"
                >
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xl font-medium mb-6">
              Prêt à essayer ? Inscription en 3 minutes ⏱️
            </p>
            <Button href="#contact" variant="primary">
              Je m'inscris maintenant
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}