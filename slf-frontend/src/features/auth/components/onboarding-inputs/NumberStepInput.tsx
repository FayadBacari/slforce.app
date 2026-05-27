// import all dependencies
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Colors } from '@/shared/theme/theme';
import { styles } from '@/features/auth/styles/onboarding.styles';

type Props = {
  value: string;
  onChange: (v: string) => void;
  unit?: string;
};


export default function NumberStepInput({ value, onChange, unit }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.onboarding__numberRow}>
      <View
        style={[
          styles.onboarding__numberField,
          isFocused && styles['onboarding__numberField--focused'],
        ]}
      >
        <TextInput
          style={styles.onboarding__numberInput}
          value={value}
          onChangeText={onChange}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor={Colors.textPlaceholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <Text style={styles.onboarding__numberUnit}>{unit}</Text>
    </View>
  );
}
