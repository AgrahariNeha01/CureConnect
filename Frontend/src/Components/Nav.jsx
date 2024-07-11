/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center m-4">
        <div className="flex items-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAxGz8mPhADevO43s0BaWSefUboH0-LMw1TA&s" alt="CureConnect Logo" className="h-10" />
          <NavLink to="/" className="ml-4 text-2xl font-semibold text-green-600">CureConnect</NavLink>
        </div>
        <div className="flex items-center space-x-6">
          <NavLink to ="/about" className="text-gray-700 hover:text-green-600">About</NavLink>
          <NavLink to ="/signin" className="text-gray-700 hover:text-green-600">Sign In</NavLink>
          <NavLink to = "/signup" className="text-gray-700 hover:text-green-600">Sign Up</NavLink>
        </div>
      </nav>
  )
}

export default Nav
