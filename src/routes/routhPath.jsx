import { Outlet } from 'react-router-dom';
import Cart from '../components/molecules/Cart';
import Category from '../pages/Category';
import LandingPage from '../pages/LandingPage';
import SingleItem from '../pages/SingleItem';

const routePaths = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/category',
    element: <Category />,
  },
  {
    path: '/test',
    element: <SingleItem />,
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
