import React from "react";
import { NavLink } from "react-router";

const Public = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-200 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <section className="container mx-auto px-4 py-16 relative z-10">
        <header className="text-center mb-12 transform hover:scale-105 transition-transform duration-500">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">
            Welcome to <span className="text-amber-600">Auth App</span>
          </h1>
          <p className="text-xl text-amber-800 mt-4">
            Secure, Simple, Seamless
          </p>
        </header>

        <main className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 hover:shadow-2xl transition-shadow duration-300">
          <p className="text-2xl text-amber-800 mb-8 text-center font-light">
            Experience modern authentication at its finest
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50/80 p-6 rounded-xl shadow-inner transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="font-bold text-xl text-amber-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                About
              </h2>
              <p className="text-amber-700 leading-relaxed">
                Built with modern technologies, our authentication system provides 
                top-notch security while maintaining a seamless user experience.
              </p>
            </div>

            <div className="bg-amber-50/80 p-6 rounded-xl shadow-inner transform hover:-translate-y-1 transition-all duration-300">
              <h2 className="font-bold text-xl text-amber-800 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Features
              </h2>
              <ul className="space-y-2 text-amber-700">
                {["Secure Authentication", "JWT Tokens", "Protected Routes", "Refresh Tokens"].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>

        <footer className="text-center">
          <NavLink
            to="/login"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-amber-600 text-white font-semibold 
                     hover:bg-amber-700 transform hover:scale-105 transition-all duration-300 
                     focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Get Started
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NavLink>
        </footer>
      </section>
    </div>
  );
};

export default Public;