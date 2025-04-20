import { ContactForm } from '@/components/contact/ContactForm';
import { HeroSection } from '@/components/contact/HeroSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact | Atypik Driver',
  description: 'Contactez-nous pour en savoir plus sur nos services de transport adapté pour enfants neuro-atypiques.',
};

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-heading mb-6">
                  Nos <span className="text-primary">coordonnées</span>
                </h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full text-primary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Téléphone</h3>
                      <p>01 23 45 67 89</p>
                      <p className="text-sm text-text/70">Du lundi au vendredi, 9h-18h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full text-primary flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email</h3>
                      <p>contact@atypikdriver.fr</p>
                      <p className="text-sm text-text/70">Réponse sous 24h ouvrées</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/20 p-3 rounded-full text-primary flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Adresse</h3>
                      <p>123 Avenue des Accompagnateurs</p>
                      <p>75000 Paris</p>
                      <p className="text-sm text-text/70">Sur rendez-vous uniquement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-xl mb-4">
                  <span className="text-primary">Question</span> fréquente
                </h3>
                <h4 className="font-bold mb-2">Comment fonctionne le service?</h4>
                <p className="mb-4 text-text/80">
                  Après inscription, nous analysons vos besoins de transport, identifions 
                  un chauffeur adapté, et établissons un planning régulier. Notre application 
                  vous permet de suivre les trajets en temps réel et de communiquer avec le chauffeur.
                </p>
                <a href="/faq" className="text-primary hover:text-secondary font-medium transition-colors">
                  Voir toutes les questions fréquentes →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}