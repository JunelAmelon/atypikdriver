'use client';

import { Users, Heart, BarChart3, Star, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "500+",
    label: "Familles accompagnées",
    color: "from-primary/20 to-primary/40",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    number: "98%",
    label: "Taux de satisfaction",
    color: "from-secondary/20 to-secondary/40",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    number: "120€",
    label: "Prix mensuel moyen",
    color: "from-primary/20 to-secondary/20",
  }
];

export function StatsSection() {
  return (
    <section className="py-16 bg-white relative overflow-hidden"> {/* Changé de py-24 à py-16 */}
      <div className="container-custom relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading text-center mb-12" /* Changé de mb-16 à mb-12 */
        >
          Notre <span className="text-primary">impact</span>
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
                relative z-10 bg-white rounded-2xl p-6 shadow-lg /* Changé de p-8 à p-6 */
                transform transition-all duration-300
                group-hover:-translate-y-2 group-hover:shadow-xl
              `}>
                <div className={`
                  w-14 h-14 mb-4 rounded-xl /* Changé de w-16/h-16/mb-6 à w-14/h-14/mb-4 */
                  bg-gradient-to-br ${stat.color}
                  flex items-center justify-center
                  transform transition-transform group-hover:scale-110
                `}>
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> {/* Changé de text-4xl à text-3xl */}
                  {stat.number}
                </h3>
                <p className="text-md text-text/70">{stat.label}</p> {/* Changé de text-lg à text-md */}
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