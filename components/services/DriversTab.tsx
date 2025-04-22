'use client';

import { motion } from 'framer-motion';
import { Users, Calendar, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/shared/Button';

export function DriversTab() {
  const benefits = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Emploi du temps flexible',
      description: 'Adaptez vos horaires selon vos disponibilités',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenus stables',
      description: 'Rémunération attractive et régulière',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Formation complète',
      description: 'Accompagnement et formation aux besoins spécifiques',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Impact concret',
      description: 'Contribuez au bien-être des enfants et de leurs familles',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-heading mb-6"
        >
          Rejoignez notre <span className="text-primary">communauté</span> de chauffeurs
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-shrink-0 bg-secondary/20 p-3 rounded-full text-primary">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{benefit.title}</h3>
                  <p className="text-text/80">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button href="/contact" variant="gradient">
            Postuler maintenant
          </Button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg"
      >
        <h3 className="text-2xl font-heading mb-6 text-center">
          Témoignage de <span className="text-primary">chauffeur</span>
        </h3>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img 
              src="https://img.freepik.com/free-photo/indian-businessman-goes-home-dinner_496169-2783.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740" 
              alt="Sophie, chauffeur Atypik Driver" 
              className="w-full h-full object-cover"
            />
          </div>
          <h4 className="text-lg font-bold">Sophie, 42 ans</h4>
          <p className="text-text/70">Chauffeur depuis 2 ans</p>
        </div>
        
        <blockquote className="italic text-text/80 mb-8">
          "Rejoindre Atypik Driver a été l'une des meilleures décisions de ma vie. 
          Je me sens utile chaque jour, et les liens que j'ai créés avec les enfants 
          et leurs familles sont inestimables. La formation m'a donné les outils pour 
          comprendre et répondre aux besoins spécifiques de chaque enfant."
        </blockquote>
        
        <div className="text-center">
          <Button href="/contact" variant="gradient" className="w-full">
            Rejoindre l'équipe
          </Button>
        </div>
      </motion.div>
    </div>
  );
}