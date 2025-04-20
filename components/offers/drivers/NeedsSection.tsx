'use client';

import { motion } from 'framer-motion';
import { DollarSign, Heart, Brain } from 'lucide-react';

export function NeedsSection() {
  const needs = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Un revenu stable sans course après les clients ?",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Vous sentir utile au quotidien ?",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      text: "Être formé pour des missions exigeantes mais gratifiantes ?",
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
            Vous <span className="text-primary">cherchez</span> ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {needs.map((need, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {need.icon}
              </div>
              <p className="text-lg font-medium">{need.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}