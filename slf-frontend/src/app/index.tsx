import { Redirect } from 'expo-router';

// Point d'entree de l'app.
// Pour l'instant, redirige toujours vers le login.
// Plus tard, on verifiera si l'utilisateur est deja connecte
// pour l'envoyer vers le home au lieu du login.
export default function Index() {
  return <Redirect href="/(auth)/login" />;
}
