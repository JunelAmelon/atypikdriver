'use client';

import { motion } from 'framer-motion';
import { Shield, Building, Mail, Phone, MapPin, Scale, Eye, Lock, FileText, AlertTriangle } from 'lucide-react';

export default function LegalPage() {
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
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
              Mentions <span className="text-primary">Légales</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Informations légales et conditions d'utilisation de notre service de transport scolaire
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
            {/* Éditeur du site */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Éditeur du site</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-dark mb-2">Raison sociale</h3>
                    <p className="text-gray-600">Atypik Driver</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-2">Forme juridique</h3>
                    <p className="text-gray-600">Société à Responsabilité Limitée</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-2">Capital social</h3>
                    <p className="text-gray-600">500,00 € (fixe)</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-2">SIRET</h3>
                    <p className="text-gray-600">94512334700011</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Adresse du siège social</h3>
                      <p className="text-gray-600">
                      6 CHEMIN DE LA BUTTE AU BEURRE<br />
                      78350 JOUY-EN-JOSAS
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Téléphone</h3>
                      <p className="text-gray-600">+33 6 11 55 30 51</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold text-dark mb-1">Email</h3>
                      <p className="text-gray-600">contact@atypik-driver.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Directeur de publication */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <FileText className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Directeur de publication</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600">
                  <strong className="text-dark">Directeur :</strong> Junel BOKO ASSOGBA<br />
                  <strong className="text-dark">Qualité :</strong> Responsable technique<br />
                  <strong className="text-dark">Contact :</strong> direction@atypik-driver.fr
                </p>
              </div>
            </motion.div>

            {/* Hébergement */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Hébergement</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  <strong className="text-dark">Hébergeur :</strong> IONOS<br />
                  <strong className="text-dark">Adresse :</strong> 7 PLACE DE LA GARE, 57200 SARREGUEMINES<br />
                  <strong className="text-dark">Téléphone :</strong> 0970808911
                </p>
                <div className="flex items-start bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <Shield className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-blue-800 text-sm">
                    Nos serveurs sont hébergés en France et respectent la réglementation RGPD
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Propriété intellectuelle</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p>
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                    <p className="text-amber-800 text-sm">
                      <strong>Important :</strong> Toute utilisation non autorisée du contenu de ce site peut faire l&apos;objet de poursuites judiciaires.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Protection des données */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <Lock className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Protection des données personnelles</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">Collecte des données</h3>
                  <p className="text-gray-600 mb-4">
                    Nous collectons uniquement les données nécessaires au bon fonctionnement de notre service :
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Informations de contact (nom, email, téléphone)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Adresse de domicile pour l&apos;organisation des trajets
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Informations sur les enfants (âge, besoins spécifiques)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-dark mb-3">Utilisation des données</h3>
                  <p className="text-gray-600">
                    Vos données sont utilisées exclusivement pour :
                  </p>
                  <ul className="space-y-2 text-gray-600 mt-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      L&apos;organisation et la gestion des trajets scolaires
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      La communication avec les familles
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      L&apos;amélioration de nos services
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 text-sm mb-2">
                        <strong>Vos droits RGPD :</strong>
                      </p>
                      <p className="text-green-700 text-sm">
                        Vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de portabilité de vos données. 
                        Pour exercer ces droits, contactez-nous à : <strong>contact@atypik-driver.com</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Responsabilité */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <AlertTriangle className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Limitation de responsabilité</h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p>
                  Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email à l&apos;adresse <strong className="text-dark">contact@atypik-driver.com</strong>, en décrivant le problème de la manière la plus précise possible.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 text-sm">
                    <strong>Clause de non-responsabilité :</strong> Atypik Driver ne pourra être tenu responsable des dommages directs et indirects causés au matériel de l&apos;utilisateur, lors de l&apos;accès au site.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Droit applicable */}
            <motion.div variants={fadeInUp} className="bg-white rounded-lg shadow-soft p-8">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-dark">Droit applicable et juridiction</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600">
                  Tout litige en relation avec l&apos;utilisation du site <strong className="text-dark">atypik-driver.fr</strong> est soumis au droit français. 
                  En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-heading font-bold text-dark mb-4">
                Une question sur nos mentions légales ?
              </h2>
              <p className="text-gray-600 mb-6">
                Notre équipe juridique est à votre disposition pour répondre à toutes vos questions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@atypik-driver.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Nous contacter
                </a>
                <a 
                  href="tel:+33 6 11 55 30 51"
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