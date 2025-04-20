import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-text text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Link href="/" className="flex items-center">
               
              </Link>
            </div>
            <div className="mb-4">
              <span className="text-2xl font-heading">
                <span className="text-primary">Atypik</span>
                <span className="text-secondary">Driver</span>
              </span>
              <p className="text-gray-300 mt-2">Pour des enfants exceptionnels</p>
            </div>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} />
              <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading mb-4">Liens</h3>
            <ul className="space-y-2">
              <li><FooterLink href="/">Accueil</FooterLink></li>
              <li><FooterLink href="/services">Services</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
              <li><FooterLink href="/mentions-legales">Mentions Légales</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-secondary" />
                <span>01 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-secondary" />
                <span>contact@atypikdriver.fr</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-secondary mt-1" />
                <span>123 Avenue des Accompagnateurs<br />75000 Paris</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
          <p> {new Date().getFullYear()} AtypikDriver. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="text-gray-300 hover:text-secondary transition-colors duration-200"
    >
      {children}
    </Link>
  );
}