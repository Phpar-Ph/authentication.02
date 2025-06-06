import { useGetUserData } from "../hook/useGetUserData";

const User = () => {


  
  const { data, isLoading } = useGetUserData();
  if (isLoading) {
    return <p>Loading...</p>;
  }



  return <div>HELLO {data.name}</div>;
};

export default User;
