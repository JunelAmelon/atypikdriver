'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, UserCheck, Database } from 'lucide-react';

export default function PrivacyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-light py-20 pt-[180px] md:pt-40 lg:pt-48 xl:pt-56 2xl:pt-64">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
              Politique de <span className="text-primary">Confidentialité</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-12"
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Introduction</h2>
              </div>
              <p className="text-gray-600">
                La présente politique de confidentialité décrit comment Atypik Driver collecte, utilise et protège vos données personnelles lors de l'utilisation de nos services. Nous nous engageons à respecter votre vie privée conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </motion.div>

            {/* Données collectées */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <Database className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Données collectées</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li>Informations d'identification : nom, prénom, coordonnées (email, téléphone).</li>
                <li>Adresse postale pour l'organisation des trajets.</li>
                <li>Informations spécifiques aux enfants transportés (âge, besoins particuliers).</li>
                <li>Données de navigation (cookies, adresse IP) pour améliorer votre expérience utilisateur.</li>
              </ul>
            </motion.div>

            {/* Utilisation des données */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <Eye className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Utilisation des données</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Vos données sont utilisées uniquement dans le cadre suivant :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Organisation et gestion des trajets scolaires.</li>
                <li>Communication avec les familles.</li>
                <li>Amélioration continue de nos services.</li>
                <li>Respect des obligations légales et réglementaires.</li>
              </ul>
            </motion.div>

            {/* Protection des données */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Protection et sécurité</h2>
              </div>
              <p className="text-gray-600">
                Nous mettons en place toutes les mesures techniques et organisationnelles nécessaires pour protéger vos données contre tout accès, modification, divulgation ou destruction non autorisée.
              </p>
            </motion.div>

            {/* Droits des utilisateurs */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <UserCheck className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Vos droits</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Droit d'accès à vos données personnelles.</li>
                <li>Droit de rectification en cas d'erreur.</li>
                <li>Droit à l'effacement de vos données.</li>
                <li>Droit à la portabilité de vos informations.</li>
                <li>Droit d'opposition au traitement de vos données.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Pour exercer vos droits, contactez-nous à : <strong>contact@atypik-driver.com</strong>
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-heading font-bold text-dark mb-4">
                Une question sur notre politique de confidentialité ?
              </h2>
              <p className="text-gray-600 mb-6">
                Notre équipe est disponible pour répondre à toutes vos demandes concernant vos données personnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@atypik-driver.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Nous écrire
                </a>
                <a 
                  href="tel:+33611553051"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-dark font-medium rounded-lg border border-gray-200 transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +33 6 11 55 30 51
                </a>
              </div>
            </motion.div>

            {/* Footer info */}
            <motion.div variants={fadeInUp} className="text-center py-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
