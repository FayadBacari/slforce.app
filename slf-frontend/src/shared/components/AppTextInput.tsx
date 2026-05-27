// import all dependencies
import { Colors } from '@/shared/theme/theme';
import { styles } from './app-text-input.styles';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, TextInput, Pressable, KeyboardTypeOptions } from 'react-native';

type AppTextInputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
};


export default function AppTextInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
  keyboardType,
  autoCapitalize = 'none',
}: AppTextInputProps) {
  // Handles field focus (blue border)
  const [isFocused, setIsFocused] = useState(false);

  // Handles password visibility toggle
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.input}>
      {/* Label above the field */}
      {label ? <Text style={styles.input__label}>{label}</Text> : null}

      {/* Input field with border */}
      <View
        style={[
          styles.input__field,
          isFocused && styles['input__field--focused'],
          error && styles['input__field--error'],
        ]}
      >
        <TextInput
          style={styles.input__textInput}
          placeholder={placeholder}
          placeholderTextColor={Colors.textPlaceholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Eye icon for password fields */}
        {secureTextEntry && (
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
        )}
      </View>

      {/* Error message */}
      {error ? <Text style={styles.input__error}>{error}</Text> : null}
    </View>
  );
}
