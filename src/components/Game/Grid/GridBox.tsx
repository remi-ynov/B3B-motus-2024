import React from 'react';
import { LetterState } from 'src/types/GameTypes.ts';
import { getLetterStateClasses } from 'src/helpers/gameHelper.ts';

interface Props {
  letter: string;
  state: LetterState;
}

const GridBox: React.FC<Props> = ({ letter, state }) => {
  return (
    <div className="h-12 w-12 bg-blue-700 m-1 text-white text-xl flex items-center justify-center">
        <div className={`${getLetterStateClasses(state)} w-full h-full flex items-center justify-center`}>
          {letter}
      </div>
    </div>
  );
};

export default GridBox;
