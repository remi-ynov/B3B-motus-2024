import React from 'react';
import KeyboardKey from 'src/components/Game/Keyboard/KeyboardKey.tsx';

interface Props {
  letters: string;
  onKeyPress: (letter: string) => void;
}

const KeyboardRow: React.FC<Props> = ({ letters, onKeyPress }) => {
  return (
    <div className="flex">
      {
        letters
          .split('')
          .map((letter) => (
            <KeyboardKey
              key={letter}
              letter={letter}
              onKeyPress={onKeyPress}
            />
          ))
      }
    </div>
  );
};

export default KeyboardRow;
