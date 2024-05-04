import React from 'react';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import Actors from './pages/Actors';
import ErrorPage from './pages/ErrorPage';
const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/directors',
    element: <Directors />
  },
  {
    path: '/movie/:id',
    element: <Movie />
  },
  {
    path: '/actors',
    element: <Actors />
  } 
   
  ];

export default routes;