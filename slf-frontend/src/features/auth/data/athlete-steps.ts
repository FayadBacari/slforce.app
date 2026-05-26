/**
 * Configuration des 9 etapes d'onboarding athlete.
 */

import { OnboardingStep } from './onboarding-types';

export const ATHLETE_STEPS: OnboardingStep[] = [
  {
    id: 'pseudo',
    title: 'Ton pseudo',
    subtitle: 'Comment veux-tu être affiché sur la plateforme ?',
    icon: 'avatar',
    type: 'text',
    placeholder: 'Ex: AthleteMax',
  },
  {
    id: 'gender',
    title: 'Ton genre',
    subtitle: 'Nécessaire pour les catégories de compétition',
    icon: '⚧️',
    type: 'choice',
    options: [
      { label: 'Homme', emoji: '👨' },
      { label: 'Femme', emoji: '🔥' },
    ],
  },
  {
    id: 'category',
    title: 'Ta catégorie',
    subtitle: 'Ta catégorie de poids en Street Lifting',
    icon: '⚖️',
    type: 'chips',
    options: [
      { label: '-66 kg' },
      { label: '-73 kg' },
      { label: '-80 kg' },
      { label: '-87 kg' },
      { label: '-94 kg' },
      { label: '-104 kg' },
      { label: '+104 kg' },
    ],
  },
  {
    id: 'weight',
    title: 'Ton poids',
    subtitle: 'Ton poids actuel',
    icon: '⚖️',
    type: 'number',
    unit: 'kg',
  },
  {
    id: 'height',
    title: 'Ta taille',
    subtitle: 'Ta taille en centimètres',
    icon: '📏',
    type: 'number',
    unit: 'cm',
  },
  {
    id: 'muscleUp',
    title: 'Muscle Up',
    subtitle: 'Ton meilleur record en Muscle Up lestage (kg)',
    icon: '🏋️',
    type: 'number',
    unit: 'kg',
  },
  {
    id: 'pullUps',
    title: 'Tractions',
    subtitle: 'Ton meilleur record en Tractions lestage (kg)',
    icon: '🧗',
    type: 'number',
    unit: 'kg',
  },
  {
    id: 'dips',
    title: 'Dips',
    subtitle: 'Ton meilleur record en Dips lestage (kg)',
    icon: '💪',
    type: 'number',
    unit: 'kg',
  },
  {
    id: 'squat',
    title: 'Squat',
    subtitle: 'Ton meilleur record en Squat (kg)',
    icon: '🏋️',
    type: 'number',
    unit: 'kg',
  },
];
