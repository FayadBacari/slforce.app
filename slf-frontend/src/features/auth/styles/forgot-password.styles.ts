// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  // --- Header ---
  forgot__header: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  forgot__logo: {
    width: 120,
    height: 120,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  forgot__logoImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  forgot__title: {
    ...Typography.h1,
    color: Colors.textPrimary,
  },
  forgot__subtitle: {
    ...Typography.body,
    color: Colors.primary,
    textAlign: 'center',
    marginTop: Spacing.sm,
  },

  // --- Form ---
  forgot__form: {
    gap: Spacing.lg,
  },

  // --- Footer ---
  forgot__footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.xxl,
    gap: Spacing.xs,
  },
  forgot__footerText: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
  },
  forgot__footerLink: {
    ...Typography.link,
    color: Colors.primary
  },
});
