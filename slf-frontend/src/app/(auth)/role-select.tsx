/**
 * Ecran de selection de role.
 * L'utilisateur choisit s'il est Athlete ou Coach avant l'inscription.
 */

import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { LOGO } from '@/shared/constants/images';
import { styles } from '@/features/auth/styles/role-select.styles';

export default function RoleSelectScreen() {
  // Navigue vers l'inscription avec le role choisi
  const handleSelectRole = (role: 'athlete' | 'coach') => {
    router.push({ pathname: '/(auth)/register', params: { role } });
  };

  return (
    <SafeAreaView style={styles.roleSelect}>
      <ScrollView contentContainerStyle={styles.roleSelect__scroll}>
        {/* En-tete : logo + titre */}
        <View style={styles.roleSelect__header}>
          <View style={styles.roleSelect__logo}>
            <Image
              source={LOGO}
              style={styles.roleSelect__logoImage}
            />
          </View>
          <Text style={styles.roleSelect__title}>{'Tu es...'}</Text>
          <Text style={styles.roleSelect__subtitle}>
            {'Choisis ton rôle pour personnaliser ton expérience'}
          </Text>
        </View>

        {/* Cartes de choix */}
        <View style={styles.roleSelect__cards}>
          {/* Carte Athlete */}
          <Pressable
            style={({ pressed }) => [
              styles.roleSelect__card,
              pressed && styles['roleSelect__card--pressed'],
            ]}
            onPress={() => handleSelectRole('athlete')}
          >
            <Text style={styles.roleSelect__cardIcon}>{'🏃'}</Text>
            <View style={styles.roleSelect__cardContent}>
              <Text style={styles.roleSelect__cardTitle}>{'Athlète'}</Text>
              <Text style={styles.roleSelect__cardDesc}>
                {'Je cherche un coach pour progresser'}
              </Text>
            </View>
          </Pressable>

          {/* Carte Coach */}
          <Pressable
            style={({ pressed }) => [
              styles.roleSelect__card,
              pressed && styles['roleSelect__card--pressed'],
            ]}
            onPress={() => handleSelectRole('coach')}
          >
            <Text style={styles.roleSelect__cardIcon}>{'🏋️'}</Text>
            <View style={styles.roleSelect__cardContent}>
              <Text style={styles.roleSelect__cardTitle}>{'Coach'}</Text>
              <Text style={styles.roleSelect__cardDesc}>
                {'Je coach des athlètes et gère des programmes'}
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Lien vers connexion */}
        <View style={styles.roleSelect__footer}>
          <Text style={styles.roleSelect__footerText}>
            {'Déjà un compte ?'}
          </Text>
          <Pressable onPress={() => router.push('/(auth)/login')}>
            <Text style={styles.roleSelect__footerLink}>{'Se connecter'}</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
