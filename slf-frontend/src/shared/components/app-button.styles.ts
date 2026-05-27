// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, BorderRadius, Spacing, Shadows } from '@/shared/theme/theme';


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
    button: {
      backgroundColor: Colors.primary,
      ...Shadows.light,
    },
    'button--pressed': { backgroundColor: Colors.primaryDark },
    button__text: { color: Colors.textWhite },
  }),
  secondary: StyleSheet.create({
    button: { backgroundColor: Colors.primaryLight },
    'button--pressed': { backgroundColor: Colors.border },
    button__text: { color: Colors.primary },
  }),
  ghost: StyleSheet.create({
    button: { backgroundColor: 'transparent' },
    'button--pressed': { backgroundColor: Colors.primaryLight },
    button__text: { color: Colors.primary },
  }),
};
