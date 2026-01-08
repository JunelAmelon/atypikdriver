'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Loader2, User, Mail, Phone, MapPin, Users, Car, Calendar, MessageCircle, ChevronRight, ChevronLeft, Check, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide').max(15),
  address: z.string().min(5, 'Adresse trop courte'),
  profileType: z.enum(['parent', 'chauffeur'], {
    required_error: 'Veuillez sélectionner votre profil'
  }),
  childrenCount: z.string().optional(),
  childSpecialNeeds: z.string().optional(),
  preferredSchedule: z.string().optional(),
  childAge: z.string().optional(),
  childAutonomyLevel: z.enum(['autonome', 'semi-autonome', 'dépendant']).optional(),
  hasAllergies: z.enum(['oui', 'non']).optional(),
  allergyDetails: z.string().optional(),
  experience: z.string().optional(),
  vehicleType: z.enum(['berline', 'monospace', 'van', 'autre']).optional(),
  licenseYears: z.string().optional(),
  hasVehicle: z.enum(['oui', 'non']).optional(),
  hasCriminalRecord: z.enum(['oui', 'non']).optional(),
  hasFirstAidTraining: z.enum(['oui', 'non']).optional(),
  availableDays: z.array(z.string()).optional(),
  motivation: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type FormValues = z.infer<typeof formSchema>;

