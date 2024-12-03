import React from 'react';
import GridBox from 'src/components/Game/Grid/GridBox.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';

const GridRow: React.FC = () => {
  return (
    <div className="flex">
      {
        generateArray(8).map((item) => (
          <GridBox key={item} />
        ))
      }
    </div>
  );
};

export default GridRow;
