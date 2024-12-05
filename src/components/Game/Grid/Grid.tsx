import React from 'react';
import GridRow from 'src/components/Game/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';
import { useAtomValue } from 'jotai';
import { attemptsAtom, resultsAtom } from 'src/atoms/gameAtoms.ts';

const Grid: React.FC = () => {
  const attempts = useAtomValue(attemptsAtom)
  const results = useAtomValue(resultsAtom)

  return (
    <div className="my-8 flex flex-col items-center">
      {
        generateArray(NB_ATTEMPTS).map((item, index) => (
          <GridRow
            key={item}
            attempt={index in attempts ? attempts[index] : ''}
            result={index in results ? results[index] : ''}
          />
        ))
      }
    </div>
  );
};

export default Grid;
