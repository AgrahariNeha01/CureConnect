/* eslint-disable no-unused-vars */
import React from 'react';

import ReactDOM from 'react-dom/client'
function Landing() {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-100 py-10">
    {/* Main Section */}
    <main className="w-full max-w-7xl mt-10 p-8 bg-white shadow-md rounded flex flex-col lg:flex-row items-center bg-cover bg-center" style={{ backgroundImage: "url('https://media.istockphoto.com/id/1304464233/photo/senior-man-listening-to-explanation-for-filling-in-medical-record-forms-for-vaccination.webp?b=1&s=170667a&w=0&k=20&c=uisFiiiw0ReP_F946iAnodFw1mGGvlMrHH24cN7E0M8=')" }}>
      <div className="lg:w-1/2 p-8 bg-white bg-opacity-80 rounded">
        <h1 className="text-4xl font-bold text-green-600">Welcome to CureConnect</h1>
        <p className="mt-4 text-xl text-gray-700">Book your appointment with top doctors easily and quickly.</p>
        <section id="about" className="mt-8">
          <h2 className="text-2xl font-semibold text-green-600">About Us</h2>
          <p className="mt-2 text-gray-700">
            CureConnect is your one-stop solution for booking doctor appointments online. We connect you with the best doctors in your area for efficient and quality healthcare services.
          </p>
        </section>
      </div>
      <div className="lg:w-1/2 p-8 flex justify-center bg-white bg-opacity-80 rounded">
        <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Doctor" className="rounded-lg shadow-lg max-h-96" />
      </div>
    </main>
  </div>
  );
}
  

export default Landing;
