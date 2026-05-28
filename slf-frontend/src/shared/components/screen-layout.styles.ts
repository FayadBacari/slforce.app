// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  // Block — safe area wrapper
  layout: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  // Element — keyboard avoiding container
  layout__keyboard: {
    flex: 1,
  },

  // Element — scroll content
  layout__scroll: {
    flexGrow: 1,
    padding: Spacing.xl,
  },

  // Modifier — vertically centered content
  'layout__scroll--centered': {
    justifyContent: 'center',
  },

  // Element — non-scroll content (when scroll is disabled)
  layout__content: {
    flex: 1,
    padding: Spacing.xl,
  },
});
