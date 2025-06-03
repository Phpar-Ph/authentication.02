import { useGetUserAuth, useGetUserData } from "../hook/useAuth";
function Home() {
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
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

export default Home;
