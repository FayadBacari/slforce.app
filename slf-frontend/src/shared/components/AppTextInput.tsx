/**
 * AppTextInput — Champ de saisie reutilisable.
 *
 * Exemples :
 *   <AppTextInput label="Email" value={email} onChangeText={setEmail} />
 *   <AppTextInput label="Mot de passe" value={pw} onChangeText={setPw} secureTextEntry />
 */

import { useState } from 'react';
import { View, Text, TextInput, Pressable, KeyboardTypeOptions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/shared/theme/theme';
import { styles } from './app-text-input.styles';

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
  // Gere le focus du champ (bordure bleue)
  const [isFocused, setIsFocused] = useState(false);

  // Gere la visibilite du mot de passe
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.input}>
      {/* Label au-dessus du champ */}
      {label ? <Text style={styles.input__label}>{label}</Text> : null}

      {/* Champ de saisie avec bordure */}
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

        {/* Icone oeil pour les mots de passe */}
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

      {/* Message d'erreur */}
      {error ? <Text style={styles.input__error}>{error}</Text> : null}
    </View>
  );
}
