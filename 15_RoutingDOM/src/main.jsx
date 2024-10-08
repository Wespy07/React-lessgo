import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Profile from './components/Profile.jsx';
import Settings from './components/Settings.jsx';
import User from './components/User.jsx';
import PostsPage from './components/PostsPage.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* single level routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* nested level routes */}
        <Route path='account'>
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* dynamic routes */}
        <Route path='/user/:username' element={<User/>} />
        <Route path='/post/:postId' element={<PostsPage/>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
