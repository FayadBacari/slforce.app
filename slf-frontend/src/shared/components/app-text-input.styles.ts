/**
 * Styles du composant AppTextInput.
 * BEM : input = bloc, __label/__field/__error = elements.
 */

import { StyleSheet } from 'react-native';
import { Colors, Typography, BorderRadius, Spacing } from '@/shared/theme/theme';

export const styles = StyleSheet.create({
  // Bloc — conteneur global
  input: {
    gap: Spacing.sm,
  },

  // Element — le label au-dessus du champ
  input__label: {
    ...Typography.label,
    color: Colors.textPrimary,
  },

  // Element — le conteneur du champ (bordure + fond)
  input__field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.background,
  },

  // Modificateur — champ actif (focus)
  'input__field--focused': {
    borderColor: Colors.borderFocus,
  },

  // Modificateur — champ en erreur
  'input__field--error': {
    borderColor: Colors.error,
  },

  // Element — le TextInput natif a l'interieur
  input__textInput: {
    flex: 1,
    ...Typography.body,
    color: Colors.textPrimary,
  },

  // Element — bouton oeil pour mot de passe
  input__eyeButton: {
    padding: Spacing.xs,
  },

  // Element — message d'erreur sous le champ
  input__error: {
    ...Typography.caption,
    color: Colors.error,
  },
});
