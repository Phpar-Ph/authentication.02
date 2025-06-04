import { useNavigate } from "react-router";
import { useGetUserAuth, useGetUserData } from "../hook/useFetchData";
function Home() {
  const navigate = useNavigate();
  const { data: auth } = useGetUserAuth();
  const { data: user } = useGetUserData({
    enabled: auth?.success === true,
  });

  return (
    <div>
      <h1>Welcome</h1>
      {auth?.success ? (
        user ? (
          <p>Hello, {user.name}!</p>
        ) : (
          <p>Loading user data...</p>
        )
      ) : (
        <>
          <p>You are not logged in.</p>
          <p
            className="text-red-400 font-bold text-2xl"
            onClick={() => navigate("/")}
          >
            bact to home
          </p>
        </>
      )}
    </div>
  );
}

export default Home;
