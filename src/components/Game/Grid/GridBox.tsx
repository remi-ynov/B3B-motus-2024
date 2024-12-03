import React from 'react';

interface Props {
  letter: string;
}

const GridBox: React.FC<Props> = ({ letter }) => {
  return (
    <div className="h-12 w-12 bg-blue-700 m-1 text-white text-xl flex items-center justify-center">
      <div>
        {letter}
      </div>
    </div>
  );
};

export default GridBox;
