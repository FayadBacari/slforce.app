// import all dependencies
import { COACH_STEPS } from '@/features/auth/data/coach-steps';
import OnboardingScreen from '@/features/auth/components/OnboardingScreen';


export default function OnboardingCoachRoute() {
  return <OnboardingScreen steps={COACH_STEPS} storageKey="coach" />;
}
