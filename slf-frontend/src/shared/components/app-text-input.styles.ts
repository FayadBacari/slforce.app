// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, BorderRadius, Spacing } from '@/shared/theme/theme';


// Floating label offset (moves label above the field border)
export const LABEL_OFFSET = 38;

export const styles = StyleSheet.create({
  // Block — global container
  input: {
    gap: Spacing.xs,
  },

  // Element — field container (border + background)
  input__field: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.lg,
    backgroundColor: Colors.inputBg,
  },

  // Modifier — active field (focus)
  'input__field--focused': {
    borderColor: Colors.borderFocus,
  },

  // Modifier — error state
  'input__field--error': {
    borderColor: Colors.error,
  },

  // Element — floating label (positioned inside the field)
  input__label: {
    position: 'absolute',
    left: Spacing.md,
    paddingHorizontal: Spacing.xs,
  },

  // Element — native TextInput inside
  input__textInput: {
    flex: 1,
    ...Typography.body,
    color: Colors.textPrimary,
    paddingTop: Spacing.sm,
  },

  // Element — right side container (icon, unit, eye)
  input__right: {
    paddingLeft: Spacing.sm,
  },

  // Element — unit text on the right ("kg", "cm")
  input__unit: {
    ...Typography.body,
    color: Colors.textSecondary,
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
