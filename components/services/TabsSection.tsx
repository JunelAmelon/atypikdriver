'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParentsTab } from './ParentsTab';
import { DriversTab } from './DriversTab';

const tabs = [
  { id: 'parents', label: 'Parents' },
  { id: 'drivers', label: 'Chauffeurs' },
];

export function TabsSection() {
  const [activeTab, setActiveTab] = useState('parents');

  return (
    <section className="pt-52 pb-16 md:pt-48 lg:pt-56 xl:pt-64">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-heading text-center mb-12">
          Nos <span className="text-primary">services</span>
        </h1>
        
        <div className="mb-8 flex justify-center">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2 text-lg font-medium rounded-md transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-primary text-white' 
                    : 'text-text hover:text-primary'
                }`}
              >
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'parents' ? <ParentsTab /> : <DriversTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}