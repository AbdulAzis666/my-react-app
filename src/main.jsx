import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Locations from './pages/Locations.jsx'
import Products from './pages/Products.jsx';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router= createBrowserRouter([
  {
  path: "/",
  element: <Home />,
},
{
  path: "/about",
  element: <About />,
},
{
  path: "/contact",
  element: <Contact />,
},
{
  path: "/locations",
  element: <Locations />,
},
{
  path: "/products",
  element: <Products />,
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
