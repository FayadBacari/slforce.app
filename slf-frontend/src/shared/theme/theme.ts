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

// ─── FONT FAMILIES ──────────────────────────────────────────

export const Fonts = {
  regular: 'Inter_400Regular',
  medium: 'Inter_500Medium',
  semiBold: 'Inter_600SemiBold',
  bold: 'Inter_700Bold',
} as const;

// ─── TYPOGRAPHY ──────────────────────────────────────────────

export const Typography = {
  h1: { fontSize: 28, fontFamily: Fonts.bold },
  h2: { fontSize: 24, fontFamily: Fonts.bold },
  h3: { fontSize: 20, fontFamily: Fonts.semiBold },
  body: { fontSize: 16, fontFamily: Fonts.regular },
  bodySmall: { fontSize: 14, fontFamily: Fonts.regular },
  label: { fontSize: 14, fontFamily: Fonts.medium },
  button: { fontSize: 16, fontFamily: Fonts.semiBold },
  link: { fontSize: 14, fontFamily: Fonts.semiBold },
  caption: { fontSize: 12, fontFamily: Fonts.regular },
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
