import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Footer from './Components/Footer'
import Explore from './Pages/Explore'
import MyOrders from './Pages/MyOrders'
import Account from './Pages/Account'
import Login from './Pages/Login'
import SignUp from './Components/SignUp'
import Layout from './Layout'


  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {index: true, element: <Home />},
        {path: 'explore', element: <Explore />},
        {path: 'my-orders', element: <MyOrders />},
        {path: 'account', element: <Account />,},
        {path: 'login', element: <Login />,},
        {path: 'signup', element: <SignUp />,},

      ]
    },

  ])

  const App = () => {

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
