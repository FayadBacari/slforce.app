/**
 * Route onboarding coach — 7 etapes.
 */

import OnboardingScreen from '@/features/auth/components/OnboardingScreen';
import { COACH_STEPS } from '@/features/auth/data/coach-steps';

export default function OnboardingCoachRoute() {
  return <OnboardingScreen steps={COACH_STEPS} storageKey="coach" />;
}
