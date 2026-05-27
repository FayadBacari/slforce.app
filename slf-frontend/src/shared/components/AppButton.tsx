// import all dependencies
import { Colors } from '@/shared/theme/theme';
import { styles, variantStyles } from './app-button.styles';
import { Pressable, Text, ActivityIndicator } from 'react-native';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  loading?: boolean;
  disabled?: boolean;
};


export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
}: AppButtonProps) {
  const isDisabled = disabled || loading;
  const v = variantStyles[variant];

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button,
        v.button,
        pressed && v['button--pressed'],
        isDisabled && styles['button--disabled'],
      ]}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? Colors.textWhite : Colors.primary}
        />
      )}
      <Text style={[styles.button__text, v.button__text]}>{title}</Text>
    </Pressable>
  );
}
