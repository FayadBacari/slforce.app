export const Colors = {
  // Primary
  primary: '#3B82F6',
  primaryDark: '#2563EB',
  primaryLight: '#EFF6FF',

  // Backgrounds
  background: '#FFFFFF',
  backgroundGray: '#F3F4F6',
  inputBg: '#F8FAFF',

  // Text
  textPrimary: '#1A1A2E',
  textSecondary: '#6B7280',
  textPlaceholder: '#9CA3AF',
  textWhite: '#FFFFFF',

  // States
  success: '#22C55E',
  error: '#EF4444',
  warning: '#F59E0B',

  // Borders
  border: '#E5E7EB',
  borderFocus: '#3B82F6',

  // Shadows
  shadow: '#000000',
} as const;

// ─── TYPOGRAPHY ──────────────────────────────────────────────

export const Typography = {
  h1: { fontSize: 28, fontWeight: '700' as const },
  h2: { fontSize: 24, fontWeight: '700' as const },
  h3: { fontSize: 20, fontWeight: '600' as const },
  body: { fontSize: 16, fontWeight: '400' as const },
  bodySmall: { fontSize: 14, fontWeight: '400' as const },
  label: { fontSize: 14, fontWeight: '500' as const },
  button: { fontSize: 16, fontWeight: '600' as const },
  link: { fontSize: 14, fontWeight: '600' as const },
  caption: { fontSize: 12, fontWeight: '400' as const },
} as const;

// ─── SPACING ─────────────────────────────────────────────────

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
} as const;

// ─── BORDER RADIUS ───────────────────────────────────────────

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
} as const;

// ─── SHADOWS ─────────────────────────────────────────────────

export const Shadows = {
  light: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },
} as const;