// Configuration EmailJS
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'TyfUIOOjSF2kbLmzi',
  SERVICE_ID: 'service_pvwznn4',
  TEMPLATE_ID: 'template_x3w10xd',
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [profileType, setProfileType] = useState<'parent' | 'chauffeur'>('parent');
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const currentProfileType = watch('profileType');
  const availableDays = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

  // Initialiser EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  // Mettre à jour l'état local du profil
  useEffect(() => {
    if (currentProfileType) {
      setProfileType(currentProfileType);
    }
  }, [currentProfileType]);

  // Nettoyer les champs selon le profil sélectionné
  useEffect(() => {
    if (currentProfileType) {
      if (currentProfileType !== 'parent') {
        setValue('childrenCount', undefined);
        setValue('childSpecialNeeds', undefined);
        setValue('preferredSchedule', undefined);
        setValue('childAge', undefined);
        setValue('childAutonomyLevel', undefined);
        setValue('hasAllergies', undefined);
        setValue('allergyDetails', undefined);
      }
      if (currentProfileType !== 'chauffeur') {
        setValue('experience', undefined);
        setValue('vehicleType', undefined);
        setValue('licenseYears', undefined);
        setValue('hasVehicle', undefined);
        setValue('hasCriminalRecord', undefined);
        setValue('hasFirstAidTraining', undefined);
        setValue('availableDays', undefined);
        setValue('motivation', undefined);
      }
    }
  }, [currentProfileType, setValue]);

  // Fonction pour formater les données pour l'email
  const formatEmailData = (data: FormValues) => {
    const now = new Date();
    
    // Données de base (toujours présentes)
    const baseData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      profileType: data.profileType === 'parent' ? 'Parent' : 'Chauffeur',
      message: data.message,
      date: now.toLocaleDateString('fr-FR'),
      time: now.toLocaleTimeString('fr-FR'),
    };

    // Variables pour parents (seulement si c'est un parent)
    const parentData = data.profileType === 'parent' ? {
      childrenCount: data.childrenCount || '',
      childAge: data.childAge || '',
      childAutonomyLevel: data.childAutonomyLevel || '',
      hasAllergies: data.hasAllergies || '',
      allergyDetails: data.allergyDetails || '',
      preferredSchedule: data.preferredSchedule || '',
      childSpecialNeeds: data.childSpecialNeeds || '',
    } : {
      childrenCount: '',
      childAge: '',
      childAutonomyLevel: '',
      hasAllergies: '',
      allergyDetails: '',
      preferredSchedule: '',
      childSpecialNeeds: '',
    };

    // Variables pour chauffeurs (seulement si c'est un chauffeur)
    const chauffeurData = data.profileType === 'chauffeur' ? {
      experience: data.experience || '',
      vehicleType: data.vehicleType || '',
      licenseYears: data.licenseYears || '',
      hasVehicle: data.hasVehicle || '',
      hasCriminalRecord: data.hasCriminalRecord || '',
      hasFirstAidTraining: data.hasFirstAidTraining || '',
      availableDays: data.availableDays?.join(', ') || '',
      motivation: data.motivation || '',
    } : {
      experience: '',
      vehicleType: '',
      licenseYears: '',
      hasVehicle: '',
      hasCriminalRecord: '',
      hasFirstAidTraining: '',
      availableDays: '',
      motivation: '',
    };

    return {
      ...baseData,
      ...parentData,
      ...chauffeurData
    };
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const emailData = formatEmailData(data);
      console.log('📧 Données envoyées à EmailJS:', emailData);
      
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        emailData
      );

      if (result.status === 200) {
        toast.success('Votre message a bien été envoyé !');
        setIsSuccess(true);
        reset();
        // Retour à l'étape 1 après 3 secondes
        setTimeout(() => {
          setStep(1);
          setIsSuccess(false);
        }, 3000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('❌ Erreur EmailJS:', error);
      toast.error('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  // Validation par étape
  const validateStep = async (stepNumber: number): Promise<boolean> => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    
    switch (stepNumber) {
      case 1:
        fieldsToValidate = ['name', 'email', 'phone', 'address', 'profileType'];
        break;
      case 2:
        return true; // Pas de validation obligatoire pour l'étape 2
      case 3:
        fieldsToValidate = ['message'];
        break;
      default:
        return true;
    }
    
    try {
      const result = await trigger(fieldsToValidate);
      return result;
    } catch (error) {
      console.error('Erreur de validation:', error);
      return false;
    }
  };

  const handleNextStep = async () => {
    const isValid = await validateStep(step);
    if (isValid) {
      nextStep();
    } else {
      toast.error('Veuillez corriger les erreurs avant de continuer');
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header avec progression */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-3">
            Nous <span className="text-primary">contacter</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Remplissez ce formulaire pour nous faire part de vos besoins. Nous vous recontacterons rapidement.
          </p>
          
          {/* Barre de progression */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    step >= stepNumber
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step > stepNumber ? <Check size={16} /> : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-12 h-1 mx-2 rounded-full transition-all duration-300 ${
                      step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Formulaire principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-6 md:p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AnimatePresence mode="wait">
              {/* Étape 1 : Informations de base */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-heading font-bold text-dark mb-2">
                      Informations personnelles
                    </h2>
                    <p className="text-gray-600">Commençons par vos informations de base</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Nom */}
                    <div className="group">
                      <label htmlFor="name" className="flex items-center text-sm font-medium text-dark mb-2">
                        <User className="w-4 h-4 mr-2 text-primary" />
                        Nom complet
                      </label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          {...register('name')}
                          placeholder="Votre nom complet"
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all duration-300 ${
                            errors.name 
                              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                              : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                          }`}
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-500"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="flex items-center text-sm font-medium text-dark mb-2">
                        <Mail className="w-4 h-4 mr-2 text-primary" />
                        Adresse email
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder="votre@email.com"
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all duration-300 ${
                            errors.email 
                              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                              : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                          }`}
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-500"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="group">
                      <label htmlFor="phone" className="flex items-center text-sm font-medium text-dark mb-2">
                        <Phone className="w-4 h-4 mr-2 text-primary" />
                        Numéro de téléphone
                      </label>
                      <div className="relative">
                        <input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          placeholder="06 12 34 56 78"
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all duration-300 ${
                            errors.phone 
                              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                              : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                          }`}
                        />
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-500"
                          >
                            {errors.phone.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Adresse */}
                    <div className="group">
                      <label htmlFor="address" className="flex items-center text-sm font-medium text-dark mb-2">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        Adresse
                      </label>
                      <div className="relative">
                        <input
                          id="address"
                          type="text"
                          {...register('address')}
                          placeholder="Votre adresse complète"
                          className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all duration-300 ${
                            errors.address 
                              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                              : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                          }`}
                        />
                        {errors.address && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-sm text-red-500"
                          >
                            {errors.address.message}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Type de profil */}
                  <div className="mt-6">
                    <label className="flex items-center text-sm font-medium text-dark mb-3">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      Vous êtes
                    </label>
                    {errors.profileType && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-3 text-sm text-red-500"
                      >
                        {errors.profileType.message}
                      </motion.p>
                    )}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          watch('profileType') === 'parent' 
                            ? 'bg-primary/10 border-primary text-primary' 
                            : errors.profileType
                            ? 'bg-white border-red-400 text-gray-700'
                            : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
                        }`}
                      >
                        <input 
                          type="radio" 
                          value="parent" 
                          className="sr-only"
                          {...register('profileType')} 
                        />
                        <div className="text-center">
                          <Users className="w-6 h-6 mx-auto mb-1" />
                          <span className="font-semibold">Parent</span>
                          <p className="text-xs opacity-75">Je cherche un chauffeur</p>
                        </div>
                      </motion.label>
                      
                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                          watch('profileType') === 'chauffeur' 
                            ? 'bg-primary/10 border-primary text-primary' 
                            : errors.profileType
                            ? 'bg-white border-red-400 text-gray-700'
                            : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'
                        }`}
                      >
                        <input 
                          type="radio" 
                          value="chauffeur" 
                          className="sr-only"
                          {...register('profileType')} 
                        />
                        <div className="text-center">
                          <Car className="w-6 h-6 mx-auto mb-1" />
                          <span className="font-semibold">Chauffeur</span>
                          <p className="text-xs opacity-75">Je propose mes services</p>
                        </div>
                      </motion.label>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Étape 2 : Informations spécifiques */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-heading font-bold text-dark mb-2">
                      {profileType === 'parent' ? 'Informations sur vos enfants' : 'Vos qualifications'}
                    </h2>
                    <p className="text-gray-600">
                      {profileType === 'parent' 
                        ? 'Parlez-nous de vos enfants et de vos besoins'
                        : 'Détaillez votre expérience et vos compétences'
                      }
                    </p>
                  </div>

                  {profileType === 'parent' ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="childrenCount" className="block text-sm font-medium text-dark mb-2">
                          Nombre d'enfants
                        </label>
                        <select
                          id="childrenCount"
                          {...register('childrenCount')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="1">1 enfant</option>
                          <option value="2">2 enfants</option>
                          <option value="3">3 enfants</option>
                          <option value="4">4 enfants</option>
                          <option value="5+">5 enfants ou plus</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="childAge" className="block text-sm font-medium text-dark mb-2">
                          Âge(s) des enfants
                        </label>
                        <input
                          id="childAge"
                          type="text"
                          {...register('childAge')}
                          placeholder="Ex: 3, 6 et 10 ans"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label htmlFor="childAutonomyLevel" className="block text-sm font-medium text-dark mb-2">
                          Niveau d'autonomie
                        </label>
                        <select
                          id="childAutonomyLevel"
                          {...register('childAutonomyLevel')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="autonome">Autonome</option>
                          <option value="semi-autonome">Semi-autonome</option>
                          <option value="dépendant">Dépendant</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="hasAllergies" className="block text-sm font-medium text-dark mb-2">
                          Allergies
                        </label>
                        <select
                          id="hasAllergies"
                          {...register('hasAllergies')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="oui">Oui</option>
                          <option value="non">Non</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="preferredSchedule" className="block text-sm font-medium text-dark mb-2">
                          Horaires souhaités
                        </label>
                        <input
                          id="preferredSchedule"
                          type="text"
                          {...register('preferredSchedule')}
                          placeholder="Ex: 8h-17h, après-midi uniquement..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="childSpecialNeeds" className="block text-sm font-medium text-dark mb-2">
                          Besoins spécifiques
                        </label>
                        <textarea
                          id="childSpecialNeeds"
                          {...register('childSpecialNeeds')}
                          placeholder="Décrivez les besoins spécifiques de vos enfants..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                          rows={4}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-dark mb-2">
                          Expérience
                        </label>
                        <input
                          id="experience"
                          type="text"
                          {...register('experience')}
                          placeholder="Ex: 5 ans"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label htmlFor="licenseYears" className="block text-sm font-medium text-dark mb-2">
                          Années de permis
                        </label>
                        <input
                          id="licenseYears"
                          type="text"
                          {...register('licenseYears')}
                          placeholder="Ex: 10"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label htmlFor="vehicleType" className="block text-sm font-medium text-dark mb-2">
                          Type de véhicule
                        </label>
                        <select
                          id="vehicleType"
                          {...register('vehicleType')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="berline">Berline</option>
                          <option value="monospace">Monospace</option>
                          <option value="van">Van</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="hasVehicle" className="block text-sm font-medium text-dark mb-2">
                          Possède un véhicule
                        </label>
                        <select
                          id="hasVehicle"
                          {...register('hasVehicle')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="oui">Oui</option>
                          <option value="non">Non</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="hasCriminalRecord" className="block text-sm font-medium text-dark mb-2">
                          Casier judiciaire vierge
                        </label>
                        <select
                          id="hasCriminalRecord"
                          {...register('hasCriminalRecord')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="oui">Oui</option>
                          <option value="non">Non</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="hasFirstAidTraining" className="block text-sm font-medium text-dark mb-2">
                          Formation premiers secours
                        </label>
                        <select
                          id="hasFirstAidTraining"
                          {...register('hasFirstAidTraining')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="oui">Oui</option>
                          <option value="non">Non</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-dark mb-3">
                          <Calendar className="w-4 h-4 inline mr-2 text-primary" />
                          Jours disponibles
                        </label>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                          {availableDays.map((day) => (
                            <motion.label
                              key={day}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center justify-center p-2 border border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/10 transition-all duration-300"
                            >
                              <input 
                                type="checkbox" 
                                value={day} 
                                {...register('availableDays')} 
                                className="sr-only"
                              />
                              <span className="text-sm font-medium">{day}</span>
                            </motion.label>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="motivation" className="block text-sm font-medium text-dark mb-2">
                          Votre motivation
                        </label>
                        <textarea
                          id="motivation"
                          {...register('motivation')}
                          placeholder="Expliquez votre motivation à devenir chauffeur..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                          rows={4}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Étape 3 : Message final */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-heading font-bold text-dark mb-2">
                      Votre message
                    </h2>
                    <p className="text-gray-600">
                      Ajoutez toute information complémentaire que vous souhaitez partager
                    </p>
                  </div>

                  <div>
                    <label htmlFor="message" className="flex items-center text-sm font-medium text-dark mb-2">
                      <MessageCircle className="w-4 h-4 mr-2 text-primary" />
                      Message détaillé
                    </label>
                    <textarea
                      id="message"
                      rows={8}
                      {...register('message')}
                      placeholder="Décrivez vos besoins, vos attentes, ou toute information que vous jugez importante..."
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none transition-all duration-300 resize-none ${
                        errors.message 
                          ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                          : 'border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20'
                      }`}
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 text-sm text-red-500"
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            {!isSuccess && (
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              {step > 1 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Précédent
                </motion.button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleNextStep}
                  className="flex items-center px-6 py-2 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-all duration-300"
                >
                  Suivant
                  <ChevronRight className="w-4 h-4 ml-2" />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center px-6 py-2 bg-primary hover:bg-secondary text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              )}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}