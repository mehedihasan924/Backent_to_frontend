import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Component/Home/Home.jsx'
import Phones from './Component/Phones/Phones.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phonedetails from './Component/PhoneDetails/Phonedetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/phones",
        element: <Phones />,
        loader:()=>fetch('http://localhost:5000/phones/')
      },
      {
        path:"/phone/:id",
        element:<Phonedetails></Phonedetails>,
        loader:({params})=> fetch(`http://localhost:5000/phones/${params.id}`)
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
