import { useNavigate } from "react-router";
import User from "../component/User";
import NavBar from "../component/NavBar";
function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <NavBar />
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>

      <User />

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
