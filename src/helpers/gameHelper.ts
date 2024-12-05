import { LetterState } from 'src/types/GameTypes.ts';
export const getLetterStateClasses = (letterState: LetterState) => {
  if (letterState === LetterState.OK) {
    return 'bg-red-500';
  }
  if (letterState === LetterState.MISPLACED) {
    return 'rounded-full bg-yellow-600'
  }
  return '';
}

export const formatWord = (word: string) => (
  word
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toUpperCase()
);
