import React from 'react';
import GridRow from 'src/components/Game/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';

interface Props {
  word: string;
}

const Grid: React.FC<Props> = ({ word }) => {
  return (
    <div className="my-8 flex flex-col items-center">
      {
        generateArray(NB_ATTEMPTS).map((item) => (
          <GridRow key={item} word={word} />
        ))
      }
    </div>
  );
};

export default Grid;
