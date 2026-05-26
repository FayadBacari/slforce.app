/**
 * Boutons de choix unique en ligne pour l'onboarding (genre).
 */

import { View, Text, Pressable } from 'react-native';
import { StepOption } from '@/features/auth/data/onboarding-types';
import { styles } from '@/features/auth/styles/onboarding.styles';

type Props = {
  value: string;
  onChange: (v: string) => void;
  options?: StepOption[];
};

export default function ChoiceStepInput({ value, onChange, options }: Props) {
  return (
    <View style={styles.onboarding__choices}>
      {options?.map((opt) => (
        <Pressable
          key={opt.label}
          style={[
            styles.onboarding__choiceButton,
            value === opt.label && styles['onboarding__choiceButton--active'],
          ]}
          onPress={() => onChange(opt.label)}
        >
          {opt.emoji && (
            <Text style={styles.onboarding__choiceEmoji}>{opt.emoji}</Text>
          )}
          <Text style={styles.onboarding__choiceLabel}>{opt.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
