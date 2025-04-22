'use client';

import { motion } from 'framer-motion';
import { Check, Shield, Clock, Heart, Users } from 'lucide-react';
import { Button } from '@/components/ui/shared/Button';

export function ParentsTab() {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Sécurité renforcée',
      description: 'Chauffeurs formés aux besoins spécifiques et véhicules adaptés',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Ponctualité garantie',
      description: 'Organisation optimisée pour respecter les horaires de votre enfant',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Approche bienveillante',
      description: 'Accompagnement personnalisé selon les particularités de chaque enfant',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Communauté de soutien',
      description: 'Échanges entre parents et partage d\'expériences',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-heading mb-6">
          Un service adapté aux besoins de <span className="text-primary">votre enfant</span>
        </h2>
        
        <ul className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 bg-secondary/20 p-3 rounded-full text-primary">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                <p className="text-text/80">{benefit.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
        
        <motion.div
          variants={itemVariants}
          className="mt-8"
        >
          <Button href="/contact" variant="primary">
            Prendre rendez-vous
          </Button>
        </motion.div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Forfait Occasionnel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg border-2 border-transparent hover:border-primary/20 transition-all duration-300"
        >
          <div className="bg-secondary/10 text-secondary text-sm font-medium py-1 px-4 rounded-full inline-block mb-4">
            Occasionnel
          </div>
          
          <h2 className="text-2xl font-heading mb-4">
            Forfait <span className="text-primary">Découverte</span>
          </h2>
          
          <div className="mb-6">
            <span className="text-5xl font-heading text-primary">120€</span>
            <span className="text-text/70">/mois</span>
          </div>
          
          <ul className="space-y-3 mb-8 min-h-[240px]">
            {[
              'Trajets à la demande',
              'Chauffeur formé aux besoins spécifiques',
              'Réservation 24h à l\'avance',
              'Service client standard',
              'Adaptations personnalisées',
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="text-secondary flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-center">
            <Button href="/contact" variant="outline" className="w-full">
              Essayer
            </Button>
          </div>
        </motion.div>

        {/* Forfait Régulier */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg shadow-lg relative border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
        >
          <div className="absolute -top-4 right-8 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
            Recommandé
          </div>
          
          <div className="bg-primary/10 text-primary text-sm font-medium py-1 px-4 rounded-full inline-block mb-4">
            Régulier
          </div>
          
          <h2 className="text-2xl font-heading mb-4">
            Forfait <span className="text-primary">Premium</span>
          </h2>
          
          <div className="mb-6">
            <span className="text-5xl font-heading text-primary">180€</span>
            <span className="text-text/70">/mois</span>
          </div>
          
          <ul className="space-y-3 mb-8 min-h-[240px]">
            {[
              'Transport aller-retour quotidien',
              'Chauffeur dédié et formé',
              'Application de suivi en temps réel',
              'Service client prioritaire 7j/7',
              'Adaptations personnalisées',
              'Trajets supplémentaires à tarif réduit',
              'Annulation sans frais',
            ].map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="text-secondary flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="text-center">
            <Button href="/contact" variant="primary" className="w-full">
              Je m'inscris
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}