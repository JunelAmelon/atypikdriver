'use client';

import { motion } from 'framer-motion';
import { Users, Car, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function OffersSection() {
  const router = useRouter();

  const offers = [
    {
      title: "Offre Parents",
      icon: <Users className="w-12 h-12 text-primary" />,
      description: "Un service de transport adapté et sécurisé pour vos enfants",
      link: "/services?tab=parents",
      color: "from-primary/20 to-primary/40",
    },
    {
      title: "Offre Chauffeurs",
      icon: <Car className="w-12 h-12 text-secondary" />,
      description: "Rejoignez notre équipe de chauffeurs bienveillants",
      link: "/services?tab=drivers",
      color: "from-secondary/20 to-secondary/40",
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-background">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center mb-16"
        >
          Découvrez nos <span className="text-primary">offres</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group cursor-pointer"
              onClick={() => router.push(offer.link)}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${offer.color} flex items-center justify-center mb-6`}>
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{offer.title}</h3>
                <p className="text-text/80 mb-6">{offer.description}</p>
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                  En savoir plus
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}