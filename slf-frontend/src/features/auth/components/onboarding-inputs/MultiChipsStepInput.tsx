// import all dependencies
import { View, Text, Pressable } from 'react-native';
import { StepOption } from '@/features/auth/data/onboarding-types';
import { styles } from '@/features/auth/styles/onboarding.styles';

type Props = {
  value: string;
  onChange: (v: string) => void;
  options?: StepOption[];
  maxSelect?: number;
};


export default function MultiChipsStepInput({ value, onChange, options, maxSelect = 2 }: Props) {
  // Converts value string to array
  const selected = value ? value.split(',') : [];

  const toggleChip = (label: string) => {
    if (selected.includes(label)) {
      onChange(selected.filter((s) => s !== label).join(','));
    } else if (selected.length < maxSelect) {
      onChange([...selected, label].join(','));
    }
  };

  return (
    <>
      <View style={styles.onboarding__chips}>
        {options?.map((opt) => {
          const isActive = selected.includes(opt.label);
          return (
            <Pressable
              key={opt.label}
              style={[
                styles.onboarding__chip,
                isActive && styles['onboarding__chip--active'],
              ]}
              onPress={() => toggleChip(opt.label)}
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
      <Text style={styles.onboarding__counter}>
        {`${selected.length} discipline(s) sélectionnée(s)`}
      </Text>
    </>
  );
}
