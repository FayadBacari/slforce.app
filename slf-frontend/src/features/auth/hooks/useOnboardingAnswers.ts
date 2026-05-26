/**
 * Hook pour persister les reponses d'onboarding dans AsyncStorage.
 * Si l'utilisateur quitte et revient, ses reponses sont restaurees.
 */

import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Cle de stockage par type d'onboarding
const STORAGE_KEY = 'onboarding_answers_';

export function useOnboardingAnswers(key: string) {
  const storageKey = STORAGE_KEY + key;
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loaded, setLoaded] = useState(false);

  // Charge les reponses au montage
  useEffect(() => {
    AsyncStorage.getItem(storageKey).then((data) => {
      if (data) setAnswers(JSON.parse(data));
      setLoaded(true);
    });
  }, [storageKey]);

  // Sauvegarde a chaque changement (apres le chargement initial)
  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem(storageKey, JSON.stringify(answers));
    }
  }, [answers, loaded, storageKey]);

  // Met a jour une reponse
  const setValue = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  // Supprime les reponses (apres soumission finale)
  const clearAnswers = () => {
    setAnswers({});
    AsyncStorage.removeItem(storageKey);
  };

  return { answers, setValue, clearAnswers, loaded };
}
