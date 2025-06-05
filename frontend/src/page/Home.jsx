import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      {isLoading ? (
        <p className="text-gray-600">Loading...</p>
      ) : data ? (
        <p className="text-xl">Hello, {data.name}!</p>
      ) : (
        <p className="text-gray-600">Loading user data...</p>
      )}

      <p
        className="text-red-400 font-bold text-2xl cursor-pointer hover:text-red-500 mt-4"
        onClick={() => navigate("/")}
      >
        Back to home
      </p>
    </div>
  );
}

export default Home;
