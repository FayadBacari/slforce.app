/**
 * Styles de l'ecran d'onboarding (athlete + coach).
 * BEM : onboarding = bloc.
 */

import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '@/shared/theme/theme';

export const styles = StyleSheet.create({
  // --- Bloc principal ---
  onboarding: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.xl,
  },

  // --- Barre de progression (pleine largeur) ---
  onboarding__progressBar: {
    height: 5,
    backgroundColor: Colors.primaryLight,
    borderRadius: 3,
    marginHorizontal: -Spacing.xl,
  },
  onboarding__progressFill: {
    height: 5,
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },

  // --- Indicateur d'etape (ex: "3 / 9") ---
  onboarding__step: {
    ...Typography.bodySmall,
    color: Colors.primary,
    alignSelf: 'flex-end',
    marginTop: Spacing.sm,
  },

  // --- Contenu central ---
  onboarding__content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Spacing.xxl,
  },

  // --- Icone en haut ---
  onboarding__iconContainer: {
    width: 80,
    height: 80,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.backgroundGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  onboarding__icon: {
    fontSize: 40,
  },

  // --- Titre + sous-titre ---
  onboarding__title: {
    ...Typography.h1,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  onboarding__subtitle: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },

  // --- Input texte (pseudo) ---
  onboarding__textInput: {
    width: '100%',
    marginTop: Spacing.xxl,
  },

  // --- Input numerique (poids, taille, records) ---
  onboarding__numberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xxl,
    width: '100%',
    gap: Spacing.md,
  },
  onboarding__numberField: {
    flex: 1,
    height: 52,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    justifyContent: 'center',
    paddingHorizontal: Spacing.lg,
  },
  'onboarding__numberField--focused': {
    borderColor: Colors.borderFocus,
  },
  onboarding__numberInput: {
    ...Typography.h2,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  onboarding__numberUnit: {
    ...Typography.body,
    color: Colors.textSecondary,
  },

  // --- Choix (genre : Homme / Femme) ---
  onboarding__choices: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.xxl,
  },
  onboarding__choiceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  'onboarding__choiceButton--active': {
    borderColor: Colors.primary,
    backgroundColor: Colors.primaryLight,
  },
  onboarding__choiceEmoji: {
    fontSize: 18,
  },
  onboarding__choiceLabel: {
    ...Typography.body,
    color: Colors.textPrimary,
  },

  // --- Chips (categories de poids) ---
  onboarding__chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: Spacing.sm,
    marginTop: Spacing.xxl,
  },
  onboarding__chip: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.full,
    borderWidth: 1.5,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  'onboarding__chip--active': {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
  onboarding__chipText: {
    ...Typography.bodySmall,
    color: Colors.textPrimary,
  },
  'onboarding__chipText--active': {
    color: Colors.textWhite,
  },

  // --- Textarea (presentation coach) ---
  onboarding__textareaContainer: {
    width: '100%',
    marginTop: Spacing.xxl,
  },
  onboarding__textarea: {
    height: 120,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    padding: Spacing.lg,
    ...Typography.body,
    color: Colors.textPrimary,
    textAlignVertical: 'top',
  },
  'onboarding__textarea--focused': {
    borderColor: Colors.borderFocus,
  },

  // --- Compteur (textarea / multi-chips) ---
  onboarding__counter: {
    ...Typography.caption,
    color: Colors.primary,
    alignSelf: 'flex-end',
    marginTop: Spacing.sm,
  },

  // --- Pied de page (boutons Retour / Suivant) ---
  onboarding__footer: {
    flexDirection: 'row',
    gap: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  onboarding__footerNext: {
    flex: 1,
  },
});
