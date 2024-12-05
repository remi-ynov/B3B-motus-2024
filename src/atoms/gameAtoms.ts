import { atom } from 'jotai';
import { getRandomWord } from 'src/api/gameApi.ts';

export const getWordAtom = atom((get) => {
  get(numberGamesAtom);

  return getRandomWord()
});

export const numberGamesAtom = atom<number>(1);

export const attemptsAtom = atom<string[]>([]);

export const resultsAtom = atom<string[]>([]);

export const messageAtom = atom<string|null>(null);

export const currentAttemptAtom = atom<string>((get) => {
  const attempts = get(attemptsAtom);
  return attempts[attempts.length - 1];
})
