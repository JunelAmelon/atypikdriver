'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/shared/Button';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide').max(15),
  address: z.string().min(5, 'Adresse trop courte'),
  profileType: z.enum(['parent', 'chauffeur']),
  childrenCount: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profileType, setProfileType] = useState<'parent' | 'chauffeur'>('parent');
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Votre message a bien été envoyé!');
    console.log('Données du formulaire:', data);
    reset();
    setIsSubmitting(false);
  };
  
  // Observer les changements du type de profil
  const currentProfileType = watch('profileType');
  
  useEffect(() => {
    if (currentProfileType) {
      setProfileType(currentProfileType);
      
      // Réinitialiser le nombre d'enfants si le profil n'est pas parent
      if (currentProfileType !== 'parent') {
        setValue('childrenCount', '');
      }
    }
  }, [currentProfileType, setValue]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-heading mb-6">
        Nous <span className="text-primary">contacter</span>
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="Votre nom"
            {...register('name')}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="votre@email.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Numéro de téléphone
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="06 12 34 56 78"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="address" className="block text-sm font-medium mb-2">
            Adresse
          </label>
          <input
            id="address"
            type="text"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.address ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="Votre adresse complète"
            {...register('address')}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">
            Vous êtes
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className={`flex items-center justify-center p-3 border rounded-md cursor-pointer transition-colors ${profileType === 'parent' ? 'bg-primary/10 border-primary' : 'bg-white border-gray-300'}`}>
              <input
                type="radio"
                value="parent"
                className="sr-only"
                {...register('profileType')}
              />
              <span>Parent</span>
            </label>
            <label className={`flex items-center justify-center p-3 border rounded-md cursor-pointer transition-colors ${profileType === 'chauffeur' ? 'bg-primary/10 border-primary' : 'bg-white border-gray-300'}`}>
              <input
                type="radio"
                value="chauffeur"
                className="sr-only"
                {...register('profileType')}
              />
              <span>Chauffeur</span>
            </label>
          </div>
        </div>
        
        {profileType === 'parent' && (
          <div>
            <label htmlFor="childrenCount" className="block text-sm font-medium mb-2">
              Nombre d'enfants
            </label>
            <select
              id="childrenCount"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.childrenCount ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
              }`}
              {...register('childrenCount')}
            >
              <option value="">Sélectionnez</option>
              <option value="1">1 enfant</option>
              <option value="2">2 enfants</option>
              <option value="3">3 enfants</option>
              <option value="4">4 enfants</option>
              <option value="5+">5 enfants ou plus</option>
            </select>
            {errors.childrenCount && (
              <p className="mt-1 text-sm text-red-500">{errors.childrenCount.message}</p>
            )}
          </div>
        )}
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary'
            }`}
            placeholder="Votre message..."
            {...register('message')}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} /> 
                Envoi en cours...
              </>
            ) : (
              'Envoyer'
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}