import { View, Text, StyleSheet } from 'react-native';

// Placeholder — sera remplace par le vrai ecran de choix de role au Sprint 2.
export default function RoleSelectScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Role Selection Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});
