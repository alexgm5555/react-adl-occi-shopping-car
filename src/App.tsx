import React, { FC } from 'react';

import './App.css';
import { Login, Main } from './pages';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/Main',
    element: <Main />
  },
  {
    path: '/Login',
    element: <Login />
  },
]);

const App:FC =()=>{
  return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );
}

export default App;
