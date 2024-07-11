/* eslint-disable no-unused-vars */
import React from 'react'

function Appointment() {
  return (
    <section className="w-full max-w-md mt-10 p-8 bg-white shadow-md rounded">
    <h2 className="text-2xl font-semibold mb-6 text-center text-green-600">Make an Appointment</h2>
    <form className="space-y-4">
      <div className="form-group">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="w-full mt-1 p-2 border border-gray-300 rounded" required />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded" required />
      </div>
      <div className="form-group">
        <label htmlFor="date" className="block text-gray-700">Date</label>
        <input type="date" id="date" name="date" className="w-full mt-1 p-2 border border-gray-300 rounded" required />
      </div>
      <div className="form-group">
        <label htmlFor="time" className="block text-gray-700">Time</label>
        <input type="time" id="time" name="time" className="w-full mt-1 p-2 border border-gray-300 rounded" required />
      </div>
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Book Appointment</button>
    </form>
  </section>
  )
}

export default Appointment
