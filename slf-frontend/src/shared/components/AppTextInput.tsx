// import all dependencies
import { Colors } from '@/shared/theme/theme';
import { styles, LABEL_OFFSET } from './app-text-input.styles';
import { useEffect, useRef, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, Pressable, KeyboardTypeOptions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';

type AppTextInputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  rightIcon?: string;
  unit?: string;
};

// Animation timing
const LABEL_DURATION = 200;
const SHAKE_DURATION = 60;


export default function AppTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
  keyboardType,
  autoCapitalize = 'none',
  rightIcon,
  unit,
}: AppTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const inputRef = useRef<TextInput>(null);

  // Label starts "up" if value is already filled
  const isLabelUp = isFocused || value.length > 0;
  const labelPosition = useSharedValue(isLabelUp ? 1 : 0);
  const shakeOffset = useSharedValue(0);
  const prevError = useRef(error);

  // Floating label animation
  useEffect(() => {
    labelPosition.value = withTiming(isLabelUp ? 1 : 0, { duration: LABEL_DURATION });
  }, [isLabelUp, labelPosition]);

  // Shake animation when error appears
  useEffect(() => {
    if (error && !prevError.current) {
      shakeOffset.value = withSequence(
        withTiming(-8, { duration: SHAKE_DURATION }),
        withTiming(8, { duration: SHAKE_DURATION }),
        withTiming(-4, { duration: SHAKE_DURATION }),
        withTiming(4, { duration: SHAKE_DURATION }),
        withTiming(0, { duration: SHAKE_DURATION }),
      );
    }
    prevError.current = error;
  }, [error, shakeOffset]);

  // Animated style for floating label
  const labelAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(labelPosition.value, [0, 1], [0, -LABEL_OFFSET]) },
    ],
    fontSize: interpolate(labelPosition.value, [0, 1], [16, 12]),
    color: interpolateColor(
      labelPosition.value,
      [0, 1],
      [Colors.textPlaceholder, Colors.primary],
    ),
  }));

  // Animated style for shake on error
  const shakeAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeOffset.value }],
  }));

  // Show placeholder only when label is up
  const visiblePlaceholder = isLabelUp ? placeholder : undefined;

  return (
    <Animated.View style={[styles.input, shakeAnimatedStyle]}>
      {/* Field container */}
      <Pressable
        style={[
          styles.input__field,
          isFocused && styles['input__field--focused'],
          error && styles['input__field--error'],
        ]}
        onPress={() => inputRef.current?.focus()}
      >
        {/* Floating label */}
        {label && (
          <Animated.Text style={[styles.input__label, labelAnimatedStyle]}>
            {label}
          </Animated.Text>
        )}

        {/* Text input */}
        <TextInput
          ref={inputRef}
          style={styles.input__textInput}
          placeholder={visiblePlaceholder}
          placeholderTextColor={Colors.textPlaceholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Right element: eye toggle > unit > icon */}
        {secureTextEntry ? (
          <Pressable
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.input__eyeButton}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={22}
              color={Colors.textSecondary}
            />
          </Pressable>
        ) : unit ? (
          <View style={styles.input__right}>
            <Text style={styles.input__unit}>{unit}</Text>
          </View>
        ) : rightIcon ? (
          <View style={styles.input__right}>
            <Ionicons
              name={rightIcon as keyof typeof Ionicons.glyphMap}
              size={22}
              color={Colors.textSecondary}
            />
          </View>
        ) : null}
      </Pressable>

      {/* Error message */}
      {error ? <Text style={styles.input__error}>{error}</Text> : null}
    </Animated.View>
  );
}
