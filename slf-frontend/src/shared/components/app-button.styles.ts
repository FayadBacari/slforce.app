// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, BorderRadius, Spacing } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  button__text: {
    ...Typography.button,
  },
  'button--disabled': {
    opacity: 0.5,
  },
});

// Each variant has its own colors
export const variantStyles = {
  primary: StyleSheet.create({
    button: { backgroundColor: Colors.primary },
    'button--pressed': { backgroundColor: Colors.primaryDark },
    button__text: { color: Colors.textWhite },
  }),
  secondary: StyleSheet.create({
    button: { backgroundColor: Colors.primaryLight },
    'button--pressed': { backgroundColor: Colors.border },
    button__text: { color: Colors.primary },
  }),
  outline: StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      borderColor: Colors.primary,
    },
    'button--pressed': { backgroundColor: Colors.primaryLight },
    button__text: { color: Colors.primary },
  }),
  // Subtle button — white background, gray border (e.g. Back button)
  ghost: StyleSheet.create({
    button: {
      backgroundColor: Colors.background,
      borderWidth: 1,
      borderColor: Colors.border,
    },
    'button--pressed': { backgroundColor: Colors.backgroundGray },
    button__text: { color: Colors.textPrimary },
  }),
};
