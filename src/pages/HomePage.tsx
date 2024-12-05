import React from 'react';
import LinkButton from 'src/components/Shared/LinkButton.tsx';
import { Colors } from 'src/types/Colors.ts';


const HomePage: React.FC = () => {
  return (
    <div className="py-12">
      <LinkButton label="Jouer" to="/game" color={Colors.Red}/>
      <LinkButton label="Statistiques" to="/stats" color={Colors.Yellow} />
    </div>
  );
};

export default HomePage;
