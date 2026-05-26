/**
 * Ecran mot de passe oublie.
 * L'utilisateur entre son email pour recevoir un lien de reinitialisation.
 */

import { useState } from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import AppButton from '@/shared/components/AppButton';
import AppTextInput from '@/shared/components/AppTextInput';
import { LOGO } from '@/shared/constants/images';
import { styles } from '@/features/auth/styles/forgot-password.styles';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.forgot}>
      <ScrollView
        contentContainerStyle={styles.forgot__scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* En-tete : logo + titre */}
        <View style={styles.forgot__header}>
          <View style={styles.forgot__logo}>
            <Image
              source={LOGO}
              style={styles.forgot__logoImage}
            />
          </View>
          <Text style={styles.forgot__title}>{'Mot de passe oublié'}</Text>
          <Text style={styles.forgot__subtitle}>
            {"On t'envoie un lien de réinitialisation si ton mail existe chez nous"}
          </Text>
        </View>

        {/* Formulaire */}
        <View style={styles.forgot__form}>
          <AppTextInput
            label="Adresse e-mail"
            placeholder="exemple@email.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <AppButton
            title="Envoyer le lien"
            onPress={() => {/* TODO: envoyer email de reinitialisation */}}
          />
        </View>

        {/* Lien retour vers connexion */}
        <View style={styles.forgot__footer}>
          <Text style={styles.forgot__footerText}>
            {'Tu te souviens ?'}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.forgot__footerLink}>{'Se connecter'}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
