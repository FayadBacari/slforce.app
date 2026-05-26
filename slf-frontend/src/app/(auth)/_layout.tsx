import { Stack } from 'expo-router';

// Layout du groupe auth.
// Tous les ecrans (login, register, etc.) sont empiles dans cette stack.
// L'animation "slide_from_right" donne un effet de glissement naturel.
export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    />
  );
}
