import { Outlet } from 'react-router-dom';
import Cart from '../components/molecules/Cart';
import LandingPage from '../pages/LandingPage';

const routePaths = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/test',
    element: <Cart />,
  },
  {
    path: '*',
    element: <div>No routes found</div>,
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
