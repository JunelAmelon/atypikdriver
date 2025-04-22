'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      submenu: [
        { label: 'Offre Parents', href: '/offres/parents' },
        { label: 'Offre Chauffeurs', href: '/offres/chauffeurs' },
      ],
    },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
<header className="absolute top-0 left-0 right-0 z-50 pb-10 md:pb-10">
      <div className="container-custom py-6">
        <nav className="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-4 py-3">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
             <Link href="/" className="flex items-center">
  <img 
    src="images/logos/logo-atypik.png" 
                alt="AtypikDriver Logo"
    className="h-full w-auto max-w-[120px]" // Taille du logo augmentée de 80px à 120px
              />
            </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.submenu ? (
                    <div 
                      className="flex items-center gap-1 cursor-pointer text-text hover:text-primary"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown size={16} />
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 ${isServicesOpen ? 'block' : 'hidden'}`}>
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden min-w-[200px]">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block px-6 py-3 hover:bg-background transition-colors duration-200"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      className="text-text hover:text-primary font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Bouton de connexion */}
              <Link href="#" className="bg-gradient-to-r from-primary to-secondary text-white font-medium py-2 px-6 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <span>Connexion</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md text-text" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div className="px-6 py-3">
                      <div 
                        className="flex items-center justify-between cursor-pointer text-text hover:text-primary"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </div>
                      {isServicesOpen && (
                        <div className="mt-2 pl-4 border-l-2 border-primary/20">
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.href}
                              className="block py-2 text-text hover:text-primary transition-colors duration-200"
                              onClick={toggleMenu}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      href={item.href}
                      className="block px-6 py-3 text-text hover:text-primary font-medium transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Bouton de connexion mobile */}
              <div className="px-6 py-3 mt-2">
                <Link 
                  href="#" 
                  className="block bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 px-6 rounded-lg text-center hover:shadow-md transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Connexion
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>

 
  );
}