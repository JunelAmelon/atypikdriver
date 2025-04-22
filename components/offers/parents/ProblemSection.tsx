'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign, Heart } from 'lucide-react';

export function ProblemSection() {
  const problems = [
    {
      icon: <AlertTriangle className="w-6 h-6 text-primary" />,
      text: "Peur que votre enfant fasse une crise en route ?",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      text: "Épuisement à tout gérer seul ?",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      text: "Coûts qui s'accumulent ?",
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      text: "Vous en avez assez des trajets chaotiques ?",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Ces situations vous sont <span className="text-primary">familières</span> ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {problem.icon}
              </div>
              <p className="text-lg font-medium">{problem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}