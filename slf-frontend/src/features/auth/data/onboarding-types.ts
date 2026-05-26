/**
 * Types partages entre les onboardings athlete et coach.
 */

export type StepType =
  | 'text'         // Champ texte libre (pseudo, ville)
  | 'number'       // Champ numerique + unite (poids, tarif)
  | 'choice'       // Boutons de choix unique en ligne (genre)
  | 'chips'        // Pastilles a choix unique (categorie)
  | 'multi-chips'  // Pastilles multi-selection avec limite (disciplines)
  | 'select'       // Champ texte + pastilles pre-remplies (specialite)
  | 'textarea';    // Zone de texte multi-lignes (presentation)

export type StepOption = {
  label: string;
  emoji?: string;
};

export type OnboardingStep = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;          // emoji, ou 'avatar' pour l'icone personne
  type: StepType;
  placeholder?: string;
  unit?: string;          // 'kg', 'cm', '€/mois', 'ans'
  options?: StepOption[];
  maxSelect?: number;     // nombre max de selections (multi-chips)
  minLength?: number;     // longueur min du texte (textarea)
};
