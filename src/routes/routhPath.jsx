import { Outlet } from 'react-router-dom';
import OrderMsg from '../components/molecules/OrderMsg';
import Category from '../pages/Category';
import Checkout from '../pages/Checkout';
import LandingPage from '../pages/LandingPage';
import SingleItem from '../pages/SingleItem';

const routePaths = [
  {
    path: '/',
    element: <LandingPage />,
  },

  {
    path: 'category/*',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <Category />,
      },
      {
        path: ':id',
        element: <SingleItem />,
      },
    ],
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/test',
    element: <OrderMsg />,
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
