import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import React from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import ChefDetails from './components/ChefDetails';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import SignIn from './components/SignIn';
import Testimonials from './components/Testimonials';
import LogIn from './components/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/AboutUs",
        element: <Aboutus></Aboutus>
      },
      {
        path: "/ChefDetails",
        element: <ChefDetails></ChefDetails>
      },
      {
        path: "/Services",
        element: <Services></Services>
      },
      {
        path: "/ContactUs",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/Testimonials",
        element: <Testimonials></Testimonials>
      },
      {
        path: "/LogIn",
        element: <LogIn></LogIn>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
