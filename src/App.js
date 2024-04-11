import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {app} from './fireconfig'
import { LoginPage } from './Components/LogInPage';
import NotFound from './Components/NotFoundPage'
import ProtectedChat from './Components/ProtectedChat';
import './App.css';

const router = createBrowserRouter([
  {
  path: '/',
  element: <LoginPage />,
  errorElement: <NotFound />
  },
  {
    path: '/chat',
    element: <ProtectedChat />
  },
])

function App() {
  
  if(!app){
    return <h1>Error Initializing firebase</h1>;
  }
  return (
   <RouterProvider router={router} />
  );
}


export default App;
