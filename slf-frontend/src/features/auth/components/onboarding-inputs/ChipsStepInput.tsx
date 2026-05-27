// import all dependencies
import { View, Text, Pressable } from 'react-native';
import { StepOption } from '@/features/auth/data/onboarding-types';
import { styles } from '@/features/auth/styles/onboarding.styles';

type Props = {
  value: string;
  onChange: (v: string) => void;
  options?: StepOption[];
};


export default function ChipsStepInput({ value, onChange, options }: Props) {
  return (
    <View style={styles.onboarding__chips}>
      {options?.map((opt) => {
        const isActive = value === opt.label;
        return (
          <Pressable
            key={opt.label}
            style={[
              styles.onboarding__chip,
              isActive && styles['onboarding__chip--active'],
            ]}
            onPress={() => onChange(opt.label)}
          >
            <Text
              style={[
                styles.onboarding__chipText,
                isActive && styles['onboarding__chipText--active'],
              ]}
            >
              {opt.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
