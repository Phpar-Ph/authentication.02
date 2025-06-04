import React from "react";
import { NavLink } from "react-router";
const Public = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-indigo-600">My App</span>
          </h1>
        </header>
        <main className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-xl text-gray-700 mb-6 text-center">
            This app provides secure user authentication services
          </p>
          <div className="space-y-4 mb-8">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h2 className="font-semibold text-lg text-indigo-800 mb-2">
                About this app
              </h2>
              <p className="text-gray-700">
                Experience seamless and secure authentication with our modern
                web application.
              </p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h2 className="font-semibold text-lg text-indigo-800 mb-2">
                Features
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Secure user login</li>
                <li>Quick registration process</li>
                <li>Protected routes</li>
                <li>Modern authentication system</li>
              </ul>
            </div>
          </div>
        </main>
        <footer className="text-center">
          <NavLink
            to="/login"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
          >
            Get Started →
          </NavLink>
        </footer>
      </section>
    </div>
  );
};

export default Public;
