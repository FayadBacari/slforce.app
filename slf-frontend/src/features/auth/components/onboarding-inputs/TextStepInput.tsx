// import all dependencies
import { View } from 'react-native';
import AppTextInput from '@/shared/components/AppTextInput';
import { styles } from '@/features/auth/styles/onboarding.styles';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};


export default function TextStepInput({ value, onChange, placeholder }: Props) {
  return (
    <View style={styles.onboarding__textInput}>
      <AppTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}
