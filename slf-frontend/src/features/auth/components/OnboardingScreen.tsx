/**
 * Composant partage pour les ecrans d'onboarding (athlete + coach).
 * Gere la navigation entre les etapes et affiche le bon type d'input.
 */

import { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '@/shared/theme/theme';
import AppButton from '@/shared/components/AppButton';
import { OnboardingStep } from '@/features/auth/data/onboarding-types';
import { useOnboardingAnswers } from '@/features/auth/hooks/useOnboardingAnswers';
import { styles } from '@/features/auth/styles/onboarding.styles';

// Sous-composants d'input
import TextStepInput from './onboarding-inputs/TextStepInput';
import NumberStepInput from './onboarding-inputs/NumberStepInput';
import ChoiceStepInput from './onboarding-inputs/ChoiceStepInput';
import ChipsStepInput from './onboarding-inputs/ChipsStepInput';
import SelectStepInput from './onboarding-inputs/SelectStepInput';
import TextareaStepInput from './onboarding-inputs/TextareaStepInput';
import MultiChipsStepInput from './onboarding-inputs/MultiChipsStepInput';

type Props = {
  steps: OnboardingStep[];
  storageKey: string; // 'athlete' ou 'coach'
};

export default function OnboardingScreen({ steps, storageKey }: Props) {
  const [step, setStep] = useState(0);
  const { answers, setValue, clearAnswers, loaded } = useOnboardingAnswers(storageKey);

  // Attend que les reponses soient chargees depuis AsyncStorage
  if (!loaded) return null;

  // Infos de l'etape courante
  const current = steps[step];
  const total = steps.length;
  const isFirst = step === 0;
  const isLast = step === total - 1;
  const value = answers[current.id] || '';
  const progress = ((step + 1) / total) * 100;

  // Met a jour la reponse de l'etape courante
  const handleChange = (v: string) => setValue(current.id, v);

  // Navigation
  const handleNext = () => {
    if (isLast) {
      clearAnswers();
      // TODO: envoyer les reponses au backend
      router.replace('/(auth)/login');
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  return (
    <SafeAreaView style={styles.onboarding}>
      {/* Barre de progression */}
      <View style={styles.onboarding__progressBar}>
        <View
          style={[styles.onboarding__progressFill, { width: `${progress}%` }]}
        />
      </View>

      {/* Indicateur d'etape */}
      <Text style={styles.onboarding__step}>{`${step + 1} / ${total}`}</Text>

      {/* Contenu central */}
      <View style={styles.onboarding__content}>
        {/* Icone */}
        <View style={styles.onboarding__iconContainer}>
          {current.icon === 'avatar' ? (
            <Ionicons name="person" size={40} color={Colors.textSecondary} />
          ) : (
            <Text style={styles.onboarding__icon}>{current.icon}</Text>
          )}
        </View>

        {/* Titre + sous-titre */}
        <Text style={styles.onboarding__title}>{current.title}</Text>
        <Text style={styles.onboarding__subtitle}>{current.subtitle}</Text>

        {/* Input selon le type */}
        {current.type === 'text' && (
          <TextStepInput value={value} onChange={handleChange} placeholder={current.placeholder} />
        )}
        {current.type === 'number' && (
          <NumberStepInput value={value} onChange={handleChange} unit={current.unit} />
        )}
        {current.type === 'choice' && (
          <ChoiceStepInput value={value} onChange={handleChange} options={current.options} />
        )}
        {current.type === 'chips' && (
          <ChipsStepInput value={value} onChange={handleChange} options={current.options} />
        )}
        {current.type === 'select' && (
          <SelectStepInput value={value} onChange={handleChange} placeholder={current.placeholder} options={current.options} />
        )}
        {current.type === 'textarea' && (
          <TextareaStepInput value={value} onChange={handleChange} placeholder={current.placeholder} minLength={current.minLength} />
        )}
        {current.type === 'multi-chips' && (
          <MultiChipsStepInput value={value} onChange={handleChange} options={current.options} maxSelect={current.maxSelect} />
        )}
      </View>

      {/* Boutons en bas */}
      <View style={styles.onboarding__footer}>
        {!isFirst && (
          <AppButton title="← Retour" variant="ghost" onPress={handleBack} />
        )}
        <View style={styles.onboarding__footerNext}>
          <AppButton
            title={isLast ? 'Terminer' : 'Suivant →'}
            variant={isLast ? 'primary' : 'secondary'}
            onPress={handleNext}
            disabled={!value}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
