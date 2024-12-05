import React, { useState } from 'react';
import Title from 'src/components/Shared/Title.tsx';
import Grid from 'src/components/Game/Grid/Grid.tsx';
import Keyboard from 'src/components/Game/Keyboard/Keyboard.tsx';
import { LetterState } from 'src/types/GameTypes.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';
import Message from 'src/components/Shared/Message.tsx';

const Game: React.FC = () => {
  const [word] = useState('CHIEN')
  const [attempts, setAttempts] = useState([word.charAt(0)]);
  const [results, setResults] = useState<string[]>([]);
  const [message, setMessage] = useState<string|null>(null);
  const currentAttempt = attempts[attempts.length - 1];

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
    }
    else if (attempts.length === NB_ATTEMPTS) {
      setMessage(`Dommage, vous avez perdu... Le mot était : ${word}`)
    }
    else {
      setAttempts([...attempts, word.charAt(0)]);
    }
  }

  return (
    <div>
      <Title label="MOTUS" />
      <Message content={message} />
      <Grid
        length={word.length}
        attempts={attempts}
        results={results}
      />
      <Keyboard onKeyPress={onKeyPress} />
    </div>
  );
};

export default Game;


// const tentatives = [
//   'cfreni',
//   'grneng',
//   'ffrefr',
//   'ij'
// ]
//
// const resultats = [
//   'VXXOXX',
//   'VXXOXX',
//   'VXXOXX',
// ]
