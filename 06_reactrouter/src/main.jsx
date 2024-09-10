import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'',
        element: <Home/>
      },
      {
        path:'contact',
        element: <Contact/>
      },
      {
        path:'about',
        element: <About/>
      },
      {
        path:'user/:userid',
        element: <User/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)
