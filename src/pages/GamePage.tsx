import React, { Suspense } from 'react';
import Title from 'src/components/Shared/Title.tsx';
import Message from 'src/components/Shared/Message.tsx';
import Game from 'src/components/Game/Game.tsx';
import Loader from 'src/components/Shared/Loader.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import { useAtomValue } from 'jotai';
import { numberGamesAtom } from 'src/atoms/gameAtoms.ts';

const GamePage: React.FC = () => {
    const numberGames = useAtomValue(numberGamesAtom);

    return (
      <div>
          <Title label="MOTUS" />

          <div className="text-center my-4">
              Nombre de parties : {numberGames}
          </div>

          <Message />

          <ErrorBoundary fallback={<div>Une erreur est survenue...</div>}>
              <Suspense fallback={<Loader />}>
                  <Game />
              </Suspense>
          </ErrorBoundary>
      </div>
    );
};
export default GamePage;
