/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/Index';
import { ChakraProvider } from '@chakra-ui/react'


const router = createBrowserRouter([
  {
    path: "/",
    element: '<h1>hello</h1>',
  },
]);

function App() {
   <ChakraProvider>
    <RouterProvider router={router} />
   </ChakraProvider>
}

export default App
