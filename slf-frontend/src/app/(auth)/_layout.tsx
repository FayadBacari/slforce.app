import { Stack } from 'expo-router';

// Layout du groupe auth — Stack navigator sans header visible.
// Chaque ecran auth (login, register, etc.) est empile dans cette stack.
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
