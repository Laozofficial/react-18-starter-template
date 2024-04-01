import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/Index'
import { ChakraProvider } from '@chakra-ui/react'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <ChakraProvider>
    <RouterProvider router={router} />
   </ChakraProvider>
)
