'use client';

import { Users, Heart, BarChart3, Star, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    number: "500+",
    label: "Familles accompagnées",
    color: "from-primary/80 to-primary",
    bgImage: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    icon: <Heart className="w-8 h-8 text-white" />,
    number: "98%",
    label: "Taux de satisfaction",
    color: "from-secondary/80 to-secondary",
    bgImage: "https://img.freepik.com/free-photo/relaxed-happy-afro-america-woman-dances-has-fun-raises-hands-uo-carefree-enjoys-music_273609-51976.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-white" />,
    number: "120€",
    label: "Prix mensuel moyen",
    color: "from-primary/70 to-secondary/70",
    bgImage: "https://img.freepik.com/free-vector/special-price-poster_1176-259.jpg?uid=R143971211&ga=GA1.1.1911634789.1729294558&semt=ais_hybrid&w=740"
  }
];

export function StatsSection() {
  return (
    <section className="pt-16 pb-8 bg-background relative overflow-hidden"> {/* Arrière-plan uniforme */}
      <div className="container-custom relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center mb-12" /* Changé de mb-16 à mb-12 */
        >
          Notre <span className="text-secondary font-bold">impact</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Changé de gap-8 à gap-6 */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`
                relative z-10 rounded-2xl p-6 shadow-lg overflow-hidden
                transform transition-all duration-300
                group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-black/20
              `}>
                {/* Image d'arrière-plan */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={stat.bgImage}
                    alt={stat.label}
                    fill
                    className="object-cover opacity-70 brightness-75 contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
                </div>
                
                <div className={`
                  relative z-10 w-14 h-14 mb-4 rounded-xl shadow-md
                  bg-gradient-to-br ${stat.color}
                  flex items-center justify-center
                  transform transition-transform group-hover:scale-110
                `}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2 text-white relative z-10"> {/* Changé de text-4xl à text-3xl */}
                  {stat.number}
                </h3>
                <p className="text-md font-medium text-white/90 relative z-10">{stat.label}</p> {/* Changé de text-lg à text-md */}
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  y: [-10, 10],
                  rotate: [-5, 5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.5,
                }}
                className="absolute -top-4 -right-4 text-secondary opacity-30"
              >
                <Star className="w-6 h-6" /> {/* Changé de w-8 h-8 à w-6 h-6 */}
              </motion.div>
              <motion.div
                animate={{
                  y: [10, -10],
                  rotate: [5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.7,
                }}
                className="absolute -bottom-4 -left-4 text-primary opacity-30"
              >
                <Cloud className="w-8 h-8" /> {/* Changé de w-10 h-10 à w-8 h-8 */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  );
}