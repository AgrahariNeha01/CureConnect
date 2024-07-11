// App.js
/* eslint-disable no-unused-vars */
import React from 'react'
import Landing from './Components/Landing'
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
// import Appointment from './Components/Appointment';

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
