/**
 * Styles de l'ecran mot de passe oublie (ForgotPasswordScreen).
 * BEM : forgot = bloc.
 */

import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '@/shared/theme/theme';

export const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  forgot__scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: Spacing.xl,
  },

  // --- En-tete ---
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

  // --- Formulaire ---
  forgot__form: {
    gap: Spacing.lg,
  },

  // --- Pied de page ---
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
