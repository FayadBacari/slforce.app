// import all assets
import { LOGO } from '@/shared/constants/images';
import { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, Pressable, Image } from 'react-native';

// import all components
import AppButton from '@/shared/components/AppButton';
import AppTextInput from '@/shared/components/AppTextInput';
import ScreenLayout from '@/shared/components/ScreenLayout';

// import styles
import { styles } from '@/features/auth/styles/register.styles';


export default function RegisterScreen() {
  // Gets the role chosen from the previous screen
  const { role } = useLocalSearchParams<{ role: string }>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Displays the role label in French
  const roleLabel = role === 'coach' ? 'Coach' : 'Athlète';

  return (
    <ScreenLayout>
        {/* Header: logo + title + role */}
        <View style={styles.register__header}>
          <View style={styles.register__logo}>
            <Image
              source={LOGO}
              style={styles.register__logoImage}
            />
          </View>
          <Text style={styles.register__title}>{'Créer un compte'}</Text>
          <Text style={styles.register__role}>{roleLabel}</Text>
        </View>

        {/* Form */}
        <View style={styles.register__form}>
          {/* First name and last name side by side */}
          <View style={styles.register__row}>
            <View style={styles.register__halfInput}>
              <AppTextInput
                label="Prénom"
                value={firstName}
                onChangeText={setFirstName}
                autoCapitalize="words"
              />
            </View>
            <View style={styles.register__halfInput}>
              <AppTextInput
                label="Nom"
                value={lastName}
                onChangeText={setLastName}
                autoCapitalize="words"
              />
            </View>
          </View>

          <AppTextInput
            label="Adresse e-mail"
            placeholder="exemple@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <AppTextInput
            label="Mot de passe"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <AppTextInput
            label="Confirmer le mot de passe"
            placeholder="••••••••"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <AppButton
            title="S'inscrire"
            onPress={() => {
              // Redirects to the correct role onboarding
              if (role === 'coach') {
                router.push('/(auth)/onboarding-coach');
              } else {
                router.push('/(auth)/onboarding-athlete');
              }
            }}
          />
        </View>

        {/* Link to login */}
        <View style={styles.register__footer}>
          <Text style={styles.register__footerText}>
            {'Déjà un compte ?'}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.register__footerLink}>{'Se connecter'}</Text>
          </Pressable>
        </View>
    </ScreenLayout>
  );
}
