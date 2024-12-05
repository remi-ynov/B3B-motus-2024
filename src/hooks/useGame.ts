import { useAtom, useAtomValue, useSetAtom } from 'jotai/index';
import {
  attemptsAtom,
  currentAttemptAtom,
  getWordAtom,
  messageAtom,
  resultsAtom
} from 'src/atoms/gameAtoms.ts';
import { useEffect, useState } from 'react';
import { LetterState } from 'src/types/GameTypes.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';

const useGame = () => {
  const word = useAtomValue(getWordAtom);
  const [attempts, setAttempts] = useAtom(attemptsAtom);
  const [results, setResults] = useAtom(resultsAtom);
  const currentAttempt = useAtomValue(currentAttemptAtom)
  const setMessage = useSetAtom(messageAtom);
  const [gameFinished, setGameFinished] = useState<boolean>(false);

  useEffect(() => {
    if (word) {
      setMessage(null);
      setAttempts([word.charAt(0)]);
      setResults([]);
    }
  }, [word]);

  const onKeyPress= (letter: string) => {
    setMessage(null)

    if (letter === '⌫') {
      removeLetter();
    }
    else if (letter === '↲') {
      validAttempt();
    }
    else if (hasMaxLength()) {
      return;
    }
    else {
      addLetter(letter)
    }
  }

  const hasMaxLength = () => {
    return currentAttempt.length === word.length;
  }

  const addLetter = (letter: string) => {
    const copy = [...attempts];
    copy[copy.length - 1] = currentAttempt + letter;
    setAttempts(copy);
  }

  const removeLetter = () => {
    const copy = [...attempts];
    copy[copy.length - 1] = currentAttempt.slice(0, -1);
    setAttempts(copy);
  }

  const validAttempt = () => {
    if (!hasMaxLength()) {
      return setMessage('Veuillez remplir la ligne');
    }

    const attemptResult = Array.from(currentAttempt).reduce((acc, current, index) => {
      if (current === word.charAt(index)) {
        return acc + LetterState.OK;
      }
      if (word.includes(current)) {
        return acc + LetterState.MISPLACED;
      }
      return acc + LetterState.NOK
    }, '');

    setResults([...results, attemptResult]);

    if (currentAttempt === word) {
      setMessage('BRAVO !')
      setGameFinished(true)
    }
    else if (attempts.length === NB_ATTEMPTS) {
      setMessage(`Dommage, vous avez perdu... Le mot était : ${word}`)
      setGameFinished(true)
    }
    else {
      setAttempts([...attempts, word.charAt(0)]);
    }
  }

  return { onKeyPress, gameFinished }
}

export default useGame;
