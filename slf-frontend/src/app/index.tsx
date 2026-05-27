import { Redirect } from 'expo-router';

// App entry point.
// For now, always redirects to login.
// Later, we'll check if the user is already logged in
// to send them to home instead of login.
export default function Index() {
  return <Redirect href="/(auth)/login" />;
}
