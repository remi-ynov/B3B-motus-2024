import React, { useEffect, useState } from 'react';
import Title from 'src/components/Shared/Title.tsx';
import Grid from 'src/components/Game/Grid/Grid.tsx';
import Keyboard from 'src/components/Game/Keyboard/Keyboard.tsx';
import { LetterState } from 'src/types/GameTypes.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';
import Message from 'src/components/Shared/Message.tsx';
import { getRandomWord } from 'src/api/gameApi.ts';
import Loader from 'src/components/Shared/Loader.tsx';
import Button from 'src/components/Shared/Button.tsx';

const Game: React.FC = () => {
  const [word, setWord] = useState('')
  const [attempts, setAttempts] = useState<string[]>([]);
  const [results, setResults] = useState<string[]>([]);
  const [message, setMessage] = useState<string|null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [gameFinished, setGameFinished] = useState<boolean>(false);
  const currentAttempt = attempts[attempts.length - 1];

  useEffect(() => {
    startGame()
  }, []);

  const startGame = () => {
    setMessage(null)
    setLoading(true)

    getRandomWord()
      .then((data) => {
        setWord(data);
        setAttempts([data.charAt(0)]);
        setResults([]);
      })
      .catch((error) => setMessage(error.message))
      .finally(() => {
        setLoading(false)
        setGameFinished(false)
      });
  }

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

  return (
    <div>
      <Title label="MOTUS" />
      <Message content={message} />

      {loading && <Loader />}
      {word !== '' && (
        <>
          <Grid
            length={word.length}
            attempts={attempts}
            results={results}
          />
          <Keyboard onKeyPress={onKeyPress} />
        </>
      )}

      {gameFinished && (
        <div className="items-center justify-center flex">
          <Button label="Rejouer" onClick={startGame} />
        </div>
      )}
    </div>
  );
};

export default Game;
