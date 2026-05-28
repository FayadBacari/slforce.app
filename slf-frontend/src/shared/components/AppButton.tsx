// import all dependencies
import { Colors } from '@/shared/theme/theme';
import { styles, variantStyles } from './app-button.styles';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import * as Haptics from 'expo-haptics';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
  disabled?: boolean;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

// Spring config for press animation
const PRESS_SPRING = { damping: 15, stiffness: 300 };
const PRESS_SCALE = 0.97;


export default function AppButton({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
}: AppButtonProps) {
  const isDisabled = disabled || loading;
  const v = variantStyles[variant];
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    // eslint-disable-next-line react-hooks/immutability -- reanimated shared value
    scale.value = withSpring(PRESS_SCALE, PRESS_SPRING);
  };

  const handlePressOut = () => {
    // eslint-disable-next-line react-hooks/immutability -- reanimated shared value
    scale.value = withSpring(1, PRESS_SPRING);
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress();
  };

  return (
    <AnimatedPressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={isDisabled}
      style={[
        styles.button,
        v.button,
        isDisabled && styles['button--disabled'],
        animatedStyle,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'primary' ? Colors.textWhite : Colors.primary}
        />
      ) : (
        <Text style={[styles.button__text, v.button__text]}>{title}</Text>
      )}
    </AnimatedPressable>
  );
}
