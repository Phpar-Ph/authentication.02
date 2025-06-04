import { useEffect } from "react";
import { useGetUserAuth, useGetUserData } from "../hook/useFetchData";
import { Outlet } from "react-router";
import useStoreData from "../store/useStoreUserData";

const Prefetch = () => {
  const { data: authData, isLoading: authLoading } = useGetUserAuth();
  const { data: userData, isLoading: userLoading } = useGetUserData();
  const { setUserData } = useStoreData();

  useEffect(() => {
    if (authData && userData) {
      console.log("Auth data:", authData);
      console.log("User data:", userData);
      setUserData({
        ...authData,
        ...userData,
      });
    }
  }, [authData, userData, setUserData]);

  if (authLoading || userLoading) {
    return <div>Loading...</div>;
  }

  return <Outlet />;
};

export default Prefetch;
