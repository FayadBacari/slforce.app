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
import { styles } from '@/features/auth/styles/login.styles';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScreenLayout centered>
        {/* Header: logo + title */}
        <View style={styles.login__header}>
          <Logo />
          <Text style={styles.login__title}>{'Connexion'}</Text>
          <Text style={styles.login__subtitle}>{'Contente de te revoir !'}</Text>
        </View>

        {/* Form */}
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

          {/* Forgot password link */}
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
            onPress={() => {/* TODO: connect to backend */}}
          />
        </View>

        {/* Link to sign up */}
        <View style={styles.login__footer}>
          <Text style={styles.login__footerText}>
            {'Pas encore de compte ?'}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/role-select')}>
            <Text style={styles.login__footerLink}>{"S'inscrire"}</Text>
          </Pressable>
        </View>
    </ScreenLayout>
  );
}
