// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, BorderRadius } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  // Block — logo container (rounded blue square)
  logo: {
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
