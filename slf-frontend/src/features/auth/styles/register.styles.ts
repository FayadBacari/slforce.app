// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  // --- Header ---
  register__header: {
    alignItems: 'center',
    marginTop: Spacing.xl,
    marginBottom: Spacing.xxl,
  },
  register__logo: {
    width: 120,
    height: 120,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  register__logoImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  register__title: {
    ...Typography.h1,
    color: Colors.textPrimary,
  },
  register__role: {
    ...Typography.body,
    color: Colors.primary,
    marginTop: Spacing.xs,
  },

  // --- Form ---
  register__form: {
    gap: Spacing.lg,
  },
  register__row: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  register__halfInput: {
    flex: 1,
  },

  // --- Footer ---
  register__footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.xxl,
    paddingBottom: Spacing.xxl,
    gap: Spacing.xs,
  },
  register__footerText: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
  },
  register__footerLink: {
    ...Typography.link,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});
