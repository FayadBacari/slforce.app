// import all dependencies
import { LOGO } from '@/shared/constants/images';
import { styles } from '@/features/auth/styles/role-select.styles';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';

export default function RoleSelectScreen() {
  // Navigates to registration with the chosen role
  const handleSelectRole = (role: 'athlete' | 'coach') => {
    router.push({ pathname: '/(auth)/register', params: { role } });
  };

  return (
    <SafeAreaView style={styles.roleSelect}>
      <ScrollView contentContainerStyle={styles.roleSelect__scroll}>
        {/* Header: logo + title */}
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

        {/* Choice cards */}
        <View style={styles.roleSelect__cards}>
          {/* Athlete card */}
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

          {/* Coach card */}
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

        {/* Link to login */}
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
