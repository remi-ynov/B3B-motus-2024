import React from 'react';
import KeyboardKey from 'src/components/Game/Keyboard/KeyboardKey.tsx';

interface Props {
  letters: string;
}

const KeyboardRow: React.FC<Props> = ({ letters }) => {
  return (
    <div className="flex">
      {
        letters
          .split('')
          .map((letter) => (
            <KeyboardKey key={letter} letter={letter} />
          ))
      }
    </div>
  );
};

export default KeyboardRow;
