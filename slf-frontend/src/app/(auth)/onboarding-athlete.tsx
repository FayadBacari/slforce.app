// import all dependencies
import { ATHLETE_STEPS } from '@/features/auth/data/athlete-steps';
import OnboardingScreen from '@/features/auth/components/OnboardingScreen';


export default function OnboardingAthleteRoute() {
  return <OnboardingScreen steps={ATHLETE_STEPS} storageKey="athlete" />;
}
