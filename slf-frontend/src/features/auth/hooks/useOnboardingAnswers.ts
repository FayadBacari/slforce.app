// import all dependencies
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage key per onboarding type
const STORAGE_KEY = 'onboarding_answers_';


export function useOnboardingAnswers(key: string) {
  const storageKey = STORAGE_KEY + key;
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loaded, setLoaded] = useState(false);

  // Load answers on mount
  useEffect(() => {
    AsyncStorage.getItem(storageKey).then((data) => {
      if (data) setAnswers(JSON.parse(data));
      setLoaded(true);
    });
  }, [storageKey]);

  // Save on every change (after initial load)
  useEffect(() => {
    if (loaded) {
      AsyncStorage.setItem(storageKey, JSON.stringify(answers));
    }
  }, [answers, loaded, storageKey]);

  // Updates a single answer
  const setValue = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  // Clears all answers (after final submission)
  const clearAnswers = () => {
    setAnswers({});
    AsyncStorage.removeItem(storageKey);
  };

  return { answers, setValue, clearAnswers, loaded };
}
