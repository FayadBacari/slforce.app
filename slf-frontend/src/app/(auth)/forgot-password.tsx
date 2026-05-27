// import all dependencies
import { LOGO } from '@/shared/constants/images';
import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';

// import all components
import AppButton from '@/shared/components/AppButton';
import AppTextInput from '@/shared/components/AppTextInput';

// import styles
import { styles } from '@/features/auth/styles/forgot-password.styles';


export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.forgot}>
      <ScrollView
        contentContainerStyle={styles.forgot__scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header: logo + title */}
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
      </ScrollView>
    </SafeAreaView>
  );
}
