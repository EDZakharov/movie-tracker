import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import './index.css';

const LazyHomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LazyMoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));

export default function AppRouter() {
  return createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/home',
          element: <LazyHomePage />,
        },
        {
          path: '/movie',
          element: <LazyMoviePage />,
          children: [
            {
              path: ':movieId',
              element: <LazyMoviePage />,
            },
          ]
        },
      ],
      errorElement: <div>404</div>,
    },
  ]);
}
