'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Le Service",
      questions: [
        {
          question: "Comment fonctionne le service ?",
          answer: "Après inscription, nous analysons vos besoins de transport, identifions un chauffeur adapté, et établissons un planning régulier. Notre application vous permet de suivre les trajets en temps réel et de communiquer avec le chauffeur."
        },
        {
          question: "Quelles sont les zones desservies ?",
          answer: "Nous opérons actuellement dans toute l'Île-de-France. Une expansion vers d'autres régions est prévue prochainement."
        },
        {
          question: "Quels types de trajets proposez-vous ?",
          answer: "Nous assurons les trajets réguliers (école, activités) et ponctuels (rendez-vous médicaux, loisirs) pour les enfants neuro-atypiques."
        }
      ]
    },
    {
      category: "Les Chauffeurs",
      questions: [
        {
          question: "Comment sont sélectionnés les chauffeurs ?",
          answer: "Nos chauffeurs passent par un processus de sélection rigoureux incluant vérification des antécédents, formation spécialisée de 20h, et évaluation continue."
        },
        {
          question: "Quelle formation reçoivent les chauffeurs ?",
          answer: "La formation AtypikCare™ couvre la compréhension des troubles neuro-développementaux, la gestion des crises, les techniques de communication adaptée, et les premiers secours."
        }
      ]
    },
    {
      category: "Tarifs et Réservation",
      questions: [
        {
          question: "Comment sont calculés les tarifs ?",
          answer: "Le forfait mensuel de 120€ couvre les trajets réguliers. Les tarifs sont mutualisés entre les familles pour rester accessibles."
        },
        {
          question: "Peut-on annuler ou modifier une réservation ?",
          answer: "Oui, les modifications sont possibles jusqu'à 24h avant le trajet, sans frais supplémentaires."
        }
      ]
    },
    {
      category: "Sécurité et Suivi",
      questions: [
        {
          question: "Comment suivre le trajet de mon enfant ?",
          answer: "Notre application permet de suivre le trajet en temps réel, de recevoir des notifications de départ/arrivée, et de communiquer avec le chauffeur."
        },
        {
          question: "Quelles mesures de sécurité sont en place ?",
          answer: "Nous avons mis en place un système de géolocalisation en temps réel, des véhicules adaptés et sécurisés, et un protocole strict de prise en charge."
        }
      ]
    }
  ];

  return (
    <section className="pt-4 pb-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-2xl font-heading mb-6">
                <span className="text-primary">{category.category}</span>
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, index) => {
                  const globalIndex = categoryIndex * 10 + index;
                  return (
                    <div
                      key={index}
                      className="bg-background rounded-lg overflow-hidden"
                    >
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between"
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown
                          className={`transform transition-transform ${
                            openIndex === globalIndex ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {openIndex === globalIndex && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 border-t border-gray-100">
                              <p className="text-text/80">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}