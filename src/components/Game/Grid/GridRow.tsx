import React from 'react';
import GridBox from 'src/components/Game/Grid/GridBox.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { LetterState } from 'src/types/GameTypes.ts';
import { useAtomValue } from 'jotai';
import { getWordAtom } from 'src/atoms/gameAtoms.ts';

interface Props {
  attempt: string;
  result: string;
}

const GridRow: React.FC<Props> = ({ attempt, result }) => {
  const word = useAtomValue(getWordAtom)

  return (
    <div className="flex">
      {
        generateArray(word.length).map((item, index) => (
          <GridBox
            key={item}
            letter={attempt.charAt(index) || ''}
            state={result.charAt(index) as LetterState || LetterState.NOK}
          />
        ))
      }
    </div>
  );
};

export default GridRow;
