import React from 'react'
import Naviagtion from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Naviagtion/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/chat" element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;