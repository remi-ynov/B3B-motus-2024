import React from 'react';
import GridRow from 'src/components/Game/Grid/GridRow.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';
import { NB_ATTEMPTS } from 'src/config/gameConfig.ts';

const Grid: React.FC = () => {
  return (
    <div className="my-8 flex flex-col items-center">
      {
        generateArray(NB_ATTEMPTS).map((item) => (
          <GridRow key={item} />
        ))
      }
    </div>
  );
};

export default Grid;
