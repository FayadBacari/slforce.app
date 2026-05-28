// import all dependencies
import { StyleSheet } from 'react-native';
import { Colors, Typography, Spacing, BorderRadius, Shadows } from '@/shared/theme/theme';


export const styles = StyleSheet.create({
  // --- Header ---
  roleSelect__header: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  roleSelect__logo: {
    width: 120,
    height: 120,
    borderRadius: BorderRadius.xl,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  roleSelect__logoImage: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
  },
  roleSelect__title: {
    ...Typography.h1,
    color: Colors.textPrimary,
  },
  roleSelect__subtitle: {
    ...Typography.body,
    color: Colors.primary,
    textAlign: 'center',
    marginTop: Spacing.sm,
    paddingHorizontal: Spacing.lg,
  },

  // --- Role choice cards ---
  roleSelect__cards: {
    gap: Spacing.lg,
  },
  roleSelect__card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.xl,
    backgroundColor: Colors.primaryLight,
    borderRadius: BorderRadius.lg,
    gap: Spacing.lg,
    ...Shadows.light,
  },
  'roleSelect__card--pressed': {
    opacity: 0.85,
  },
  roleSelect__cardIcon: {
    fontSize: 36,
  },
  roleSelect__cardContent: {
    flex: 1,
  },
  roleSelect__cardTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
  },
  roleSelect__cardDesc: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
    marginTop: Spacing.xs,
  },

  // --- Footer ---
  roleSelect__footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.xxl,
    gap: Spacing.xs,
  },
  roleSelect__footerText: {
    ...Typography.bodySmall,
    color: Colors.textSecondary,
  },
  roleSelect__footerLink: {
    ...Typography.link,
    color: Colors.primary
  },
});
