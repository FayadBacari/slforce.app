/**
 * Ecran de connexion.
 * L'utilisateur entre son email et mot de passe pour se connecter.
 */

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import AppButton from '@/shared/components/AppButton';
import AppTextInput from '@/shared/components/AppTextInput';
import { LOGO } from '@/shared/constants/images';
import { styles } from '@/features/auth/styles/login.styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.login}>
      <ScrollView
        contentContainerStyle={styles.login__scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* En-tete : logo + titre */}
        <View style={styles.login__header}>
          <View style={styles.login__logo}>
            <Image
              source={LOGO}
              style={styles.login__logoImage}
            />
          </View>
          <Text style={styles.login__title}>{'Connexion'}</Text>
          <Text style={styles.login__subtitle}>{'Contente de te revoir !'}</Text>
        </View>

        {/* Formulaire */}
        <View style={styles.login__form}>
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

          {/* Lien mot de passe oublie */}
          <Pressable
            style={styles.login__forgotLink}
            onPress={() => router.push('/(auth)/forgot-password')}
          >
            <Text style={styles.login__forgotText}>
              {'Mot de passe oublié ?'}
            </Text>
          </Pressable>

          <AppButton
            title="Se connecter"
            onPress={() => {/* TODO: connexion au backend */}}
          />
        </View>

        {/* Lien vers inscription */}
        <View style={styles.login__footer}>
          <Text style={styles.login__footerText}>
            {'Pas encore de compte ?'}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/role-select')}>
            <Text style={styles.login__footerLink}>{"S'inscrire"}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
