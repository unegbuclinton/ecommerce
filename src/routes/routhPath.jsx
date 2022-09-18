import { Outlet } from 'react-router-dom';
import WishList from '../components/molecules/WishList';
import Blog from '../pages/Blog';
import Category from '../pages/Category';
import Checkout from '../pages/Checkout';
import LandingPage from '../pages/LandingPage';
import NewArrival from '../pages/NewArrival';
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
    path: '/new-arrival',
    element: <NewArrival />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: 'wish-list/*',
    element: <Outlet />,
    children: [
      {
        path: '/',
        element: <WishList />,
      },
      {
        path: ':id',
        element: <SingleItem />,
      },
    ],
  },
  {
    path: '/test',
    element: <Blog />,
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
