'use client';

import { motion } from 'framer-motion';
import { Heart, Star, ArrowRight } from 'lucide-react';

export function StorySection() {
  const timelineItems = [
    {
      year: "2021",
      title: "Le diagnostic",
      content: "Mon aîné est diagnostiqué TDA sans Hyperactivité. C'est le début d'un nouveau chapitre.",
    },
    {
      year: "2021-2022",
      title: "Les défis quotidiens",
      content: "De nombreux rendez-vous médicaux s'enchaînent : psychomotricité, orthoptie, neuropsychologue...",
    },
    {
      year: "2022",
      title: "La communauté",
      content: "Je rejoins des groupes de soutien et découvre que de nombreux parents partagent les mêmes défis.",
    },
    {
      year: "2023",
      title: "La naissance d'Atypik Driver",
      content: "La solution pour aider les parents à gérer les rendez-vous médicaux de leurs enfants voit le jour.",
    }
  ];

  return (
    <section className="pt-4 pb-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-6">
            Mon <span className="text-primary">histoire</span>
          </h2>
          <p className="text-lg text-text/80 text-center mb-8">
          Je suis Khouzaimata SAID, maman de deux enfants, dont l’aîné est diagnostiqué TDAH sans hyperactivité. Mon parcours personnel, marqué par les défis de la parentalité et la conciliation entre vie professionnelle et rendez-vous médicaux, m’a conduite à créer Atypik Driver. 
          <br></br>
          Cette entreprise innovante apporte un soutien concret aux parents d’enfants à besoins spécifiques, en proposant un service d'accompagnement adapté et humain. Inspirée par mon vécu, je mets l’empathie, la flexibilité et la solidarité au cœur de mon engagement entrepreneurial.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary" />

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div className={`bg-white p-6 rounded-lg shadow-lg ${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <div className="text-primary font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-text/80">{item.content}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-4 h-4 bg-white rounded-full border-4 border-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}