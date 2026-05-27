import { Stack } from 'expo-router';

// Auth group layout.
// All screens (login, register, etc.) are stacked in this stack.
// The "slide_from_right" animation gives a natural sliding effect.
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
