import { useNavigate } from "react-router";
import User from "../component/User";
import NavBar from "../component/NavBar";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-200">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-8 text-center">
            Welcome to Your Dashboard
          </h1>

          <div className="bg-amber-50 rounded-xl p-6 shadow-inner mb-8">
            <User />
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/")}
              className="group relative inline-flex items-center gap-1.5 px-8 py-3 bg-amber-600 
                text-white rounded-lg transition-all duration-300 ease-in-out hover:bg-amber-700 
                focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
