import React from 'react';
import Title from 'src/components/Shared/Title.tsx';
import Grid from 'src/components/Game/Grid/Grid.tsx';
import Keyboard from 'src/components/Game/Keyboard/Keyboard.tsx';

const WORD = 'CHIEN'

const Game: React.FC = () => {
  return (
    <div>
      <Title label="MOTUS" />
      <Grid word={WORD} />
      <Keyboard />
    </div>
  );
};

export default Game;
