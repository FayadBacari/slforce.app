// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, BorderRadius, Spacing } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  // Block — global container
  input: {
    gap: Spacing.sm,
  },

  // Element — label above the field
  input__label: {
    ...Typography.label,
    color: Colors.textPrimary,
  },

  // Element — field container (border + background)
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

  // Modifier — active field (focus)
  'input__field--focused': {
    borderColor: Colors.borderFocus,
  },

  // Modifier — error state
  'input__field--error': {
    borderColor: Colors.error,
  },

  // Element — native TextInput inside
  input__textInput: {
    flex: 1,
    ...Typography.body,
    color: Colors.textPrimary,
  },

  // Element — eye button for password
  input__eyeButton: {
    padding: Spacing.xs,
  },

  // Element — error message below the field
  input__error: {
    ...Typography.caption,
    color: Colors.error,
  },
});
