import type { Resume } from '../data/resume';
import { defaultResume } from '../data/resume';

export const save = (resume: Partial<Resume>): void => {
  const current = load();
  localStorage.setItem('resume', JSON.stringify({ ...current, ...resume }));
};

export const load = (): Resume => {
  try {
    const stored = localStorage.getItem('resume');
    return stored ? { ...defaultResume, ...JSON.parse(stored) } : defaultResume;
  } catch {
    return defaultResume;
  }
};


