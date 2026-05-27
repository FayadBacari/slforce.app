// import all dependencies
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';


// Root layout of the app.
// Wraps ALL screens with global providers.
// Later we'll add here: ThemeProvider, AuthProvider, etc.
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      {/* Status bar (time, battery) in dark text */}
      <StatusBar style="dark" />

      {/* Main stack — no visible header */}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </SafeAreaProvider>
  );
}
