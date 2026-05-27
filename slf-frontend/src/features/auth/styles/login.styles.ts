// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  login__scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: Spacing.xl,
  },

  // --- Header (logo + title) ---
  login__header: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  login__logo: {
    width: 120,
    height: 120,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  login__logoImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  login__title: {
    ...Typography.h1,
    color: Colors.textPrimary,
  },
  login__subtitle: {
    ...Typography.body,
    color: Colors.primary,
    marginTop: Spacing.xs,
  },

  // --- Form ---
  login__form: {
    gap: Spacing.lg,
  },
  login__forgotLink: {
    alignSelf: 'flex-end',
  },
  login__forgotText: {
    ...Typography.link,
    color: Colors.primary,
  },

  // --- Footer ---
  login__footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.xxl,
    gap: Spacing.xs,
  },
  login__footerText: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
  },
  login__footerLink: {
    ...Typography.link,
    color: Colors.primary
  },
});
