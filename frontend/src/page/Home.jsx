import { useNavigate } from "react-router";
import { useGetUserData } from "../hook/useGetUserData";
import NavBar from "../component/NavBar";
function Home() {
  const navigate = useNavigate();
  const { data, isLoading } = useGetUserData();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <NavBar />
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>

      <p className="text-xl">Hello,{data.name}!</p>

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
