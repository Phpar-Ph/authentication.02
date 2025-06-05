import { useGetUserAuth, useGetUserData } from "../hook/useFetchData";
import { Outlet, Navigate } from "react-router";
import { useSetUserData } from "../store/useStoreUserData";
import { useToken } from "../store/useTokenStore";
import { useEffect, useState } from "react";
const Prefetch = () => {
  const token = useToken();

  const [isLoading, setIsLoading] = useState(true);
  const { data: userData } = useGetUserData();
  const { refetch: checkAuth } = useGetUserAuth();
  const setUserData = useSetUserData();


  
  return <Outlet />;
};

export default Prefetch;
