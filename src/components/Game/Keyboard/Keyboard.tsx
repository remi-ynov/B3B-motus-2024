import React from 'react';
import KeyboardRow from 'src/components/Game/Keyboard/KeyboardRow.tsx';

const keyboardRows = [
  'azertyuiop',
  'qsdfghjklm',
  'wxcvbn⌫↲',
]

const Keyboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
        {
            keyboardRows.map((row) => (
              <KeyboardRow key={row} letters={row} />
            ))
        }
    </div>
  );
};

export default Keyboard;
