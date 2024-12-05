import React from 'react';
import Grid from 'src/components/Game/Grid/Grid.tsx';
import Keyboard from 'src/components/Game/Keyboard/Keyboard.tsx';
import Button from 'src/components/Shared/Button.tsx';
import { useAtom } from 'jotai';
import { numberGamesAtom } from 'src/atoms/gameAtoms.ts';
import useGame from 'src/hooks/useGame.ts';

const Game: React.FC = () => {
  const { onKeyPress, gameFinished } = useGame()
  const [numberGames, setNumberGames] = useAtom(numberGamesAtom);

  return (
    <div>
      <Grid />
      <Keyboard onKeyPress={onKeyPress} />

      {gameFinished && (
        <div className="items-center justify-center flex">
          <Button
            label="Rejouer"
            onClick={() => setNumberGames(numberGames + 1)}
          />
        </div>
      )}
    </div>
  );
};

export default Game;
