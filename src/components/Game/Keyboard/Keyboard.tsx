import React from 'react';

const keyboardRows = [
  'azertyuiop',
  'qsdfghjklm',
  'wxcvbn⌫↲',
]

const Keyboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
        {
            keyboardRows.map((row) => (
              <div key={row} className="flex">
                  {
                      row.split('').map((character) => (
                        <div key={character} className="flex w-10 h-10 border-2 border-black rounded m-1 items-center justify-center hover:cursor-pointer">
                            {character}
                        </div>
                      ))
                  }
              </div>
            ))
        }
    </div>
  );
};

export default Keyboard;
