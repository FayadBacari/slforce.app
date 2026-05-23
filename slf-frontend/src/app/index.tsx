import { Redirect } from 'expo-router';

// Point d'entree de l'app — redirige vers le login pour l'instant.
// Plus tard, on verifiera ici si l'utilisateur est connecte
// pour rediriger vers le home ou le login.
export default function Index() {
  return <Redirect href="/(auth)/login" />;
}
