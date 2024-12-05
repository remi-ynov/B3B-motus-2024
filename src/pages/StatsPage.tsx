import React from 'react';
import LinkButton from 'src/components/Shared/LinkButton.tsx';

const StatsPage: React.FC = () => {
  return (
    <div>
        <div className="my-12">Statistiques indisponibles pour le moment</div>

        <LinkButton label="< Retour" to="/" />
    </div>
  );
};

export default StatsPage;
