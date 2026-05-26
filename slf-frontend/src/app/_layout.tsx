import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Layout racine de l'application.
// Il enveloppe TOUS les ecrans avec les providers globaux.
// Plus tard on ajoutera ici : ThemeProvider, AuthProvider, etc.
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* Barre de statut (heure, batterie) en texte sombre */}
      <StatusBar style="dark" />

      {/* Stack principal — pas de header visible */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </SafeAreaProvider>
  );
}
