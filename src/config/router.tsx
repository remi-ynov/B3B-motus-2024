import { createBrowserRouter } from 'react-router-dom';
import GamePage from 'src/pages/GamePage.tsx';
import HomePage from 'src/pages/HomePage.tsx';
import StatsPage from 'src/pages/StatsPage.tsx';
import Layout from 'src/components/Shared/Layout.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'game',
                element: <GamePage />,
            },
            {
                path: 'stats',
                element: <StatsPage />,
            }
        ]
    },
]);

export default router;
