export type StepType =
  | 'text'         // Free text field (username, city)
  | 'number'       // Numeric field + unit (weight, rate)
  | 'choice'       // Single choice buttons in row (gender)
  | 'chips'        // Single choice chips (weight category)
  | 'multi-chips'  // Multi-select chips with limit (disciplines)
  | 'select'       // Text field + preset chips (specialty)
  | 'textarea';    // Multi-line text area (presentation)

export type StepOption = {
  label: string;
  emoji?: string;
};

export type OnboardingStep = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;          
  type: StepType;
  placeholder?: string;
  unit?: string;          // 'kg', 'cm', '€/mois', 'ans'
  options?: StepOption[];
  maxSelect?: number;     
  minLength?: number;   
};
