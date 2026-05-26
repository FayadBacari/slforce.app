/**
 * Ecran d'inscription.
 * L'utilisateur remplit ses infos pour creer un compte.
 * Le role (athlete/coach) est passe en parametre depuis role-select.
 */

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import AppButton from '@/shared/components/AppButton';
import AppTextInput from '@/shared/components/AppTextInput';
import { LOGO } from '@/shared/constants/images';
import { styles } from '@/features/auth/styles/register.styles';

export default function RegisterScreen() {
  // Recupere le role choisi depuis l'ecran precedent
  const { role } = useLocalSearchParams<{ role: string }>();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Affiche le role en francais
  const roleLabel = role === 'coach' ? 'Coach' : 'Athlète';

  return (
    <SafeAreaView style={styles.register}>
      <ScrollView
        contentContainerStyle={styles.register__scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* En-tete : logo + titre + role */}
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

        {/* Formulaire */}
        <View style={styles.register__form}>
          {/* Prenom et Nom cote a cote */}
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
              // Redirige vers l'onboarding du bon role
              if (role === 'coach') {
                router.push('/(auth)/onboarding-coach');
              } else {
                router.push('/(auth)/onboarding-athlete');
              }
            }}
          />
        </View>

        {/* Lien vers connexion */}
        <View style={styles.register__footer}>
          <Text style={styles.register__footerText}>
            {'Déjà un compte ?'}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.register__footerLink}>{'Se connecter'}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
