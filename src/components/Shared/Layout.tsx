import React from 'react';
import Title from 'src/components/Shared/Title.tsx';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col items-center py-6">
        <Title label="MOTUS" />

        <Outlet />
    </div>
  );
};

export default Layout;
