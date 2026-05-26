/**
 * Zone de texte multi-lignes pour l'onboarding (presentation coach).
 */

import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Colors } from '@/shared/theme/theme';
import { styles } from '@/features/auth/styles/onboarding.styles';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  minLength?: number;
};

export default function TextareaStepInput({ value, onChange, placeholder, minLength }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.onboarding__textareaContainer}>
      <TextInput
        style={[
          styles.onboarding__textarea,
          isFocused && styles['onboarding__textarea--focused'],
        ]}
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={Colors.textPlaceholder}
        multiline
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <Text style={styles.onboarding__counter}>
        {`${value.length} / ${minLength} min`}
      </Text>
    </View>
  );
}
