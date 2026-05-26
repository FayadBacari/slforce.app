/**
 * Champ texte + pastilles pre-remplies pour l'onboarding (specialite).
 */

import { View, Text, Pressable } from 'react-native';
import AppTextInput from '@/shared/components/AppTextInput';
import { StepOption } from '@/features/auth/data/onboarding-types';
import { styles } from '@/features/auth/styles/onboarding.styles';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  options?: StepOption[];
};

export default function SelectStepInput({ value, onChange, placeholder, options }: Props) {
  return (
    <>
      <View style={styles.onboarding__textInput}>
        <AppTextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
        />
      </View>
      <View style={styles.onboarding__choices}>
        {options?.map((opt) => (
          <Pressable
            key={opt.label}
            style={[
              styles.onboarding__choiceButton,
              value === opt.label && styles['onboarding__choiceButton--active'],
            ]}
            onPress={() => onChange(opt.label === 'Autre' ? '' : opt.label)}
          >
            <Text style={styles.onboarding__choiceLabel}>{opt.label}</Text>
          </Pressable>
        ))}
      </View>
    </>
  );
}
