import React from 'react';
import GridRow from 'src/components/Game/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';

interface Props {
  length: number;
  attempts: string[];
  results: string[];
}

const Grid: React.FC<Props> = ({ length, attempts, results }) => {
  return (
    <div className="my-8 flex flex-col items-center">
      {
        generateArray(NB_ATTEMPTS).map((item, index) => (
          <GridRow
            key={item}
            length={length}
            attempt={index in attempts ? attempts[index] : ''}
            result={index in results ? results[index] : ''}
          />
        ))
      }
    </div>
  );
};

export default Grid;
