// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  // --- Progress bar (full width) ---
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

  // --- Step indicator (e.g. "3 / 9") ---
  onboarding__step: {
    ...Typography.bodySmall,
    color: Colors.primary,
    alignSelf: 'flex-end',
    marginTop: Spacing.sm,
  },

  // --- Main content ---
  onboarding__content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Spacing.xxl,
  },

  // --- Top icon ---
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

  // --- Title + subtitle ---
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

  // --- Text input (username) ---
  onboarding__textInput: {
    width: '100%',
    marginTop: Spacing.xxl,
  },

  // --- Number input (weight, height, records) ---
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

  // --- Choice (gender: Male / Female) ---
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

  // --- Chips (weight categories) ---
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

  // --- Textarea (coach bio) ---
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

  // --- Counter (textarea / multi-chips) ---
  onboarding__counter: {
    ...Typography.caption,
    color: Colors.primary,
    alignSelf: 'flex-end',
    marginTop: Spacing.sm,
  },

  // --- Footer (Back / Next buttons) ---
  onboarding__footer: {
    flexDirection: 'row',
    gap: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  onboarding__footerNext: {
    flex: 1,
  },
});
