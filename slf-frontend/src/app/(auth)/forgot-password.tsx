// import all dependencies
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

// import all components
import AppButton from '@/shared/components/AppButton';
import AppTextInput from '@/shared/components/AppTextInput';
import Logo from '@/shared/components/Logo';
import ScreenLayout from '@/shared/components/ScreenLayout';

// import styles
import { styles } from '@/features/auth/styles/forgot-password.styles';


export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <ScreenLayout centered>
        {/* Header: logo + title */}
        <View style={styles.forgot__header}>
          <Logo />
          <Text style={styles.forgot__title}>{'Mot de passe oublié'}</Text>
          <Text style={styles.forgot__subtitle}>
            {"On t'envoie un lien de réinitialisation si ton mail existe chez nous"}
          </Text>
        </View>

        {/* Form */}
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
            onPress={() => {/* TODO: send reset email */}}
          />
        </View>

        {/* Back to login link */}
        <View style={styles.forgot__footer}>
          <Text style={styles.forgot__footerText}>
            {'Tu te souviens ?'}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.forgot__footerLink}>{'Se connecter'}</Text>
          </Pressable>
        </View>
    </ScreenLayout>
  );
}
