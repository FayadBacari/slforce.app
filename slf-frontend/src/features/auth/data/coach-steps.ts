/**
 * Configuration des 7 etapes d'onboarding coach.
 */

import { OnboardingStep } from './onboarding-types';

export const COACH_STEPS: OnboardingStep[] = [
  {
    id: 'coachName',
    title: 'Ton nom de coach',
    subtitle: 'Comment veux-tu être affiché sur la plateforme ?',
    icon: 'avatar',
    type: 'text',
    placeholder: 'Ex: Coach Alex',
  },
  {
    id: 'specialty',
    title: 'Ta spécialité',
    subtitle: 'Dans quel domaine es-tu expert ?',
    icon: '⭐',
    type: 'select',
    placeholder: 'Sélectionne ta spécialité',
    options: [
      { label: 'Calisthenics' },
      { label: 'Autre' },
    ],
  },
  {
    id: 'city',
    title: 'Ta ville',
    subtitle: 'Où exerces-tu ton activité ?',
    icon: '📍',
    type: 'text',
    placeholder: 'Ex: Paris',
  },
  {
    id: 'rate',
    title: 'Ton tarif',
    subtitle: 'Combien factures-tu par mois ?',
    icon: '💰',
    type: 'number',
    unit: '€/mois',
  },
  {
    id: 'experience',
    title: 'Ton expérience',
    subtitle: "Depuis combien d'années coaches-tu ?",
    icon: '🏆',
    type: 'number',
    unit: 'ans',
  },
  {
    id: 'presentation',
    title: 'Ta présentation',
    subtitle: 'Décris-toi en quelques mots pour tes futurs athlètes',
    icon: '📝',
    type: 'textarea',
    placeholder: 'Ex: Coach spécialisé en Street Lifting depuis 5 ans...',
    minLength: 20,
  },
  {
    id: 'disciplines',
    title: 'Tes disciplines',
    subtitle: "Sélectionne jusqu'à 2 disciplines que tu enseignes",
    icon: '💪',
    type: 'multi-chips',
    maxSelect: 2,
    options: [
      { label: 'Street-Lifting' },
      { label: 'Endurance' },
      { label: 'Freestyle' },
      { label: 'Crossfit' },
      { label: 'Powerlifting' },
      { label: 'Calisthenics' },
      { label: 'Body-Building' },
      { label: 'Athlétisme' },
    ],
  },
];
