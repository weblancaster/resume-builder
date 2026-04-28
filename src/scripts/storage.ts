import type { Resume } from "../data/resume";
import { defaultResume } from "../data/resume";

const STORAGE_KEY = "resume";
const DEFAULT_HASH_KEY = "resume_default_hash";

const hashObject = (obj: unknown): string => {
  const str = JSON.stringify(obj);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = Math.trunc(Math.imul(31, hash) + (str.codePointAt(i) ?? 0));
  }
  return String(hash);
};

const currentDefaultHash = hashObject(defaultResume);

export const save = (resume: Partial<Resume>): void => {
  const current = load();
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...current, ...resume }));
  localStorage.setItem(DEFAULT_HASH_KEY, currentDefaultHash);
};

export const load = (): Resume => {
  try {
    const storedHash = localStorage.getItem(DEFAULT_HASH_KEY);
    if (storedHash !== currentDefaultHash) {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(DEFAULT_HASH_KEY);
      return defaultResume;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...defaultResume, ...JSON.parse(stored) } : defaultResume;
  } catch {
    return defaultResume;
  }
};
