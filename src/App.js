import React from 'react';
import './styles/App.css'
import './styles/Responsive.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';
import Search from './pages/Search';
import Profile from './pages/Profile';


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path ="/" element={<Home />} />
          <Route path ="/create-blog" element={<CreateBlog />} />
          <Route path ="/search" element={<Search />} />
          <Route path ="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App