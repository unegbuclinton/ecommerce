import { Outlet } from 'react-router-dom';
import LoadingScreen from '../components/molecules/LoadState';
import LandingPage from '../pages/LandingPage';

const routePaths = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/test',
    element: <LoadingScreen />,
  },
  {
    path: 'dashboard/*',
    // isPrivate: true,
    element: <Outlet />,
    children: [
      {
        path: 'fundraising',
        element: <p>COmps</p>,
      },
    ],
  },
];

export default routePaths;
