/**
 * Route onboarding athlete — 9 etapes.
 */

import OnboardingScreen from '@/features/auth/components/OnboardingScreen';
import { ATHLETE_STEPS } from '@/features/auth/data/athlete-steps';

export default function OnboardingAthleteRoute() {
  return <OnboardingScreen steps={ATHLETE_STEPS} storageKey="athlete" />;
}
