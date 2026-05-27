// import all dependencies
import { router } from 'expo-router';
import { Colors } from '@/shared/theme/theme';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardingStep } from '@/features/auth/data/onboarding-types';
import { useOnboardingAnswers } from '@/features/auth/hooks/useOnboardingAnswers';

// import all components
import AppButton from '@/shared/components/AppButton';

// import styles
import { styles } from '@/features/auth/styles/onboarding.styles';

// Step input sub-components
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

  // Wait for answers to be loaded from AsyncStorage
  if (!loaded) return null;

  // Current step info
  const current = steps[step];
  const total = steps.length;
  const isFirst = step === 0;
  const isLast = step === total - 1;
  const value = answers[current.id] || '';
  const progress = ((step + 1) / total) * 100;

  // Updates the current step answer
  const handleChange = (v: string) => setValue(current.id, v);

  // Navigation
  const handleNext = () => {
    if (isLast) {
      clearAnswers();
      // TODO: send answers to backend
      router.replace('/(auth)/login');
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  return (
    <SafeAreaView style={styles.onboarding}>
      {/* Progress bar */}
      <View style={styles.onboarding__progressBar}>
        <View
          style={[styles.onboarding__progressFill, { width: `${progress}%` }]}
        />
      </View>

      {/* Step indicator */}
      <Text style={styles.onboarding__step}>{`${step + 1} / ${total}`}</Text>

      {/* Main content */}
      <View style={styles.onboarding__content}>
        {/* Icon */}
        <View style={styles.onboarding__iconContainer}>
          {current.icon === 'avatar' ? (
            <Ionicons name="person" size={40} color={Colors.textSecondary} />
          ) : (
            <Text style={styles.onboarding__icon}>{current.icon}</Text>
          )}
        </View>

        {/* Title + subtitle */}
        <Text style={styles.onboarding__title}>{current.title}</Text>
        <Text style={styles.onboarding__subtitle}>{current.subtitle}</Text>

        {/* Input based on step type */}
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

      {/* Bottom buttons */}
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
