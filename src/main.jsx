import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import MovieDetails from './Components/Home/MovieDetails.jsx';
import MainLayout from './Components/MainLayout/MainLayout';
import BookingTicket from './Components/Home/BookingTicket/BookingTicket';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
  {
    path:"movie/:id",
    element:<MovieDetails></MovieDetails>,
    loader:({params})=>fetch(`https://api.tvmaze.com/shows/${params.id}`)
  },
  {
    path:'booking/:id',
    element:<BookingTicket></BookingTicket>,
    loader:({params})=> fetch(`https://api.tvmaze.com/shows/${params.id}`)
  }
    ]
    
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
