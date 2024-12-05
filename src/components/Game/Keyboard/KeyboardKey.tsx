import React from 'react';

interface Props {
  letter: string;
  onKeyPress: (letter: string) => void;
}

const KeyboardKey: React.FC<Props> = ({ letter, onKeyPress }) => {
  return (
    <div
      className="flex w-10 h-10 border-2 border-black rounded m-1 items-center justify-center hover:cursor-pointer"
      onClick={() => onKeyPress(letter)}
    >
        {letter}
    </div>
  );
};

export default KeyboardKey;
