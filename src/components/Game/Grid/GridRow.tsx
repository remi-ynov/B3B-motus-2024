import React from 'react';
import GridBox from 'src/components/Game/Grid/GridBox.tsx';
import { generateArray } from 'src/helpers/genericHelper.ts';

interface Props {
  word: string;
}

const GridRow: React.FC<Props> = ({ word }) => {
  return (
    <div className="flex">
      {
        generateArray(word.length).map((item, index) => (
          <GridBox key={item} letter={index === 0 ? word.charAt(0) : ''} />
        ))
      }
    </div>
  );
};

export default GridRow;
